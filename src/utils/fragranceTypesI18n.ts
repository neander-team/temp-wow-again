// 국제화된 향수 유형 인터페이스 정의
export interface I18nText {
  ko: string;
  en: string;
  zh?: string;
  ja?: string;
}

export interface I18nStringArray {
  ko: string[];
  en: string[];
  zh?: string[];
  ja?: string[];
}

export interface PerfumeTypeI18n {
  id: string;           // 향수 코드 (ACSCENT01 등)
  emoji: string;        // 대표 이모지
  title: I18nText;      // 유형 이름) - 다국어 지원
  description: I18nText; // 상세 설명 - 다국어 지원
  notes: I18nStringArray;      // 향 노트 (공통)
  visualScales: {       // 시각적 척도 (0-10 사이 값)
    큐티_섹시: number;  
    소꿉친구_재벌3세: number;
    공부벌레_체육특기생: number;
    차도남_훈훈남: number;
    빛의수호자_다크나이트: number;
  };
  styleKeywords: I18nStringArray;    // 스타일 키워드 - 다국어 지원
  personality: I18nStringArray;      // 성격 특성 - 다국어 지원
  recommendedScenarios: I18nStringArray; // 추천 상황 - 다국어 지원
}

// 스케일 설명을 위한, 각 언어별로 완전한 번역을 포함하는 객체
export type ScaleDescriptions = {
  [lang: string]: {
    [scaleKey: string]: {
      title: string;
      "0": string;
      "10": string;
    }
  }
};

