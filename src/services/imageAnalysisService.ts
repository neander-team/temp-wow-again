// 이미지 분석 서비스
import { PerfumeType, perfumeTypes } from '@/utils/fragranceTypes';
import { PerfumeTypeI18n, perfumeTypesI18n, getPerfumeTypesByLang, I18nText, I18nStringArray } from '@/utils/fragranceTypesI18n';
import { useRouter } from 'next/router';
import { translateText } from '@/utils/translator/googleTranslator';

// 언어별 향수 타입 임포트
import { perfumeTypes as enPerfumeTypes } from '@/utils/fragranceTypes.en';
import { perfumeTypes as jaPerfumeTypes } from '@/utils/fragranceTypes.ja';
import { perfumeTypes as zhPerfumeTypes } from '@/utils/fragranceTypes.zh';

// 향수 데이터베이스 (실제로는 fragranceTypes.ts에서 가져올 것)
// import { getAllPerfumeTypes } from '../utils/fragranceTypesHelper';

// 척도 점수 인터페이스
export interface ScaleScores {
  큐티_섹시: number;
  소꿉친구_재벌3세: number;
  공부벌레_체육특기생: number;
  차도남_훈훈남: number;
  빛의수호자_다크나이트: number;
}

// 영어 버전 ScaleScores
export interface EnScaleScores {
  cute_sexy: number;
  childhood_friend_chaebol: number;
  bookworm_athlete: number;
  cold_warm: number;
  day_night: number;
}

// 일본어 버전 ScaleScores
export interface JaScaleScores {
  キュート_セクシー: number;
  幼なじみ_財閥3世: number;
  勉強家_体育特技生: number;
  クールガイ_温かい男: number;
  昼の男_夜の男: number;
}

// 중국어 버전 ScaleScores
export interface ZhScaleScores {
  可爱_性感: number;
  青梅竹马_财阀三世: number;
  学霸_体育特长生: number;
  冷都男_暖男: number;
  白天的他_夜晚的他: number;
}

// 향수 유형의 유사도 결과 인터페이스
interface SimilarityResult {
  perfume: PerfumeType;
  similarity: number;
}

export interface ImageAnalysisResult {
  imageType: string;
  description: string;
  keywords: string[];
  dominantColors: string[];
  mood: string;
  primaryNote: string;
  scaleScores: ScaleScores;
  visualElements: string[];
  overallImpression: string;
  scaleExplanations?: Record<string, string>; // 각 척도에 대한 설명 추가
  gender?: string; // 성별 정보 추가
}

export interface FragranceRecommendation {
  id: string;
  name: string;
  emoji: string;
  description: string;
  matchPercentage: number;
  notes: string[];
  characteristics: string[];
  imageUrl?: string;
  styleKeywords: string[];
  recommendedScenarios: string[];
  visualScales?: {
    큐티_섹시: number;
    소꿉친구_재벌3세: number;
    공부벌레_체육특기생: number;
    차도남_훈훈남: number;
    빛의수호자_다크나이트: number;
  };
}

export interface NoteDescription {
  name: string;
  description: string;
}

export interface AnalysisReport {
  analysisResult: ImageAnalysisResult;
  recommendation: FragranceRecommendation;
  analysisTime: string;
  originalImage: string; // 분석에 사용된 원본 이미지
  similarityExplanation: string;
  visualScene: string;
  notesDescription: NoteDescription[]; // 각 노트별 상세 설명 추가
  styleRecommendation: string; // 스타일 제안 추가
  fragranceCode: string; // 향수 코드 추가 (AC'SCENT 형식)
}

// 세션 스토리지 키
const ANALYSIS_RESULT_KEY = 'wow3_analysis_result';

// 각 언어의 visualScales 키 매핑 (커스텀 타입 추가)
type KoScaleKey = '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기' | '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세' | '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재' | '표정 없는 차가운 미스터리_국민 옆집 친구 포근함' | '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기';
type EnScaleKey = 'cute_sexy' | 'childhood_friend_chaebol' | 'bookworm_athlete' | 'cold_warm' | 'day_night';

// 스케일 키 매핑
const scaleKeyMap: Record<KoScaleKey, string> = {
  '뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기': 'cute_sexy',
  '편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세': 'childhood_friend_chaebol',
  '너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재': 'bookworm_athlete',
  '표정 없는 차가운 미스터리_국민 옆집 친구 포근함': 'cold_warm',
  '햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기': 'day_night'
};

// 척도 매핑 함수 (언어별)
const mapScaleScores = (scaleScores: any, locale: string): ScaleScores => {
  if (locale === 'ko') {
    return scaleScores as ScaleScores;
  } else if (locale === 'en' && 'cute_sexy' in scaleScores) {
    return {
      큐티_섹시: scaleScores.cute_sexy,
      소꿉친구_재벌3세: scaleScores.childhood_friend_chaebol,
      공부벌레_체육특기생: scaleScores.bookworm_athlete,
      차도남_훈훈남: scaleScores.cold_warm,
      빛의수호자_다크나이트: scaleScores.day_night
    };
  } else if (locale === 'ja' && 'キュート_セクシー' in scaleScores) {
    return {
      큐티_섹시: scaleScores['キュート_セクシー'],
      소꿉친구_재벌3세: scaleScores['幼なじみ_財閥3世'],
      공부벌레_체육특기생: scaleScores['勉強家_体育特技生'],
      차도남_훈훈남: scaleScores['クールガイ_温かい男'],
      빛의수호자_다크나이트: scaleScores['昼の男_夜の男']
    };
  } else if (locale === 'zh' && '可爱_性感' in scaleScores) {
    return {
      큐티_섹시: scaleScores['可爱_性感'],
      소꿉친구_재벌3세: scaleScores['青梅竹马_财阀三世'],
      공부벌레_체육특기생: scaleScores['学霸_体育特长生'],
      차도남_훈훈남: scaleScores['冷都男_暖男'],
      빛의수호자_다크나이트: scaleScores['白天的他_夜晚的他']
    };
  }
  // 기본값 반환
  return scaleScores as ScaleScores;
};

