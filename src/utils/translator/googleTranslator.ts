import axios from 'axios';

interface TranslateResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

interface DetectResponse {
  data: {
    detections: Array<Array<{
      language: string;
      isReliable: boolean;
      confidence: number;
    }>>;
  };
}

interface LanguagesResponse {
  data: {
    languages: Array<{
      language: string;
      name?: string;
    }>;
  };
}

/**
 * Google Cloud Translation API를 사용하여 텍스트를 번역합니다.
 * @param text 번역할 텍스트 또는 텍스트 배열
 * @param target 타겟 언어 코드 (ko, en, ja, zh 등)
 * @param source 소스 언어 코드 (선택사항, 지정하지 않으면 자동 감지)
 * @returns 번역된 텍스트 또는 텍스트 배열
 */
export async function translateText(
  text: string | string[],
  target: string,
  source?: string
): Promise<string | string[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
    if (!apiKey) {
      console.error('Google Translate API Key가 설정되지 않았습니다.');
      return Array.isArray(text) ? text : text;
    }

    const url = 'https://translation.googleapis.com/language/translate/v2';
    const params: Record<string, any> = {
      q: text,
      target,
      key: apiKey,
      format: 'text'
    };

    if (source) {
      params.source = source;
    }

    const response = await axios.post<TranslateResponse>(url, null, { params });
    
    if (!response.data || !response.data.data || !response.data.data.translations) {
      throw new Error('번역 응답에 잘못된 형식이 포함되어 있습니다.');
    }

    const translations = response.data.data.translations;
    
    if (Array.isArray(text)) {
      return translations.map(t => t.translatedText);
    } else {
      return translations[0].translatedText;
    }
  } catch (error) {
    console.error('번역 중 오류 발생:', error);
    // 오류 발생 시 원본 텍스트 반환
    return text;
  }
}

/**
 * Google Cloud Translation API를 사용하여 텍스트의 언어를 감지합니다.
 * @param text 언어를 감지할 텍스트 또는 텍스트 배열
 * @returns 감지된 언어 코드 또는 언어 코드 배열
 */
export async function detectLanguage(
  text: string | string[]
): Promise<string | string[]> {
  try {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    if (!apiKey) {
      console.error('Google Translate API Key가 설정되지 않았습니다.');
      return Array.isArray(text) ? Array(text.length).fill('ko') : 'ko';
    }

    const url = 'https://translation.googleapis.com/language/translate/v2/detect';
    const params = {
      q: text,
      key: apiKey
    };

    const response = await axios.post<DetectResponse>(url, null, { params });
    
    if (!response.data || !response.data.data || !response.data.data.detections) {
      throw new Error('언어 감지 응답에 잘못된 형식이 포함되어 있습니다.');
    }

    const detections = response.data.data.detections;
    
    if (Array.isArray(text)) {
      return detections.map(d => d[0].language);
    } else {
      return detections[0][0].language;
    }
  } catch (error) {
    console.error('언어 감지 중 오류 발생:', error);
    // 오류 발생 시 기본값 반환 (한국어)
    return Array.isArray(text) ? Array(text.length).fill('ko') : 'ko';
  }
}

/**
 * Google Cloud Translation API를 사용하여 지원하는 언어 목록을 가져옵니다.
 * @param target 선택사항. 언어 이름을 표시할 언어 코드
 * @returns 지원하는 언어 목록
 */
export async function getSupportedLanguages(
  target?: string
): Promise<Array<{ language: string; name?: string }>> {
  try {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    if (!apiKey) {
      console.error('Google Translate API Key가 설정되지 않았습니다.');
      return [];
    }

    const url = 'https://translation.googleapis.com/language/translate/v2/languages';
    const params: Record<string, any> = {
      key: apiKey
    };

    if (target) {
      params.target = target;
    }

    const response = await axios.get<LanguagesResponse>(url, { params });
    
    if (!response.data || !response.data.data || !response.data.data.languages) {
      throw new Error('언어 목록 응답에 잘못된 형식이 포함되어 있습니다.');
    }

    return response.data.data.languages;
  } catch (error) {
    console.error('언어 목록 가져오기 중 오류 발생:', error);
    return [];
  }
} 