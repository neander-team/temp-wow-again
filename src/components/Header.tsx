'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('ko');
  const router = useRouter();
  const pathname = usePathname();

  // 현재 URL에서 언어 코드 감지
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        const firstSegment = segments[0];
        if (languages.some(lang => lang.code === firstSegment)) {
          setCurrentLanguage(firstSegment);
        }
      }
    }
  }, [pathname]);

  // 현재 선택된 언어의 라벨 가져오기
  const getCurrentLanguageLabel = () => {
    const lang = languages.find(lang => lang.code === currentLanguage);
    return lang ? lang.label : '한국어';
  };

  // 언어 변경 처리
  const handleLanguageChange = (code: string) => {
    if (code === currentLanguage) {
      setIsLangMenuOpen(false);
      return; // 이미 선택된 언어면 아무것도 하지 않음
    }

    setCurrentLanguage(code);
    setIsLangMenuOpen(false);
    
    // 현재 URL에서 언어 부분만 변경
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      
      if (segments.length > 0 && languages.some(lang => lang.code === segments[0])) {
        // 첫 번째 세그먼트가 언어 코드이면 변경
        segments[0] = code;
      } else {
        // 언어 코드가 없으면 추가
        segments.unshift(code);
      }
      
      const newPath = '/' + segments.join('/');
      router.push(newPath);
    } else {
      // 루트 경로면 언어 코드만 추가
      router.push(`/${code}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 py-3 px-4">
      <div className="container-custom flex justify-between items-center">
        <Link href={`/${currentLanguage}`} className="text-2xl font-bold heading-gradient">
          AC'SCENT WOW
        </Link>
        
        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:block">
          <div className="relative">
            <button 
              className="lang-selector flex items-center gap-1 font-medium"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <span>{getCurrentLanguageLabel()}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg z-10 animate-fade-in">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-50 ${currentLanguage === lang.code ? 'text-[rgb(var(--primary))] font-medium' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        
        {/* 모바일 햄버거 메뉴 버튼 */}
        <button 
          className="md:hidden icon-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <Link href={`/${currentLanguage}`} className="text-2xl font-bold heading-gradient">
              AC'SCENT WOW
            </Link>
            <button 
              className="icon-button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4 text-center mt-8">
            <h3 className="text-lg font-medium mb-4">언어 선택</h3>
            {languages.map((lang) => (
              <button 
                key={lang.code}
                className={`block w-full py-3 text-center ${currentLanguage === lang.code ? 'text-[rgb(var(--primary))] font-medium' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 