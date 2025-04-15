import { NextRequest, NextResponse } from 'next/server';

// 지원하는 언어 목록
const supportedLocales = ['ko', 'en', 'zh', 'ja'];
const defaultLocale = 'ko';

// 경로에서 언어 코드를 확인하는 함수
function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameSegments = pathname.split('/').filter(Boolean);
  
  // 첫 번째 세그먼트가 지원하는 언어 코드인 경우
  if (pathnameSegments.length > 0 && supportedLocales.includes(pathnameSegments[0])) {
    return pathnameSegments[0];
  }
  
  // 언어 코드가 없는 경우 Accept-Language 헤더 확인
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage
      .split(',')
      .map(item => item.split(';')[0])
      .map(item => item.trim());
    
    // 지원하는, 사용자가 선호하는 언어 코드 찾기
    const matchedLocale = acceptedLocales.find(locale => 
      supportedLocales.includes(locale) || 
      supportedLocales.includes(locale.split('-')[0])
    );
    
    if (matchedLocale) {
      // 전체 로케일에서 언어 코드만 추출 (예: en-US -> en)
      const localePrefix = matchedLocale.split('-')[0];
      if (supportedLocales.includes(localePrefix)) {
        return localePrefix;
      }
    }
  }
  
  // 기본 언어 코드 반환
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // API 경로 또는 정적 파일 경로는 처리하지 않음
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/images/')
  ) {
    return NextResponse.next();
  }
  
  // 현재 경로에서 첫 번째 세그먼트 확인
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathnameSegments[0];
  
  // 이미 언어 코드가 있으면 그대로 진행
  if (supportedLocales.includes(firstSegment)) {
    return NextResponse.next();
  }
  
  // 루트 경로(/)이거나 언어 코드가 없는 경우 기본 언어로 리다이렉션
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  
  // 쿼리 파라미터 복사
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value);
  });
  
  return NextResponse.redirect(newUrl);
}

// 미들웨어가 실행될 경로 지정
export const config = {
  matcher: ['/((?!_next|api|static|images|fonts|favicon.ico).*)'],
}; 