export const scaleDescriptions: ScaleDescriptions = {
  "en": {
    // 큐티_섹시 스케일 설명
    "큐티_섹시": {
      "title": "Cute vs Sexy",
      "0": "Cute baby bunny look",
      "10": "Charismatic teaser photo with sharp jawline in rain"
    },
    // 소꿉친구_재벌3세 스케일 설명
    "소꿉친구_재벌3세": {
      "title": "Childhood Friend vs Chaebol",
      "0": "Childhood friend buying ramen in convenience store",
      "10": "Boyfriend renting department store floor for birthday"
    },
    // 공부벌레_체육특기생 스케일 설명
    "공부벌레_체육특기생": {
      "title": "Bookworm vs Athlete",
      "0": "Student council president adjusting glasses in library", 
      "10": "The ace who captures hearts at sports day"
    },
    // 차도남_훈훈남 스케일 설명
    "차도남_훈훈남": {
      "title": "Cold vs Warm",
      "0": "Mysterious person who doesn't smile even at fan signing",
      "10": "National little brother who warmly greets everyone"
    },
    // 빛의수호자_다크나이트 스케일 설명
    "빛의수호자_다크나이트": {
      "title": "Day vs Night",
      "0": "Refreshing boy smiling brightly under sunlight",
      "10": "Performer with intense charisma under stage lights"
    }
  },
  "zh": {
    // 큐티_섹시 스케일 설명
    "큐티_섹시": {
      "title": "可爱 vs 性感",
      "0": "可爱的小兔子形象",
      "10": "雨中突显锐利下颚线的魅力写真"
    },
    // 소꿉친구_재벌3세 스케일 설명
    "소꿉친구_재벌3세": {
      "title": "青梅竹马 vs 财阀三世",
      "0": "在便利店买泡面的青梅竹马",
      "10": "为生日包下百货公司一层的男朋友"
    },
    // 공부벌레_체육특기생 스케일 설명
    "공부벌레_체육특기생": {
      "title": "学霸 vs 体育特长生",
      "0": "在图书馆调整眼镜的学生会长",
      "10": "在运动会上俘获少女心的王牌"
    },
    // 차도남_훈훈남 스케일 설명
    "차도남_훈훈남": {
      "title": "冷都男 vs 暖男",
      "0": "即使在粉丝签名会上也不展示笑容的神秘人",
      "10": "对所有人都热情问候的国民弟弟"
    },
    // 빛의수호자_다크나이트 스케일 설명
    "빛의수호자_다크나이트": {
      "title": "白天的他 vs 夜晚的他",
      "0": "阳光下灿烂微笑的清爽少年",
      "10": "舞台灯光下具有强烈魅力的表演者"
    }
  },
  "ja": {
    // 큐티_섹시 스케일 설명
    "큐티_섹시": {
      "title": "キュート vs セクシー",
      "0": "頬をつまみたくなるような赤ちゃんウサギのような姿",
      "10": "雨に濡れて顎線が強調されるティーザー写真"
    },
    // 소꿉친구_재벌3세 스케일 설명
    "소꿉친구_재벌3세": {
      "title": "幼なじみ vs 財閥3世",
      "0": "コンビニでラーメンを買ってくれる幼なじみ",
      "10": "誕生日にデパートのフロアを貸し切る彼氏"
    },
    // 공부벌레_체육특기생 스케일 설명
    "공부벌레_체육특기생": {
      "title": "勉強家 vs 体育特技生",
      "0": "図書館で眼鏡を直す生徒会長",
      "10": "体育大会で女心を揺さぶるエース"
    },
    // 차도남_훈훈남 스케일 설명
    "차도남_훈훈남": {
      "title": "クールガイ vs 温かい男",
      "0": "ファンサイン会でも笑顔を見せない謎めいた人",
      "10": "皆に温かく挨拶する国民的弟"
    },
    // 빛의수호자_다크나이트 스케일 설명
    "빛의수호자_다크나이트": {
      "title": "昼の男 vs 夜の男",
      "0": "太陽の下で明るく笑う爽やかな少年",
      "10": "ステージライトの下で強烈なカリスマを持つパフォーマー"
    }
  },
  "ko": {
    // 한국어는 기본 텍스트 사용
    "큐티_섹시": {
      "title": "큐티 vs 섹시",
      "0": "볼 꼬집고 싶은 아기토끼상",
      "10": "비 맞은 채 턱선 강조되는 티저 포토"
    },
    "소꿉친구_재벌3세": {
      "title": "소꿉친구 vs 재벌3세",
      "0": "편의점에서 라면 사주는 소꿉친구",
      "10": "생일에 백화점 한 층 대관한 남자친구"
    },
    "공부벌레_체육특기생": {
      "title": "공부벌레 vs 체육특기생",
      "0": "도서관에서 안경 고쳐쓰는 학생회장",
      "10": "체육대회 때 여심 흔드는 에이스"
    },
    "차도남_훈훈남": {
      "title": "차도남 vs 훈훈남",
      "0": "팬사인회에서도 웃음 안 보이는 미스터리",
      "10": "모두에게 따뜻하게 인사하는 국민 남동생"
    },
    "빛의수호자_다크나이트": {
      "title": "빛의수호자 vs 다크나이트",
      "0": "햇살 아래 밝게 웃는 청량한 소년",
      "10": "무대 조명 아래 강렬한 카리스마의 퍼포머"
    }
  }
};

// 스케일 설명 가져오기 함수
export const getScaleDescription = (scaleKey: string, locale: string = 'ko'): { title: string, min: string, max: string } => {
  const localizedDescriptions = scaleDescriptions[locale] || scaleDescriptions.ko;
  const scaleDesc = localizedDescriptions[scaleKey] || { 
    title: scaleKey,
    "0": "최소값", 
    "10": "최대값"
  };
  
  return {
    title: scaleDesc.title,
    min: scaleDesc["0"],
    max: scaleDesc["10"]
  };
};

