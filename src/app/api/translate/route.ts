import { NextRequest, NextResponse } from 'next/server';
import { translateText, detectLanguage, getSupportedLanguages } from '@/utils/translator/googleTranslator';

export async function POST(request: NextRequest) {
  try {
    const { text, target, source } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: "텍스트가 제공되지 않았습니다." },
        { status: 400 }
      );
    }

    if (!target) {
      return NextResponse.json(
        { error: "타겟 언어가 제공되지 않았습니다." },
        { status: 400 }
      );
    }

    const translatedText = await translateText(text, target, source);

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error('번역 API 오류:', error);
    return NextResponse.json(
      { error: "번역 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    
    if (action === 'detect') {
      const text = searchParams.get('text');
      if (!text) {
        return NextResponse.json(
          { error: "텍스트가 제공되지 않았습니다." },
          { status: 400 }
        );
      }
      
      const detectedLanguage = await detectLanguage(text);
      return NextResponse.json({ detectedLanguage });
    } 
    else if (action === 'languages') {
      const target = searchParams.get('target');
      const languages = await getSupportedLanguages(target || undefined);
      return NextResponse.json({ languages });
    }
    else {
      return NextResponse.json(
        { error: "유효하지 않은 액션입니다. 'detect' 또는 'languages'를 사용하세요." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API 오류:', error);
    return NextResponse.json(
      { error: "처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
} 