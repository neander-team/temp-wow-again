import { useState, useCallback } from 'react';
import axios from 'axios';

interface UseTranslationHook {
  translate: (text: string | string[], targetLang: string, sourceLang?: string) => Promise<string | string[]>;
  detectLanguage: (text: string) => Promise<string>;
  isLoading: boolean;
  error: string | null;
}

/**
 * 번역 기능을 위한 React 훅
 * 클라이언트 측에서 번역 API를 호출합니다.
 * @returns 번역 함수, 로딩 상태, 에러 상태
 */
export function useTranslation(): UseTranslationHook {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  /**
   * 텍스트 번역
   * @param text 번역할 텍스트 또는 텍스트 배열
   * @param targetLang 타겟 언어 코드 (ko, en, ja, zh 등)
   * @param sourceLang 소스 언어 코드 (선택사항)
   * @returns 번역된 텍스트 또는 텍스트 배열
   */
  const translate = useCallback(async (
    text: string | string[], 
    targetLang: string,
    sourceLang?: string
  ): Promise<string | string[]> => {
    if (!text || (Array.isArray(text) && text.length === 0)) {
      return text;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.post('/api/translate', {
        text,
        target: targetLang,
        source: sourceLang
      });
      
      setIsLoading(false);
      return response.data.translatedText;
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err instanceof Error ? err.message : '번역 중 오류가 발생했습니다.';
      setError(errorMessage);
      console.error('번역 오류:', err);
      return text; // 오류 발생 시 원본 반환
    }
  }, []);
  
  /**
   * 언어 감지
   * @param text 언어를 감지할 텍스트
   * @returns 감지된 언어 코드
   */
  const detectLanguage = useCallback(async (text: string): Promise<string> => {
    if (!text) {
      return 'ko'; // 빈 텍스트는 기본 한국어로 처리
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.get(`/api/translate?action=detect&text=${encodeURIComponent(text)}`);
      
      setIsLoading(false);
      return response.data.detectedLanguage;
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err instanceof Error ? err.message : '언어 감지 중 오류가 발생했습니다.';
      setError(errorMessage);
      console.error('언어 감지 오류:', err);
      return 'ko'; // 오류 발생 시 기본값 반환
    }
  }, []);
  
  return {
    translate,
    detectLanguage,
    isLoading,
    error
  };
} 