// Gemini API 프롬프트 구성
const createGeminiPrompt = (imageBase64: string) => {
  return {
    contents: [
      {
        parts: [
          {
            text: `당신은 이미지 분석과 향수 매칭에 특화된 전문 AI입니다. 사용자가 제공하는 이미지를 분석하여 '최애' 향수 유형 중 가장 어울리는 유형을 추천해주세요.

## 1단계: 이미지 분석
제공된 이미지를 자세히 분석하여 다음 요소들을 관찰하세요:
- 얼굴 표정과 눈빛의 특성 (부드러운, 강렬한, 날카로운, 따뜻한 등)
- 패션 스타일과 색상 선택 (의류, 액세서리, 컬러 팔레트)
- 포즈와, 자세, 몸짓 언어
- 전반적인 분위기와 무드 (카리스마, 청순함, 냉미남, 훈훈함 등)
- 배경과 환경 (있다면)
- 이미지에서 즉각적으로 떠오르는 첫인상

## 2단계: 5가지 핵심 척도에 점수 매기기
이미지를 바탕으로 다음 5가지 척도에 0-10점 사이의 점수를 매기세요:

1. 🧸 **뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기** 🔥
   - 0: 뽀잉뽀잉 귀여워 죽겠어
   - 10: 심장 바사삭 섹시함의 폭격기

2. 🏠 **편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세** 💎
   - 0:편의점 라면 쏘는 찐친
   - 10: 생일에 백화점 층 대관한 재벌 3세

3. 📝 **너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재** 🏀
   - 0: 너드미 뿜뿜 전교 1등
   - 10: 체육대회 심장 떨어지는 운동천재

4. 🧊 **표정 없는 차가운 미스터리_국민 옆집 친구 포근함** 🧸
   - 0: 표정 없는 차가운 미스터리
   - 10: 국민 옆집 친구 포근함

5. ☀️ **햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기** 🌙
   - 0: 햇살 비타민 청량 요정
   - 10: 심장 융해되는 카리스마 폭격기

각 척도에 대해 점수를 매길 때, 이미지의 어떤 요소가 그 점수를 결정하게 했는지 자세히 설명하세요. 이 설명은 최종 결과에서 각 척도별로 표시될 것입니다.

## 3단계: 향 노트 분석 및 스타일 제안
이미지의 특성을 바탕으로 어울리는 향 노트를 3가지 선택하고, 각 노트가 이미지의 어떤 특성과 연결되는지 상세히 설명해주세요. 

각 향 노트에 대해 다음과 같은 내용을 구체적으로 설명해 주세요:
1. 이 향 노트가 이미지의 어떤 시각적 요소나 분위기와 매칭되는지
2. 이 향 노트가 이미지에서 느껴지는 성격, 특징 또는 감정과 어떻게 연결되는지
3. 이 향 노트가 추천된 이유와 어떤 효과를 줄 수 있는지

각 노트 설명은 최소 2-3문장 이상으로 구체적으로 작성해 주세요. 예를 들어:
"베르가못: 이미지에서 보이는 밝고 상쾌한 표정과 햇살을 받은 듯한 분위기는 베르가못의 시트러스한 상쾌함과 완벽하게 일치합니다. 베르가못의 활기찬 향은 사진에서 느껴지는 젊은 에너지와 생동감을 표현하며, 자연스러운 카리스마를 한층 더 돋보이게 해줍니다. 이 향은 특히 이미지에서 보이는 자신감 있는 미소와 밝은 분위기를 강조해줍니다."

또한 이 이미지와 어울리는 패션 스타일, 액세서리, 어울리는 계절과 상황에 대한 구체적인 제안도 포함해주세요.

## 4단계: 향수 시각화
이 향수를 뿌렸을 때 연상되는 구체적인 시각적 장면을 생생하게 묘사해주세요. 이미지에서 느껴지는 분위기와 연결하여, 마치 소설의 한 장면처럼 독자가 그 장면을 상상할 수 있도록 상세하게 서술해주세요.

이미지 분석 결과와 향수 매칭 추천을 JSON 형식으로 응답해주세요. 다음과 같은 형식으로 작성해주세요:

{
  "analysis": {
    "overallImpression": "이미지에서 느껴지는 전반적인 첫인상을 한 문장으로 설명",
    "visualElements": ["눈에 띄는 시각적 요소1", "요소2", "요소3"],
    "imageType": "이미지의 주요 유형(카리스마있는, 소프트한, 차가운 등)",
    "description": "이미지 전체에 대한 상세한 설명 (2-3문장)",
    "mood": "이미지에서 느껴지는 주요 분위기",
    "keywords": ["키워드1", "키워드2", "키워드3", "키워드4", "키워드5"],
    "dominantColors": ["#hex색상1", "#hex색상2", "#hex색상3"],
    "scaleScores": {
      "뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기": 5,
      "편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세": 7,
      "너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재": 3,
      "표정 없는 차가운 미스터리_국민 옆집 친구 포근함": 8,
      "햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기": 6
    },
    "scaleExplanations": {
      "뽀잉뽀잉 귀여워 죽겠어_심장 바사삭 섹시함의 폭격기": "이 점수를 준 이유에 대한 자세한 설명 (이미지의 특정 요소나 표정, 분위기 등 언급)",
      "편의점 라면 쏘는 찐친_ 생일에 백화점 층 대관한 재벌 3세": "이 점수를 준 이유에 대한 자세한 설명",
      "너드미 뿜뿜 전교 1등_체육대회 심장 떨어지는 운동천재": "이 점수를 준 이유에 대한 자세한 설명",
      "표정 없는 차가운 미스터리_국민 옆집 친구 포근함": "이 점수를 준 이유에 대한 자세한 설명",
      "햇살 비타민 청량 요정_심장 융해되는 카리스마 폭격기": "이 점수를 준 이유에 대한 자세한 설명"
    }
  },
  "fragranceMatching": {
    "fragranceTitle": "추천하는 향수의 제목 (예: '맑은 첫사랑')",
    "fragranceEmoji": "향수를 대표하는 이모지",
    "fragranceCode": "AC'SCENT 숫자 형식의 코드 (예: AC'SCENT 08)", 
    "primaryNote": "이 이미지에 가장 어울리는 향 노트",
    "notesDescription": [
      {
        "name": "노트1 이름",
        "description": "이 노트가 이미지의 어떤 특성과 연결되는지 상세 설명"
      },
      {
        "name": "노트2 이름",
        "description": "이 노트가 이미지의 어떤 특성과 연결되는지 상세 설명"
      },
      {
        "name": "노트3 이름",
        "description": "이 노트가 이미지의 어떤 특성과 연결되는지 상세 설명"
      }
    ],
    "similarityExplanation": "이미지와 향수 매칭 사이의 연관성 설명",
    "visualScene": "이 향수를 맡았을 때 연상되는 시각적 장면에 대한 상세한 묘사",
    "styleRecommendation": "이 향수 유형과 어울리는 패션 스타일, 액세서리, 계절, 상황 등에 대한 상세 제안"
  }
}`,
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: imageBase64.replace(/^data:image\/[a-z]+;base64,/, "")
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.4,
      topK: 32,
      topP: 0.95,
      maxOutputTokens: 4096,
    }
  };
};

// Gemini API 호출 함수
const callGeminiAPI = async (imageData: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
    if (!apiKey) {
      throw new Error("Gemini API 키가 설정되지 않았습니다.");
    }

    const base64Image = imageData; // 이미 base64 형식이라고 가정
    const prompt = createGeminiPrompt(base64Image);
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API 호출 실패: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error("API 응답에서 텍스트를 찾을 수 없습니다.");
    }

    // JSON 부분만 추출
    const jsonMatch = text.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error("API 응답에서 JSON 형식의 데이터를 찾을 수 없습니다.");
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error("Gemini API 호출 중 오류 발생:", error);
    throw error;
  }
};

// 유사도 계산 함수
const calculateSimilarity = (imageScores: ScaleScores, perfumeType: any): number => {
  // 유클리드 거리의 역수를 사용하여 유사도 계산
  const scales = [
    '큐티_섹시',
    '소꿉친구_재벌3세',
    '공부벌레_체육특기생',
    '차도남_훈훈남',
    '빛의수호자_다크나이트',
  ] as const;
  
  let squaredDiffSum = 0;
  for (const scale of scales) {
    const imageFactor = imageScores[scale];
    
    // 속성 이름 매핑 - 중국어 데이터와의 호환성 문제 해결
    let perfumeFactor = 0;
    if (scale === '소꿉친구_재벌3세' && 'childhood_friend_chaeBol' in perfumeType.visualScales) {
      // 중국어 데이터는 속성 이름이 다름
      perfumeFactor = perfumeType.visualScales.childhood_friend_chaeBol;
    } else if (scale === '소꿉친구_재벌3세' && 'childhood_friend_chaebol' in perfumeType.visualScales) {
      perfumeFactor = perfumeType.visualScales.childhood_friend_chaebol;
    } else if (scale === '큐티_섹시' && 'cute_sexy' in perfumeType.visualScales) {
      perfumeFactor = perfumeType.visualScales.cute_sexy;
    } else if (scale === '공부벌레_체육특기생' && 'bookworm_athlete' in perfumeType.visualScales) {
      perfumeFactor = perfumeType.visualScales.bookworm_athlete;
    } else if (scale === '차도남_훈훈남' && 'cold_warm' in perfumeType.visualScales) {
      perfumeFactor = perfumeType.visualScales.cold_warm;
    } else if (scale === '빛의수호자_다크나이트' && 'day_night' in perfumeType.visualScales) {
      perfumeFactor = perfumeType.visualScales.day_night;
    }
    
    const diff = imageFactor - perfumeFactor;
    squaredDiffSum += diff * diff;
  }
  
  // 거리의 역수를 사용하여 유사도 계산 (가까울수록 유사도가 높음)
  const distance = Math.sqrt(squaredDiffSum);
  const similarity = 1 / (1 + distance * 0.1); // 0.1은 스케일링 팩터
  
  // 백분율로 변환
  return parseFloat((similarity * 100).toFixed(1));
};

// 현재 언어에 맞는 향수 데이터 가져오기 (타입 이슈 해결)
export const getPerfumeDataByLocale = (locale: string = 'ko'): any[] => {
  if (locale === 'en') {
    return enPerfumeTypes;
  } else if (locale === 'ja') {
    return jaPerfumeTypes;
  } else if (locale === 'zh') {
    // 중국어 데이터가 undefined인지 확인하고 로그 출력
    if (!zhPerfumeTypes || !Array.isArray(zhPerfumeTypes)) {
      console.error('중국어 향수 데이터(zhPerfumeTypes)가 올바르게 로드되지 않았습니다:', zhPerfumeTypes);
      return perfumeTypes; // 기본 데이터로 대체
    }
    return zhPerfumeTypes;
  }
  
  // 기본값은 한국어
  return perfumeTypes;
};

// 이미지와 향수 유형 간의 상관관계 확인 함수 (이름과 스타일/의상 일치 여부)
const checkTypeMatch = (
  perfume: PerfumeType, 
  imageKeywords: string[], 
  visualElements: string[], 
  colors: string[],
  description: string
): {
  isMatch: boolean,
  matchScore: number,
  reason: string,
  criticalMismatch: boolean  // 절대적 불일치 여부 (색상/의류 명확히 다른 경우)
} => {
  const allImageTerms = [...imageKeywords, ...visualElements, ...colors, description].join(' ').toLowerCase();
  let matchScore = 0;
  let matchReason = "일치: ";
  let criticalMismatch = false;
  
  // 1. 향수 유형의 스타일 키워드와 이미지 요소 비교
  const styleMatches = perfume.styleKeywords.filter(style => 
    allImageTerms.includes(style.toLowerCase())
  );
  
  if (styleMatches.length > 0) {
    matchScore += styleMatches.length * 5;
    matchReason += `스타일 키워드(${styleMatches.join(', ')}) 일치, `;
  }
  
  // 2. 향수 유형의 성격 특성과 이미지 요소 비교
  const personalityMatches = perfume.personality.filter(trait => 
    allImageTerms.includes(trait.toLowerCase())
  );
  
  if (personalityMatches.length > 0) {
    matchScore += personalityMatches.length * 3;
    matchReason += `성격 특성(${personalityMatches.join(', ')}) 일치, `;
  }
  
  // 3. 제목에 특정 색상이나 복장 언급 확인 및 일치 여부 검토
  const title = perfume.title.toLowerCase();
  
  // 색상 키워드 확인 (유형 이름에 있는 색상이 이미지에 없는 경우는 불일치)
  const colorKeywords = ['화이트', '블랙', '올블랙', '베이지', '그레이', '아이보리'];
  const colorInTitle = colorKeywords.find(color => title.includes(color.toLowerCase()));
  
  // 색상 관련 이미지 정보 수집 (실제 이미지의 색상 특성 파악)
  const imageColorInfo = colors.join(' ').toLowerCase() + ' ' + 
                         visualElements.filter(el => 
                           el.includes('색') || 
                           colorKeywords.some(c => el.includes(c)) ||
                           el.includes('color') ||
                           el.includes('white') ||
                           el.includes('black')
                         ).join(' ').toLowerCase();
  
  if (colorInTitle) {
    // 색상 키워드가 이미지 요소에 있는지 확인
    const colorMapping: Record<string, string[]> = {
      '화이트': ['하얀', '흰', '화이트', 'white', '밝은', '순백'],
      '블랙': ['검은', '검정', '블랙', 'black', '어두운', '다크'],
      '올블랙': ['검은', '검정', '블랙', '올블랙', 'black', '어두운', '다크'],
      '베이지': ['베이지', 'beige', '아이보리', '크림', 'cream', '누드'],
      '그레이': ['회색', '그레이', 'gray', 'grey', '그레이톤'],
      '아이보리': ['아이보리', 'ivory', '크림', '베이지', 'cream', '화이트', '밝은']
    };
    
    // 반대되는 색상 관계 정의 (명확한 불일치 확인용)
    const oppositeColors: Record<string, string[]> = {
      '화이트': ['검은', '검정', '블랙', 'black', '어두운', '다크', '올블랙'],
      '블랙': ['하얀', '흰', '화이트', 'white', '밝은', '순백', '아이보리', '크림'],
      '올블랙': ['하얀', '흰', '화이트', 'white', '밝은', '순백', '아이보리', '크림'],
      '베이지': ['검은', '검정', '블랙', 'black'],
      '아이보리': ['검은', '검정', '블랙', 'black']
    };
    
    const colorSynonyms = colorMapping[colorInTitle] || [colorInTitle.toLowerCase()];
    const hasColorMatch = colorSynonyms.some(synonym => allImageTerms.includes(synonym));
    
    // 반대되는 색상이 이미지에 있는지 확인 (예: 화이트 유형인데 블랙 이미지)
    const opposites = oppositeColors[colorInTitle] || [];
    const hasOppositeColor = opposites.some(opp => imageColorInfo.includes(opp));
    
    if (hasColorMatch) {
      matchScore += 20; // 일치 점수 상향 조정
      matchReason += `색상(${colorInTitle}) 일치, `;
    } else if (hasOppositeColor) {
      // 명확히 반대되는 색상인 경우 (예: 화이트 유형에 블랙 이미지)
      matchScore -= 50; // 불일치 패널티 대폭 상향
      matchReason = `치명적 불일치: 색상(${colorInTitle})과 반대 색상 발견, `;
      criticalMismatch = true; // 치명적 불일치 표시
    } else {
      // 색상이 명확히 불일치하면 점수 감소
      matchScore -= 30; // 불일치 패널티 상향
      matchReason = `불일치: 색상(${colorInTitle}) 불일치(이미지에 없음), `;
    }
  }
  
  // 의류 키워드 확인
  const clothingKeywords = ['슈트', '코트', '베이지코트', '울코트', '턱시도', '티셔츠', '화이트티', '터틀넥', '레더', '셔츠', '린넨셔츠'];
  const clothingInTitle = clothingKeywords.find(clothing => title.includes(clothing.toLowerCase()));
  
  if (clothingInTitle) {
    // 의류 키워드가 이미지 요소에 있는지 확인
    const clothingMapping: Record<string, string[]> = {
      '슈트': ['정장', '수트', '슈트', 'suit', '포멀', '비즈니스'],
      '코트': ['코트', '외투', 'coat', '자켓', '오버코트'],
      '베이지코트': ['베이지', '코트', '외투', 'beige', 'coat'],
      '울코트': ['울', '코트', '외투', 'wool', 'coat'],
      '턱시도': ['턱시도', 'tuxedo', '포멀 수트'],
      '티셔츠': ['티셔츠', '티', 't-shirt', 'tshirt', '캐주얼'],
      '화이트티': ['흰 티', '하얀 티', '화이트 티', '티셔츠', 'white t-shirt'],
      '터틀넥': ['터틀넥', '목폴라', 'turtleneck', '하이넥'],
      '레더': ['가죽', '레더', 'leather', '자켓'],
      '셔츠': ['셔츠', 'shirt', '남방', '블라우스'],
      '린넨셔츠': ['린넨', '셔츠', 'linen', 'shirt', '여름 셔츠']
    };
    
    const clothingSynonyms = clothingMapping[clothingInTitle] || [clothingInTitle.toLowerCase()];
    const hasClothingMatch = clothingSynonyms.some(synonym => allImageTerms.includes(synonym));
    
    if (hasClothingMatch) {
      matchScore += 20; // 일치 점수 상향 조정
      matchReason += `의류(${clothingInTitle}) 일치, `;
    } else {
      // 의류가 명확히 불일치하면 점수 감소
      matchScore -= 30; // 불일치 패널티 상향
      matchReason = `불일치: 의류(${clothingInTitle}) 불일치(이미지에 없음), `;
    }
  }
  
  // 4. 제목의 다른 핵심 키워드와 이미지 요소 비교 (더 폭넓은 키워드 확인)
  const otherKeywordsInTitle = [
    '시티헌터', '셀럽', '첫사랑', '바캉스', '테러리스트', '비주얼', '귀족', 
    '스타라이트', '마스터', '아이콘', '남신', '왕자님', '아트남', '청년', 
    '교수님', '반항아', '수트남', '도시남', '비타민보이', '캠핑왕', '현실 왕자님',
    '고양이', '아트퀸', '뮤즈', '감성문학가', '시크남', 'CEO', '올블랙녀',
    '퍼포먼스 킹', '호텔 VIP'
  ];
  
  const titleWordsMatches = otherKeywordsInTitle.filter(word => 
    title.includes(word) && allImageTerms.includes(word.toLowerCase())
  );
  
  if (titleWordsMatches.length > 0) {
    matchScore += titleWordsMatches.length * 5;
    matchReason += `핵심 키워드(${titleWordsMatches.join(', ')}) 일치, `;
  }
  
  // 최종 매칭 결정
  const isMatch = matchScore >= 0 && !criticalMismatch; // 양수 점수이고 치명적 불일치가 없을 때만 매칭
  
  return {
    isMatch,
    matchScore,
    reason: matchReason.endsWith(', ') ? matchReason.slice(0, -2) : matchReason,
    criticalMismatch
  };
};

// 이미지 분석과 향수 매칭하는 함수
export const analyzeImage = async (imageData: string, locale: string = 'ko'): Promise<AnalysisReport> => {
  try {
    // Gemini API 호출하여 이미지 분석 결과 가져오기
    const analysisData = await callGeminiAPI(imageData);
    
    const { analysis, fragranceMatching } = analysisData;
    
    // 이미지 분석 디버깅 - 키워드와 색상 정보 확인
    console.log("이미지 키워드:", analysis.keywords);
    console.log("이미지 시각요소:", analysis.visualElements);
    console.log("이미지 색상:", analysis.dominantColors);
    
    // 현재 언어에 맞는 향수 데이터 가져오기
    const perfumeTypes = getPerfumeDataByLocale(locale);
    
    // 척도 점수 매핑
    const mappedScoreScores = mapScaleScores(analysis.scaleScores, locale);
    
    // 1. 이미지 성별 파악 - 키워드, 설명, 색상 등을 기반으로 성별 추론
    let detectedGender = ""; 
    const maleKeywords = ["남성", "남자", "남성적", "masculine", "man", "male", "boy", "男性", "男の子"];
    const femaleKeywords = ["여성", "여자", "여성적", "feminine", "woman", "female", "girl", "女性", "女の子"];
    
    // 키워드, 설명, 이미지 타입에서 성별 관련 단어 검색
    const allTextContent = [
      ...analysis.keywords,
      analysis.description,
      analysis.imageType,
      analysis.mood,
      analysis.overallImpression,
      ...analysis.visualElements
    ].join(" ").toLowerCase();
    
    const hasMaleIndicator = maleKeywords.some(keyword => allTextContent.includes(keyword.toLowerCase()));
    const hasFemaleIndicator = femaleKeywords.some(keyword => allTextContent.includes(keyword.toLowerCase()));
    
    // 성별 판단 (명확한 경우만)
    if (hasMaleIndicator && !hasFemaleIndicator) {
      detectedGender = "남성";
    } else if (hasFemaleIndicator && !hasMaleIndicator) {
      detectedGender = "여성";
    }
    
    // 성별을 확인할 수 없는 경우 디버깅 로그 출력
    if (!detectedGender) {
      console.log('성별을 감지할 수 없습니다. 모든 향수 유형을 고려합니다.');
    } else {
      console.log(`감지된 성별: ${detectedGender}`);
    }
    
    // 유형별 매칭 점수를 저장할 배열
    const perfumeMatches: Array<{
      perfume: PerfumeType, 
      similarityScore: number, 
      matchScore: number, 
      totalScore: number,
      filtered: boolean,
      criticalMismatch: boolean,
      reason?: string
    }> = [];
    
    // 2. 향수 유형 필터링 및 점수 계산
    for (const perfume of perfumeTypes) {
      let filtered = false;
      let reason = "";
      
      // A. 성별 필터링 (성별이 확인된 경우에만)
      if (detectedGender && perfume.gender !== detectedGender) {
        filtered = true;
        reason = `성별 불일치: 이미지=${detectedGender}, 향수=${perfume.gender}`;
      }
      
      // B. 유형과 이미지 매칭 확인 (통합적 방식)
      const matchResult = checkTypeMatch(
        perfume, 
        analysis.keywords, 
        analysis.visualElements,
        analysis.dominantColors,
        analysis.description
      );
      
      // 불일치 여부 판단 - 다음 조건 중 하나라도 해당되면 필터링
      // 1. 치명적 불일치가 있는 경우 (예: 화이트 유형에 블랙 이미지)
      // 2. 매칭 점수가 매우 낮은 경우 (색상/의류 불일치)
      if (!filtered && (matchResult.criticalMismatch || matchResult.matchScore < -20)) {
        filtered = true;
        reason = matchResult.reason;
      }
      
      // 유사도 계산
      const similarityScore = calculateSimilarity(mappedScoreScores, perfume);
      
      // 총점 계산 (유사도 + 매칭 점수)
      // 매칭 점수의 가중치를 높임 (3으로 나눔, 이전에는 5로 나눔)
      const totalScore = similarityScore + (matchResult.matchScore / 3);
      
      // 모든 향수 유형의 점수와 필터링 결과 저장
      perfumeMatches.push({
        perfume,
        similarityScore,
        matchScore: matchResult.matchScore,
        totalScore,
        filtered,
        criticalMismatch: matchResult.criticalMismatch,
        reason: filtered ? reason : matchResult.reason
      });
    }
    
    // 필터링된 결과 확인 및 로깅
    const filteredPerfumes = perfumeMatches.filter(match => !match.filtered);
    console.log(`전체 ${perfumeMatches.length}개 중 ${filteredPerfumes.length}개의 향수 유형이 필터링 통과`);
    
    // 치명적 불일치가 있는 항목들 로깅 (디버깅용)
    const criticalMismatches = perfumeMatches.filter(match => match.criticalMismatch);
    if (criticalMismatches.length > 0) {
      console.log('치명적 불일치 항목들:', criticalMismatches.map(m => ({
        id: m.perfume.id,
        title: m.perfume.title,
        reason: m.reason
      })));
    }
    
    // 최소 필터링 개수 설정 - 너무 적게 필터링되면 더 많은 후보를 고려
    const MIN_FILTERED_COUNT = 3;  // 최소 값 하향 조정 (5→3)
    
    // 최종 매칭에 사용할 유형 배열
    let finalCandidates: Array<{
      perfume: PerfumeType, 
      similarityScore: number,
      matchScore: number, 
      totalScore: number,
      filtered: boolean,
      criticalMismatch: boolean,
      reason?: string
    }>;
    
    // 필터링된 결과가 너무 적으면 안전 장치 적용
    if (filteredPerfumes.length < MIN_FILTERED_COUNT) {
      console.log(`필터링된 향수 유형이 ${MIN_FILTERED_COUNT}개 미만입니다. 색상/의류 비교를 제외하고 다시 필터링합니다.`);
      
      // 치명적 불일치가 없는 항목들 중에서 성별만 고려 (더 관대한 필터링)
      // 색상/의류를 완전히 무시하는 것이 아니라, 치명적 불일치만 제외
      const candidatesWithoutCritical = perfumeMatches.filter(match => 
        !match.criticalMismatch && (detectedGender ? match.perfume.gender === detectedGender : true)
      );
      
      if (candidatesWithoutCritical.length >= MIN_FILTERED_COUNT) {
        finalCandidates = candidatesWithoutCritical;
        console.log(`치명적 불일치 제외 후 ${finalCandidates.length}개의 향수 유형이 후보로 선정됨`);
      } else if (detectedGender) {
        // 여전히 후보가 부족하면 성별만으로 필터링
        finalCandidates = perfumeMatches.filter(match => 
          match.perfume.gender === detectedGender
        );
        console.log(`성별 기준으로 ${finalCandidates.length}개의 향수 유형이 후보로 선정됨`);
      } else {
        // 성별도 감지되지 않았다면 모든 유형 고려
        finalCandidates = perfumeMatches;
        console.log(`모든 ${finalCandidates.length}개의 향수 유형을 고려합니다.`);
      }
    } else {
      // 충분히 많은 유형이 필터링되었다면 해당 결과 사용
      finalCandidates = filteredPerfumes;
    }
    
    // 총점(유사도+매칭점수) 기준으로 정렬
    finalCandidates.sort((a, b) => b.totalScore - a.totalScore);
    
    // 디버깅 로그 - 상위 5개 후보 출력
    console.log('최종 매칭 후보 (TOP 5):', finalCandidates.slice(0, 5).map(c => ({ 
      id: c.perfume.id, 
      title: c.perfume.title, 
      gender: c.perfume.gender,
      similarityScore: c.similarityScore,
      matchScore: c.matchScore,
      totalScore: c.totalScore,
      reason: c.reason
    })));
    
    // 최종 매칭 결과
    const bestMatch = finalCandidates[0];
    const matchedPerfume = bestMatch.perfume;
    console.log('최종 선택된 향수:', { 
      id: matchedPerfume.id, 
      title: matchedPerfume.title, 
      gender: matchedPerfume.gender,
      similarityScore: bestMatch.similarityScore,
      matchScore: bestMatch.matchScore,
      totalScore: bestMatch.totalScore,
      reason: bestMatch.reason
    });
    
    // 현재 시간 포맷팅
    const now = new Date();
    const analysisTime = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // 노트 설명이 실제 향수의 노트와 일치하는지 확인하고 필요시 기본 설명 추가
    let validNotesDescription: NoteDescription[] = [];
    
    // Gemini API에서 제공한 노트 설명이 있다면
    if (fragranceMatching.notesDescription && fragranceMatching.notesDescription.length > 0) {
      // 추천된 향수의 노트와 API에서 제공한 노트 설명이 일치하는지 확인
      const matchedNotes = fragranceMatching.notesDescription.filter((note: NoteDescription) => 
        matchedPerfume.notes.includes(note.name)
      );
      
      // 일치하는 노트가 있고, 그 수가 최소 기준 이상일 경우
      if (matchedNotes.length >= Math.min(2, matchedPerfume.notes.length)) {
        validNotesDescription = matchedNotes;
      }
    }
    
    // 유효한 노트 설명이 없다면 기본 설명 생성
    if (validNotesDescription.length === 0) {
      validNotesDescription = matchedPerfume.notes.map((note: string) => ({
        name: note,
        description: `${note}는 ${matchedPerfume.title}의 특성을 완벽하게 표현하는 핵심 향입니다`
      }));
    }
    
    // 분석 결과 생성
    const result: AnalysisReport = {
      analysisResult: {
        imageType: analysis.imageType,
        description: analysis.description,
        keywords: analysis.keywords,
        dominantColors: analysis.dominantColors,
        mood: analysis.mood,
        primaryNote: fragranceMatching.primaryNote,
        scaleScores: mappedScoreScores,
        visualElements: analysis.visualElements,
        overallImpression: analysis.overallImpression,
        scaleExplanations: analysis.scaleExplanations,
        gender: detectedGender // 감지된 성별 정보 추가
      },
      recommendation: {
        id: matchedPerfume.id,
        name: matchedPerfume.title,
        emoji: matchedPerfume.emoji,
        description: matchedPerfume.description,
        matchPercentage: bestMatch.similarityScore, // 원래 유사도 점수 사용
        notes: matchedPerfume.notes,
        characteristics: matchedPerfume.personality,
        styleKeywords: matchedPerfume.styleKeywords,
        recommendedScenarios: matchedPerfume.recommendedScenarios,
        visualScales: {
          큐티_섹시: getVisualScaleValue(matchedPerfume, 'cute_sexy', 'cute_sexy'),
          소꿉친구_재벌3세: getVisualScaleValue(matchedPerfume, 'childhood_friend_chaebol', 'childhood_friend_chaeBol'),
          공부벌레_체육특기생: getVisualScaleValue(matchedPerfume, 'bookworm_athlete', 'bookworm_athlete'),
          차도남_훈훈남: getVisualScaleValue(matchedPerfume, 'cold_warm', 'cold_warm'),
          빛의수호자_다크나이트: getVisualScaleValue(matchedPerfume, 'day_night', 'day_night')
        }
      },
      notesDescription: validNotesDescription,
      styleRecommendation: fragranceMatching.styleRecommendation || "",
      fragranceCode: `AC'SCENT ${matchedPerfume.id.replace(/[^\d]/g, '')}`,
      similarityExplanation: fragranceMatching.similarityExplanation,
      visualScene: fragranceMatching.visualScene,
      analysisTime,
      originalImage: imageData
    };
    
    // 세션 스토리지에 결과 저장
    saveAnalysisResult(result);
    
    return result;
  } catch (error) {
    console.error("이미지 분석 중 오류가 발생했습니다:", error);
    throw new Error("이미지 분석 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
};

// 세션 스토리지에 분석 결과 저장
export const saveAnalysisResult = (result: AnalysisReport): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(ANALYSIS_RESULT_KEY, JSON.stringify(result));
  }
};

// 세션에 저장된 분석 결과 가져오기 함수 수정 (비동기 지원)
export const getAnalysisResult = async (): Promise<AnalysisReport | null> => {
  if (typeof window !== 'undefined') {
    const savedData = sessionStorage.getItem(ANALYSIS_RESULT_KEY);
    if (savedData) {
      try {
        const result = JSON.parse(savedData) as AnalysisReport;
        
        // URL에서 현재 로케일 가져오기
        const pathParts = window.location.pathname.split('/');
        const locale = pathParts[1] === 'en' || pathParts[1] === 'zh' || pathParts[1] === 'ja' ? pathParts[1] : 'ko';
        
        // 필요시 번역 적용
        return await translateAnalysisReport(result, locale);
      } catch (error) {
        console.error('분석 결과 파싱 또는 번역 오류:', error);
      }
    }
  }
  return null;
};

// 향수 ID로 향수 정보 가져오기
export const getFragranceById = (id: string, locale: string = 'ko'): FragranceRecommendation | undefined => {
  // 현재 언어에 맞는 향수 데이터 가져오기
  const perfumeTypes = getPerfumeDataByLocale(locale);
  
  // 데이터가 없거나 undefined인 경우 기본 향수 데이터 사용
  if (!perfumeTypes || typeof perfumeTypes.find !== 'function') {
    console.error(`향수 데이터를 찾을 수 없습니다. 로케일: ${locale}`);
    return undefined;
  }
  
  // 향수 ID로 데이터 찾기
  const perfume = perfumeTypes.find((p: PerfumeType) => p.id === id);
  if (!perfume) return undefined;
  
  return {
    id: perfume.id,
    name: perfume.title,
    emoji: perfume.emoji,
    description: perfume.description,
    matchPercentage: 100, // 정확한 ID로 찾는 경우 100%
    notes: perfume.notes,
    characteristics: perfume.personality,
    styleKeywords: perfume.styleKeywords,
    recommendedScenarios: perfume.recommendedScenarios,
    visualScales: perfume.visualScales
  };
};

// 노트 이름 국제화 지원을 위한 매핑 추가
const noteTranslations: Record<string, Record<string, string>> = {
  "블랙베리": {
    "en": "Blackberry",
    "zh": "黑莓",
    "ja": "ブラックベリー"
  },
  "월계수잎": {
    "en": "Bay Leaf",
    "zh": "月桂叶",
    "ja": "月桂樹の葉"
  },
  "시더우드": {
    "en": "Cedarwood",
    "zh": "雪松木",
    "ja": "シダーウッド"
  },
  "머스크": {
    "en": "Musk",
    "zh": "麝香",
    "ja": "ムスク"
  },
  "아프리카 오렌지꽃": {
    "en": "African Orange Flower",
    "zh": "非洲橙花",
    "ja": "アフリカンオレンジブロッサム"
  },
  "튜베로즈": {
    "en": "Tuberose",
    "zh": "晚香玉",
    "ja": "チューベローズ"
  },
  "만다린 오렌지": {
    "en": "Mandarin Orange",
    "zh": "橘子",
    "ja": "マンダリンオレンジ"
  },
  "그레이프프루트": {
    "en": "Grapefruit",
    "zh": "葡萄柚",
    "ja": "グレープフルーツ"
  },
  "피오니": {
    "en": "Peony",
    "zh": "牡丹",
    "ja": "ピオニー"
  },
  "스트로베리": {
    "en": "Strawberry",
    "zh": "草莓",
    "ja": "ストロベリー"
  },
  "자스민": {
    "en": "Jasmine",
    "zh": "茉莉",
    "ja": "ジャスミン"
  },
  "바닐라": {
    "en": "Vanilla",
    "zh": "香草",
    "ja": "バニラ"
  },
  "베르가못": {
    "en": "Bergamot",
    "zh": "佛手柑",
    "ja": "ベルガモット"
  },
  "로터스": {
    "en": "Lotus",
    "zh": "莲花",
    "ja": "ロータス"
  },
  "바다소금": {
    "en": "Sea Salt",
    "zh": "海盐",
    "ja": "シーソルト"
  },
  "세이지": {
    "en": "Sage",
    "zh": "鼠尾草",
    "ja": "セージ"
  },
  "자몽": {
    "en": "Grapefruit",
    "zh": "西柚",
    "ja": "グレープフルーツ"
  }
};

// Google Cloud Translation API를 사용한 향 노트 번역 함수
async function translateNote(note: string, locale: string = 'ko'): Promise<string> {
  if (locale === 'ko') return note;
  
  try {
    // 먼저 이미 정의된 번역이 있는지 확인 (빠른 응답 및 API 호출 최소화)
    if (noteTranslations[note] && noteTranslations[note][locale]) {
      return noteTranslations[note][locale];
    }
    
    // 정의된 번역이 없으면 Google API 호출
    const translatedText = await translateText(note, locale, 'ko');
    return typeof translatedText === 'string' ? translatedText : note;
  } catch (error) {
    console.error(`노트 번역 중 오류 발생: ${note}`, error);
    return note;
  }
}

// Google Cloud Translation API를 사용한 노트 설명 번역 함수
async function translateNoteDescription(description: string, locale: string = 'ko'): Promise<string> {
  if (locale === 'ko') return description;
  
  try {
    // 특정 패턴에 대한 번역이 있는지 확인 (중요한 용어를 정확하게 번역하기 위해)
    const enMap: Record<string, string> = {
      "는 도시 사냥꾼의 특성을 완벽하게 표현하는 핵심 향입니다": 
        " is the key fragrance that perfectly expresses the characteristics of Urban Hunterg",
      "는 포근한 왕자의 특성을 완벽하게 표현하는 핵심 향입니다": 
        " is the key fragrance that perfectly expresses the characteristics of Cozy Prince",
      "는 런웨이 정복자의 특성을 완벽하게 표현하는 핵심 향입니다": 
        " is the key fragrance that perfectly expresses the characteristics of Runway Conqueror",
      "는 파스텔 요정의 특성을 완벽하게 표현하는 핵심 향입니다": 
        " is the key fragrance that perfectly expresses the characteristics of Pastel Fairy",
      "는 나쁜 여자/남자의 특성을 완벽하게 표현하는 핵심 향입니다": 
        " is the key fragrance that perfectly expresses the characteristics of Bad Girl/Boy"
    };
    
    // 특정 패턴 매칭이 있으면 사용
    if (locale === 'en') {
      for (const [key, value] of Object.entries(enMap)) {
        if (description.includes(key)) {
          return description.replace(key, value);
        }
      }
    }
    
    // 그 외 경우는 Google API 호출
    const translatedText = await translateText(description, locale, 'ko');
    return typeof translatedText === 'string' ? translatedText : description;
  } catch (error) {
    console.error(`노트 설명 번역 중 오류 발생: ${description}`, error);
    return description;
  }
}

// Google Cloud Translation API를 사용한 스타일 추천 설명 번역 함수
async function translateStyleRecommendation(text: string, locale: string, keywords: string[], scenarios: string[]): Promise<string> {
  if (locale === 'ko' || !text) return text;
  
  try {
    // 기존 패턴 번역도 유지 (더 자연스러운 번역을 위해)
    const patternMap: Record<string, string> = {
      "en": `This fragrance type goes well with style keywords like ${keywords.join(', ')}. It especially stands out in situations like ${scenarios.join(', ')}.`,
      "zh": `这种香水类型与${keywords.join('、')}等风格特别匹配。在${scenarios.join('、')}等场合尤其出彩。`,
      "ja": `この香水タイプは${keywords.join('、')}などのスタイルキーワードとよく合います。特に${scenarios.join('、')}などのシーンで際立ちます。`
    };
    
    if (patternMap[locale]) {
      return patternMap[locale];
    }
    
    // 패턴이 없으면 Google API 호출
    const translatedText = await translateText(text, locale, 'ko');
    return typeof translatedText === 'string' ? translatedText : text;
  } catch (error) {
    console.error(`스타일 추천 번역 중 오류 발생: ${text}`, error);
    return text;
  }
}

// Google Cloud Translation API를 사용한 비주얼 씬 번역 함수
async function translateVisualScene(text: string, locale: string, perfumeName: string): Promise<string> {
  if (locale === 'ko' || !text) return text;
  
  try {
    // 기존 패턴 번역도 유지 (더 자연스러운 번역을 위해)
    const sceneMap: Record<string, string> = {
      "en": `Imagine a scene where elegant music plays in the background. The subtle harmony of scents creates a dreamy atmosphere. This fragrance seems to embody the essence of ${perfumeName}, with each note telling a different story while blending perfectly together. The experience is both captivating and refined, leaving a lasting impression that lingers in memory like a beautiful melody.`,
      
      "zh": `想象一个背景中播放着优雅音乐的场景。微妙的香气和谐创造了梦幻般的氛围。这种香氛似乎体现了${perfumeName}的精髓，每个音符都讲述着不同的故事，同时完美地融合在一起。这种体验既迷人又精致，留下的印象如美妙的旋律般在记忆中挥之不去。`,
      
      "ja": `バックグラウンドで流れる優雅な音楽を想像してください。香りの繊細なハーモニーが夢のような雰囲気を作り出します。この香りは${perfumeName}の本質を体現しているようで、各ノートが完全に調和しながらも異なるストーリーを語っています。この体験は魅力的で洗練されており、美しいメロディーのように記憶に残る印象を残します。`
    };
    
    if (sceneMap[locale]) {
      return sceneMap[locale];
    }
    
    // 패턴이 없으면 Google API 호출
    const translatedText = await translateText(text, locale, 'ko');
    return typeof translatedText === 'string' ? translatedText : text;
  } catch (error) {
    console.error(`비주얼 씬 번역 중 오류 발생: ${text}`, error);
    return text;
  }
}

// Google Cloud Translation API를 사용한 척도 설명 번역 함수
async function translateScaleExplanations(scaleExplanations: Record<string, string> | undefined, locale: string): Promise<Record<string, string> | undefined> {
  if (!scaleExplanations || locale === 'ko') return scaleExplanations;
  
  const result: Record<string, string> = {};
  
  try {
    // 각 척도별 설명 번역 적용
    for (const key in scaleExplanations) {
      const originalText = scaleExplanations[key];
      
      // Google API 호출
      const translatedText = await translateText(originalText, locale, 'ko');
      result[key] = typeof translatedText === 'string' ? translatedText : originalText;
    }
    
    return result;
  } catch (error) {
    console.error(`척도 설명 번역 중 오류 발생`, error);
    return scaleExplanations; // 오류 시 원본 반환
  }
}

// Google Cloud Translation API를 사용한 분석 레포트 번역 함수
export const translateAnalysisReport = async (report: AnalysisReport, locale: string = 'ko'): Promise<AnalysisReport> => {
  if (locale === 'ko') return report; // 한국어는 기본값 유지
  
  try {
    // 노트 설명 번역
    const translatedNotesDescriptionPromises = report.notesDescription.map(async note => ({
      name: await translateNote(note.name, locale),
      description: await translateNoteDescription(note.description, locale)
    }));
    const translatedNotesDescription = await Promise.all(translatedNotesDescriptionPromises);
    
    // 스타일 추천 번역
    const translatedStyleRecommendation = await translateStyleRecommendation(
      report.styleRecommendation,
      locale,
      report.recommendation.styleKeywords,
      report.recommendation.recommendedScenarios
    );
    
    // 비주얼 씬 번역
    const translatedVisualScene = await translateVisualScene(
      report.visualScene,
      locale,
      report.recommendation.name
    );
    
    // 척도 설명 번역
    const translatedScaleExplanations = await translateScaleExplanations(
      report.analysisResult.scaleExplanations,
      locale
    );
    
    // 이미지 분석 키워드 번역
    const keywordsPromise = Promise.all(
      report.analysisResult.keywords.map(async keyword => {
        const translated = await translateText(keyword, locale, 'ko');
        return typeof translated === 'string' ? translated : keyword;
      })
    );
    
    // 시각적 요소 번역 추가
    const visualElementsPromise = Promise.all(
      report.analysisResult.visualElements.map(async element => {
        const translated = await translateText(element, locale, 'ko');
        return typeof translated === 'string' ? translated : element;
      })
    );
    
    // description, overallImpression, mood, imageType 번역
    const descriptionPromise = translateText(report.analysisResult.description || "", locale, 'ko');
    const overallImpressionPromise = translateText(report.analysisResult.overallImpression || "", locale, 'ko');
    const moodPromise = translateText(report.analysisResult.mood || "", locale, 'ko');
    const imageTypePromise = translateText(report.analysisResult.imageType || "", locale, 'ko');
    const primaryNotePromise = translateText(report.analysisResult.primaryNote || "", locale, 'ko');
    
    // 추천 정보 번역 추가
    const recommendationNamePromise = translateText(report.recommendation.name || "", locale, 'ko');
    const recommendationDescriptionPromise = translateText(report.recommendation.description || "", locale, 'ko');
    const recommendationNotesPromise = Promise.all(
      report.recommendation.notes.map(async note => {
        const translated = await translateText(note, locale, 'ko');
        return typeof translated === 'string' ? translated : note;
      })
    );
    const recommendationCharacteristicsPromise = Promise.all(
      report.recommendation.characteristics.map(async characteristic => {
        const translated = await translateText(characteristic, locale, 'ko');
        return typeof translated === 'string' ? translated : characteristic;
      })
    );
    const similarityExplanationPromise = translateText(report.similarityExplanation || "", locale, 'ko');
    
    // 모든 번역 대기
    const [
      translatedKeywords, 
      translatedVisualElements,
      translatedDescription, 
      translatedOverallImpression,
      translatedMood,
      translatedImageType,
      translatedPrimaryNote,
      translatedRecommendationName,
      translatedRecommendationDescription,
      translatedRecommendationNotes,
      translatedRecommendationCharacteristics,
      translatedSimilarityExplanation
    ] = await Promise.all([
      keywordsPromise,
      visualElementsPromise,
      descriptionPromise,
      overallImpressionPromise,
      moodPromise,
      imageTypePromise,
      primaryNotePromise,
      recommendationNamePromise,
      recommendationDescriptionPromise,
      recommendationNotesPromise,
      recommendationCharacteristicsPromise,
      similarityExplanationPromise
    ]);
    
    // 번역된 결과 반환
    return {
      ...report,
      similarityExplanation: typeof translatedSimilarityExplanation === 'string' 
        ? translatedSimilarityExplanation 
        : report.similarityExplanation,
      notesDescription: translatedNotesDescription,
      styleRecommendation: translatedStyleRecommendation,
      visualScene: translatedVisualScene,
      // 분석 결과 내부의 모든 필드도 업데이트
      analysisResult: {
        ...report.analysisResult,
        scaleExplanations: translatedScaleExplanations,
        description: typeof translatedDescription === 'string' ? translatedDescription : (report.analysisResult.description || ""),
        overallImpression: typeof translatedOverallImpression === 'string' ? translatedOverallImpression : (report.analysisResult.overallImpression || ""),
        keywords: translatedKeywords,
        visualElements: translatedVisualElements,
        mood: typeof translatedMood === 'string' ? translatedMood : report.analysisResult.mood,
        imageType: typeof translatedImageType === 'string' ? translatedImageType : report.analysisResult.imageType,
        primaryNote: typeof translatedPrimaryNote === 'string' ? translatedPrimaryNote : report.analysisResult.primaryNote
      },
      // 추천 정보도 업데이트
      recommendation: {
        ...report.recommendation,
        name: typeof translatedRecommendationName === 'string' ? translatedRecommendationName : report.recommendation.name,
        description: typeof translatedRecommendationDescription === 'string' ? translatedRecommendationDescription : report.recommendation.description,
        notes: translatedRecommendationNotes,
        characteristics: translatedRecommendationCharacteristics
      }
    };
  } catch (error) {
    console.error('분석 레포트 번역 중 오류 발생:', error);
    return report; // 오류 시 원본 반환
  }
};

// recommendation 객체 생성 시 visualScales 매핑 부분을 안전하게 수정
const getVisualScaleValue = (perfume: any, key: string, fallback: string): number => {
  if (key in perfume.visualScales) {
    return perfume.visualScales[key];
  } else if (fallback in perfume.visualScales) {
    return perfume.visualScales[fallback];
  }
  return 5; // 기본값
}; 