// 번역된 향수 유형 예시 (나머지는 복붙하시면 됩니다)
export const perfumeTypesI18n: PerfumeTypeI18n[] = [
  {
    id: "ACSCENT01",
    emoji: "🖤",
    title: {
      ko: "도시 사냥꾼",
      en: "Urban Hunter Type",
      zh: "城市猎人型",
      ja: "都市ハンタータイプ"
    },
    description: {
      ko: "당신의 날카로운 눈매와 도시적 아우라는 마치 시티 팝 뮤직비디오의 남주인공 같아요. 블랙베리의 새콤달콤한 매력과 월계수잎의 시크함, 그리고 시더우드의 묵직한 잔향은 당신처럼 '돌아서는 뒷모습에 심쿵사' 유발하는 완벽한 조합입니다. 어두운 도심 골목에서도 빛나는 당신의 존재감은 팬들의 '심장 스틸러' 댓글을 양산하는 매력 포인트죠.",
      en: "Your sharp eyes and urban aura remind me of a city pop music video protagonist. The sweet and tangy charm of blackberry, the chicness of bay leaves, and the deep lingering scent of cedarwood create the perfect combination that causes 'heart attacks when you turn around' just like you. Your presence, which shines even in dark urban alleys, is the charm point that produces fans' 'heart stealer' comments.",
      zh: "你锐利的眼神和都市光环让人联想到城市流行音乐视频中的男主角。黑莓的酸甜魅力、月桂叶的别致感和雪松木的沉稳余香，形成了完美组合，就像你一样，能引起'看到背影心动'的效果。即使在黑暗的城市小巷中也闪闪发光的你的存在感，是让粉丝留下'心脏小偷'评论的魅力点。",
      ja: "あなたの鋭い目元と都会的なオーラは、シティポップのミュージックビデオの主人公のようです。ブラックベリーの甘酸っぱい魅力と月桂樹の葉のシックさ、そしてシダーウッドの重厚な残り香は、あなたのように「振り向く後ろ姿にドキッ」と心臓を揺さぶる完璧な組み合わせです。暗い都心の路地でも輝くあなたの存在感は、ファンたちの「ハートスティーラー」というコメントを生み出す魅力ポイントです。"
    },
    notes: {
      ko: ["블랙베리", "월계수잎", "시더우드"],
      en: ["Blackberry", "Bay Leaves", "Cedarwood"],
      zh: ["黑莓", "月桂叶", "雪松木"],
      ja: ["ブラックベリー", "ベイリーブレード", "シダーウッド"]
    },
    visualScales: {
      큐티_섹시: 8,
      소꿉친구_재벌3세: 7,
      공부벌레_체육특기생: 5,
      차도남_훈훈남: 2,
      빛의수호자_다크나이트: 9
    },
    styleKeywords: {
      ko: ["가죽재킷", "어두운 색상", "도시적", "모던"],
      en: ["Leather jacket", "Dark colors", "Urban", "Modern"],
      zh: ["皮夹克", "深色", "都市风", "现代感"],
      ja: ["レザージャケット", "ダークカラー", "アーバン", "モダン"]
    },
    personality: {
      ko: ["카리스마", "시크", "미스터리", "쿨함"],
      en: ["Charisma", "Chic", "Mystery", "Coolness"],
      zh: ["魅力", "别致", "神秘", "酷感"],
      ja: ["カリスマ性", "シック", "ミステリアス", "クール"]
    },
    recommendedScenarios: {
      ko: ["심야 도심 산책", "재즈바 방문", "신비로운 첫 데이트", "갤러리 오프닝"],
      en: ["Late night urban walk", "Jazz bar visit", "Mysterious first date", "Gallery opening"],
      zh: ["午夜城市漫步", "爵士酒吧访问", "神秘初次约会", "画廊开幕"],
      ja: ["深夜の都心散歩", "ジャズバー訪問", "神秘的な初デート", "ギャラリーオープニング"]
    }
  },
  {
    id: "ACSCENT21",
    emoji: "👑",
    title: {
      ko: "포근한 왕자",
      en: "Cozy Prince Type",
      zh: "温暖王子型",
      ja: "温かい王子タイプ"
    },
    description: {
      ko: "당신의 포근한 사랑스러움은 '현실 왕자님라는는' 오해를 살 정도로 완벽해요. 머스크의 관능적 포근함, 아프리카 오렌지꽃의 이국적 매력, 튜베로즈의 고급스러운 깊이가 어우러져 '현실 왕자님' 논란을 일으키는 갤러리 뮤즈 같은 매력을 선사합니다. 블랙 코트만으로 '현실 왕자님' 논란 일으키는 아트 뮤즈, 등장만으로 팬미팅 분위기 장악하는 당신은 포근한 외모와 어울리는 따뜻한 내면의 매력이 돋보입니다다",
      en: "Your warm loveliness is so perfect that it causes misunderstandings of being a 'real-life prince'. The sensual warmth of musk, the exotic charm of African orange blossom, and the luxurious depth of tuberose blend to create a gallery muse-like charm that stirs up the 'real-life prince' controversy. As an art muse who causes 'real-life prince' controversy with just a black coat, dominating the fan meeting atmosphere with just your appearance, your warm appearance is complemented by your warm inner charm.",
      zh: "你温暖的可爱是如此完美，以至于被误解为'现实中的王子'。麝香的感性温暖、非洲橙花的异国情调和晚香玉的奢华深度融合在一起，创造出一种像画廊缪斯一样的魅力，引发'现实中的王子'的争议。作为一个仅凭一件黑色外套就引起'现实中的王子'争议的艺术缪斯，仅凭出场就能掌控粉丝会现场氛围的你，温暖的外表与温暖的内在魅力相得益彰。",
      ja: "あなたの温かい愛らしさは、「現実の王子様」と誤解されるほど完璧です。ムスクの官能的な温かさ、アフリカンオレンジブロッサムのエキゾチックな魅力、チューベローズの高級感ある深みが融合して、「現実の王子様」論争を引き起こすギャラリーミューズのような魅力を提供します。ブラックコートだけで「現実の王子様」論争を引き起こすアートミューズ、登場するだけでファンミーティングの雰囲気を支配するあなたは、温かい外見に合った温かい内面の魅力が際立ちます。"
    },
    notes: {
      ko: ["머스크", "아프리카 오렌지꽃", "튜베로즈"],
      en: ["Musk", "African Orange Blossom", "Tuberose"],
      zh: ["麝香", "非洲橙花", "晚香玉"],
      ja: ["ムスク", "アフリカンオレンジブロッサム", "チューベローズ"]
    },
    visualScales: {
      큐티_섹시: 4,
      소꿉친구_재벌3세: 2,
      공부벌레_체육특기생: 3,
      차도남_훈훈남: 6,
      빛의수호자_다크나이트: 4
    },
    styleKeywords: {
      ko: ["아이보리 코트", "미니멀 스타일", "모노톤", "고급스러움"],
      en: ["Ivory coat", "Minimal style", "Monotone", "Luxury"],
      zh: ["象牙色外套", "极简风格", "单色调", "奢华感"],
      ja: ["アイボリーコート", "ミニマルスタイル", "モノトーン", "高級感"]
    },
    personality: {
      ko: ["차분함", "지적임", "우아함", "신비로움"],
      en: ["Calmness", "Intelligence", "Elegance", "Mysteriousness"],
      zh: ["沉稳", "聪慧", "优雅", "神秘"],
      ja: ["落ち着き", "知的", "優雅さ", "神秘性"]
    },
    recommendedScenarios: {
      ko: ["아트 갤러리 화보", "팬미팅 메인 이벤트", "럭셔리 브랜드 행사", "미스터리 콘셉트 앨범"],
      en: ["Art gallery photoshoot", "Fan meeting main event", "Luxury brand event", "Mystery concept album"],
      zh: ["艺术画廊写真", "粉丝会主活动", "奢侈品牌活动", "神秘概念专辑"],
      ja: ["アートギャラリー写真撮影", "ファンミーティングメインイベント", "ラグジュアリーブランドイベント", "ミステリーコンセプトアルバム"]
    }
  },
  // 나머지 향수 타입은 여기에 복붙하면 됩니다
];

// fragranceTypes에서 원하는 언어의 데이터만 추출하는 유틸리티 함수
export function getPerfumeTypesByLang(lang: 'ko' | 'en' | 'zh' | 'ja') {
  return perfumeTypesI18n.map(type => ({
    id: type.id,
    emoji: type.emoji,
    title: type.title[lang],
    description: type.description[lang],
    notes: type.notes[lang],
    visualScales: type.visualScales,
    styleKeywords: type.styleKeywords[lang],
    personality: type.personality[lang],
    recommendedScenarios: type.recommendedScenarios[lang]
  }));
} 