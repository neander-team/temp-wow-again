interface PerfumeType {
  id: string;           // 향수 코드 (ACSCENT01 등)
  emoji: string;        // 대표 이모지
  title: string;        // 유형 이름
  gender: string;       // 성별 정의
  description: string;  // 상세 설명
  notes: string[];      // 향 노트
  visualScales: {       // 시각적 척도 (0-10 사이 값)
    cute_sexy: number;  // 0: 볼 꼬집고 싶은 아기토끼상, 10: 비 맞은 채 턱선 강조되는 티저 포토
    childhood_friend_chaebol: number; // 0: 편의점에서 라면 사주는 소꿉친구, 10: 생일에 백화점 한 층 대관한 남자친구
    bookworm_athlete: number; // 0: 도서관에서 안경 고쳐쓰는 학생회장, 10: 체육대회 때 여심 흔드는 에이스
    cold_warm: number; // 0: 팬사인회에서도 웃음 안 보이는 미스터리, 10: 모두에게 따뜻하게 인사하는 국민 남동생
    day_night: number; // 0: 햇살 아래 밝게 웃는 청량한 소년, 10: 무대 조명 아래 강렬한 카리스마의 퍼포머
  };
  styleKeywords: string[]; // 스타일 키워드
  personality: string[];   // 성격 특성
  recommendedScenarios: string[]; // 추천 상황
}

// 30가지 향수 유형 데이터 (개선된 척도 버전)
const perfumeTypes: PerfumeType[] = [
  {
    id: "ACSCENT01",
    emoji: "🖤",
    title: "올블랙 시티헌터",
    gender: "남성",
    description: "당신의 날카로운 눈매와 도시적 아우라는 마치 시티 팝 뮤직비디오의 남주인공 같아요. 블랙베리의 새콤달콤한 매력과 월계수잎의 시크함, 그리고 시더우드의 묵직한 잔향은 당신처럼 '돌아서는 뒷모습에 심쿵사' 유발하는 완벽한 조합입니다. 어두운 도심 골목에서도 빛나는 당신의 존재감은 팬들의 '심장 스틸러' 댓글을 양산하는 매력 포인트죠.",
    notes: ["블랙베리", "월계수잎", "시더우드"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaebol: 6, // 약간 조정
      bookworm_athlete: 5,
      cold_warm: 2,
      day_night: 9
    },
    styleKeywords: ["가죽재킷", "어두운 색상", "도시적", "모던"],
    personality: ["카리스마", "시크", "미스터리", "쿨함"],
    recommendedScenarios: ["심야 도심 산책", "재즈바 방문", "신비로운 첫 데이트", "갤러리 오프닝"]
  },
  {
    id: "ACSCENT02",
    emoji: "🤍",
    title: "화이트 슈트 셀럽",
    gender: "여성",
    description: "당신의 세련된 미니멀리즘은 '런웨이 정복자' 그 자체에요. 만다린 오렌지의 우아한 시트러스 향과 그레이프프루트의 상큼함, 피오니의 섬세한 플로럴 노트가 어우러져 '이렇게 심플해도 되나요?' 감탄을 자아내는 완벽한 밸런스를 보여줍니다. 화이트 수트에 진주 한 줄만으로 '출근길 심쿵 사고' 유발하는 당신의 모던 페미닌 아우라는 마치 뉴욕 패션위크의 메인 모델처럼 압도적이에요.",
    notes: ["만다린 오렌지", "그레이프프루트", "피오니"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 9, // 10→9로 조정
      bookworm_athlete: 3,
      cold_warm: 4,
      day_night: 6
    },
    styleKeywords: ["화이트 수트", "미니멀", "모던", "세련된"],
    personality: ["세련됨", "우아함", "자신감", "정제된"],
    recommendedScenarios: ["패션쇼", "갤러리 방문", "하이엔드 레스토랑", "비즈니스 미팅"]
  },
  {
    id: "ACSCENT03",
    emoji: "🍓",
    title: "사탕구름 첫사랑",
    gender: "여성",
    description: "당신에게서 느껴지는 파스텔 순수 에너지는 마치 팬들의 '심장아 진정해' 댓글이 폭발하는 트렌드 세터 같아요. 스트로베리의 달콤함, 자스민의 여리여리함, 바닐라의 포근함이 어우러져 SNS 피드를 장악하는 '최애 입덕 영상' 같은 매력을 완성합니다. 봄 햇살 아래 꽃밭에서 찍힌 직찍 하나로 팬들 '심장아 버티자' 댓글을 폭발시키는 당신의 파스텔 요정 에너지는 첫사랑 환상을 소환해내죠.",
    notes: ["스트로베리", "자스민", "바닐라"],
    visualScales: {
      cute_sexy: 1,
      childhood_friend_chaebol: 4,
      bookworm_athlete: 4,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["파스텔 톤", "밝은 색상", "소프트 룩", "캐주얼"],
    personality: ["발랄함", "순수함", "사랑스러움", "친근함"],
    recommendedScenarios: ["봄 피크닉", "카페 데이트", "팬미팅", "아이스크림 데이트"]
  },
  {
    id: "ACSCENT04",
    emoji: "🏝️",
    title: "지중해 바캉스왕",
    gender: "남성",
    description: "당신의 여유로운 우아함은 '남부 유럽 리조트 사장님 아니세요?' 오해를 불러일으킬 정도로 자연스러운 고급미가 느껴져요. 베르가못의 상쾌한 시칠리아 감귤향, 오렌지 플라워의 지중해성 우아함, 엠버의 따스한 포근함이 어우러져 '휴가 없이 휴양지 감성' 전달하는 여유로운 매력을 선사합니다. 아이보리 리넨 수트에 '님 리조트 사장님?' 의심을 자아내는 당신은 마치 지중해의 석양을 품은 듯한 색다른 영혼의 소유자예요.",
    notes: ["베르가못", "오렌지 플라워", "엠버"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 3,
      cold_warm: 7,
      day_night: 3
    },
    styleKeywords: ["아이보리 리넨", "휴양지 룩", "자연스러운 스타일", "여유로움"],
    personality: ["여유로움", "우아함", "고급스러움", "편안함"],
    recommendedScenarios: ["휴양지 여행", "선셋 비치 파티", "요트 나들이", "루프탑 칵테일"]
  },
  {
    id: "ACSCENT05",
    emoji: "🔥",
    title: "터틀넥 심쿵 테러리스트",
    gender: "남성",
    description: "당신의 강렬한 카리스마는 '회의실 입장만으로 PPT 합격' 아우라를 내뿜습니다. 비터 오렌지의 쌉싸름함, 쥬니퍼베리의 스파이시함, 우디 노트의 중후함이 마치 '사내 최고 엘리트'의 존재감을 선사하죠. 블랙 터틀넥에 차콜 그레이 수트로 '내 앞에만 서도 떨리는데' 심장 테러리스트 본능을 발휘하는 당신은 고급 시계 체크하는 손목 움짤만으로도 팬덤 심쿵사를 유발해요.",
    notes: ["비터 오렌지", "쥬니퍼베리", "우디 노트"],
    visualScales: {
      cute_sexy: 9,
      childhood_friend_chaebol: 7, // 8→7로 조정
      bookworm_athlete: 6,
      cold_warm: 1,
      day_night: 10
    },
    styleKeywords: ["테일러드 수트", "블랙 터틀넥", "차콜 그레이", "고급 시계"],
    personality: ["카리스마", "결단력", "자신감", "전문성"],
    recommendedScenarios: ["중요 무대", "팬미팅 메인 코너", "브랜드 행사", "시즌 앨범 활동"]
  },
  {
    id: "ACSCENT06",
    emoji: "🌿",
    title: "무필터 꿀피부 비주얼",
    gender: "여성",
    description: "당신의 투명한 피부 톤과 자연스러운 생기는 '화장품 브랜드 모델 섭외 1순위'로 등극할 정도로 빛나요. 캐럿의 신선한 생명력, 자몽의 청량한 에너지, 로터스의 맑은 수분감이 어우러져 '스킨케어 루틴 공개해 주세요' 댓글 폭발하는 투명 광채를 선사합니다. 화이트 티셔츠 하나만으로도 빛나는 당신은 자연 그대로의 청량함을 가진 웰니스 뮤즈 그 자체예요.",
    notes: ["캐럿", "자몽", "로터스"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaebol: 5,
      bookworm_athlete: 4,
      cold_warm: 8,
      day_night: 2
    },
    styleKeywords: ["화이트 티셔츠", "내추럴 룩", "청량감", "깔끔함"],
    personality: ["자연스러움", "건강함", "청량함", "순수함"],
    recommendedScenarios: ["아침 브이로그", "스킨케어 브랜드 광고", "웰니스 콘텐츠", "자연 속 화보"]
  },
  {
    id: "ACSCENT07",
    emoji: "🍷",
    title: "오페라하우스 귀족님",
    gender: "여성",
    description: "당신의 고전적 우아함과 성숙한 매력은 '오페라 하우스 VIP석 자연스럽게 입장하는' 기품 있는 아우라를 풍겨요. 로즈의 우아함, 다마스커스 로즈의 깊이, 머스크의 섬세한 여운이 어우러져 '저분 현대판 귀족 아니세요?' 질문을 유발하는 프렌치 시크의 끝판왕을 보여줍니다. 클래식한 블랙 수트에 고급 시계로 '현대판 귀족설' 떠도는 당신은 클래식 공연장에서 가장 빛나는 기품의 아이콘이죠.",
    notes: ["로즈", "다마스커스 로즈", "머스크"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 3, // 2→3으로 조정
      cold_warm: 3,
      day_night: 7
    },
    styleKeywords: ["클래식 수트", "고급 시계", "우아함", "고급스러움"],
    personality: ["우아함", "성숙함", "고귀함", "세련됨"],
    recommendedScenarios: ["클래식 콘서트", "고급 갈라 행사", "브랜드 앰배서더", "품격있는 팬미팅"]
  },
  {
    id: "ACSCENT08",
    emoji: "💎",
    title: "화이트 턱시도 스타라이트",
    gender: "여성",
    description: "당신에게서 뿜어져 나오는 순백의 아우라는 '시상식에서 인생샷 남길 것' 같은 예감이 드는 눈부신 존재감이에요. 튜베로즈의 관능적 깊이, 화이트 플로럴의 순수함, 프리지아의 투명한 생기가 어우러져 '저 사람 옆에 서기만 해도 빛나겠다' 생각이 드는 매력을 선사합니다. 화이트 턱시도에 최소한의 액세서리로 '있기만 해도 스포트라이트' 독차지하는 당신은 밤이 깊어질수록 더 빛나는 우아함의 정점이에요.",
    notes: ["튜베로즈", "화이트 플로럴", "프리지아"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 9, // 10→9로 조정
      bookworm_athlete: 3,
      cold_warm: 6,
      day_night: 7
    },
    styleKeywords: ["화이트 턱시도", "미니멀 액세서리", "럭셔리", "우아함"],
    personality: ["우아함", "화려함", "강렬함", "당당함"],
    recommendedScenarios: ["시상식", "대규모 갈라 콘서트", "화이트 컨셉트 무대", "하이엔드 브랜드 행사"]
  },
  {
    id: "ACSCENT09",
    emoji: "👑",
    title: "프렌치 시크 마스터",
    gender: "남성",
    description: "당신의 모던 감성은 '파리지앵 시크함 마스터 클래스' 개설해도 될 정도로 완벽해요. 오렌지 블라썸의 청초함, 자스민의 세련된 깊이, 퉁카 빈의 달콤한 여운이 어우러져 '프랑스 남자 따라잡기' 클래스를 열어도 완판될 것 같은 매력을 선사합니다. 미니멀한 스타일링에 센스있는 액세서리로 '오늘 무대 뭐 입지?' 고민을 단번에 종결시키는 패션 아이콘인 당신은 세련된 아우라를 완성하죠.",
    notes: ["오렌지 블라썸", "자스민", "퉁카 빈"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 8,
      bookworm_athlete: 4, // 3→4로 조정
      cold_warm: 5,
      day_night: 6
    },
    styleKeywords: ["모던", "미니멀", "세련된", "센스있는 액세서리"],
    personality: ["세련됨", "우아함", "자신감", "센스있음"],
    recommendedScenarios: ["패션 매거진 화보", "파리 스트리트 촬영", "콘셉트 앨범 활동", "디자이너 브랜드 협업"]
  },
  {
    id: "ACSCENT10",
    emoji: "🌸",
    title: "벚꽃 러블리 아이콘",
    gender: "여성",
    description: "당신의 화사한 순수함은 '봄날 화보 촬영 중이세요?' 물음표를 연발하게 만들어요. 튤립의 섬세한 아름다움, 시클라멘의 청아함, 라일락의 로맨틱한 여운이 어우러져 '꽃보다 아이돌' 수식어가 어울리는 청순한 매력을 선사합니다. 파스텔 니트에 화이트 팬츠로 '화보 촬영 중이세요?' 물음표 유발하는 티 없이 맑은 비주얼의 당신은 봄 콘셉트가 가장 잘 어울리는 아이돌이죠.",
    notes: ["튤립", "시클라멘", "라일락"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaebol: 6,
      bookworm_athlete: 4,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["파스텔 니트", "화이트 팬츠", "화사함", "청아함"],
    personality: ["순수함", "맑음", "친근함", "로맨틱함"],
    recommendedScenarios: ["봄 콘셉트 앨범", "플라워 필드 화보", "로맨틱 뮤직비디오", "팬미팅 오프닝"]
  },
  {
    id: "ACSCENT11", 
    emoji: "🏖️",
    title: "린넨셔츠 휴양지 남신",
    gender: "남성",
    description: "당신의 여유로운 바캉스 영혼은 '지금 휴가 중이세요?' 질문을 일상에서도 듣게 만들어요. 라임의 상큼함, 바질의 지중해적 여유, 앰버우드의 따스한 포근함이 어우러져 '여행 브이로그 찍으면 100만뷰' 찍을 것 같은 자연스러운 매력을 선사합니다. 린넨 셔츠에 베이지 치노팬츠로 '내 남사친 같아' 환상 유발하는 자연스러운 휴양지 비주얼의 당신은 서머 콘셉트가 가장 잘 어울리는 청량 아이돌이죠.",
    notes: ["라임", "바질", "앰버우드"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaebol: 4,
      bookworm_athlete: 7,
      cold_warm: 8,
      day_night: 2
    },
    styleKeywords: ["린넨 셔츠", "베이지 치노팬츠", "비치웨어", "자연스러운"],
    personality: ["여유로움", "자연스러움", "친근함", "따스함"],
    recommendedScenarios: ["서머 콘셉트 앨범", "해변 화보", "리얼리티 여행 콘텐츠", "선셋 라이브 공연"]
  },
  {
    id: "ACSCENT12",
    emoji: "🕊️",
    title: "눈의 왕자님 첫사랑",
    gender: "남성",
    description: "당신의 청순한 순백 이미지는 '눈 뜨면 안 되는 첫사랑' 그 자체에요. 화이트로즈의 순수한 우아함, 핑크페퍼의 은은한 생기, 머스크의 포근한 여운이 어우러져 '흰 셔츠에 청바지로 노래방에서 고음 불러주는 선배' 판타지를 완성합니다. 첫 눈 내리는 날 화이트 코트를 입고 나타나는 당신은 마치 '눈의 왕자'처럼 시선을 사로잡고, 특히 햇살 아래서는 천사 같은 아우라로 주변을 밝혀줘요.",
    notes: ["화이트로즈", "핑크페퍼", "머스크"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaebol: 7,
      bookworm_athlete: 5,
      cold_warm: 7,
      day_night: 2
    },
    styleKeywords: ["화이트 코트", "순백", "흰 셔츠", "청바지"],
    personality: ["순수함", "청순함", "우아함", "조용함"],
    recommendedScenarios: ["겨울 콘셉트 앨범", "화이트 화보", "첫사랑 뮤직비디오", "발라드 무대"]
  },
  {
    id: "ACSCENT13",
    emoji: "🏛️",
    title: "클래식 베이지코트 아트남",
    gender: "남성",
    description: "당신의 세련된 도시적 감각은 '미술관 작품보다 더 미술관에 어울리는' 고급스러운 분위기를 풍겨요. 스웨이드의 부드럽고 고급스러운 질감, 은방울꽃의 섬세한 우아함, 머스크의 포근한 여운이 어우러져 '베이지 캐시미어 코트만으로 매너리즘 뭐냐고' 팬들 각성시키는 세련미의 폭력적 매력을 선사합니다. 당신의 패션 센스는 마치 유명 디자이너의 시그니처 아이템처럼 '어디서 샀나요?' 질문을 유발하고, 당신이 방문한 카페는 곧바로 인스타 핫플레이스로 등극할 것만 같아요.",
    notes: ["스웨이드", "은방울꽃", "머스크"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 3, // 2→3으로 조정
      cold_warm: 3, // 4→3으로 조정 (23번과 차별화)
      day_night: 6
    },
    styleKeywords: ["베이지 캐시미어 코트", "고급스러움", "클래식", "도시적"], // "미니멀"→"클래식"으로 변경
    personality: ["세련됨", "고급스러움", "침착함", "예술적"], // "감각적"→"예술적"으로 변경
    recommendedScenarios: ["클래식 미술관 방문", "명품 브랜드 앰배서더", "도시 스트리트 촬영", "세련된 콘셉트 앨범"] // "미술관 화보"→"클래식 미술관 방문"
  },
  {
    id: "ACSCENT14",
    emoji: "🌿",
    title: "민낯 최상위 청년",
    gender: "남성",
    description: "당신의 자연스러운 아름다움은 '민낯 최상위' 타이틀이 어울려요. 이탈리안만다린의 싱그러운 생기, 암브레트의 자연스러움, 머스크의 부드러운 포근함이 어우러져 '흰 티에 청바지만 입어도 화보' 같은 자연스러운 아우라를 선사합니다. 꾸미지 않은 내추럴한 비주얼의 당신은 '기본템만 입어도 화보네요' 댓글 폭발시키는 천생 비주얼이죠.",
    notes: ["이탈리안만다린", "암브레트", "머스크"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaebol: 3,
      bookworm_athlete: 6,
      cold_warm: 7,
      day_night: 3
    },
    styleKeywords: ["화이트 티셔츠", "청바지", "내추럴룩", "기본템"],
    personality: ["자연스러움", "편안함", "솔직함", "건강함"],
    recommendedScenarios: ["데일리 룩 화보", "캐주얼 브랜드 모델", "자연 속 촬영", "친근한 팬미팅"]
  },
  {
    id: "ACSCENT15",
    emoji: "📚",
    title: "터틀넥 학문 교수님",
    gender: "남성",
    description: "당신의 지적인 매력은 '위스키 한 잔과 함께라면 심장 융해되는' 치명적인 수준이에요. 라벤더의 품격 있는 아로마틱함, 시나몬의 따뜻한 스파이시함, 과이악우드의 깊은 우디함이 어우러져 '블랙 터틀넥에 빈티지 시계만으로 토론하다 사랑에 빠질 것 같아' 지적 매력의 폭격기 같은 매력을 선사합니다. 학술적인 대화를 나눌 때 더욱 빛나는 당신은 마치 오래된 도서관의 지식 보관소처럼 시간이 지날수록 깊이를 더하는 매력의 소유자죠.",
    notes: ["라벤더", "시나몬", "과이악우드"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 6,
      bookworm_athlete: 9, // 10→9로 조정 (25번과 차별화)
      cold_warm: 4,
      day_night: 5 // 6→5로 조정
    },
    styleKeywords: ["블랙 터틀넥", "빈티지 시계", "안경", "아카데믹 룩"], // "클래식룩"→"아카데믹 룩"
    personality: ["지적임", "논리적", "차분함", "학구적"], // "깊이있음"→"논리적", "사려깊음"→"학구적"
    recommendedScenarios: ["지적 토크쇼", "대학 강연", "서점 토크 이벤트", "학술 세미나"] // 변경
  },
  {
    id: "ACSCENT16",
    emoji: "🖤",
    title: "록스타 레더 반항아",
    gender: "남성",
    description: "당신의 위험한 매력은 '블랙 레더 재킷만 걸쳐도 나쁜 남자 콘셉트' 완성될 정도로 강렬해요. 이탈리안사이프러스의 청량한 시크함, 시더우드의 단단한 남성미, 스파이시 어코드의 도발적인 매력이 어우러져 '어두운 바에서 실버 반지 꼬락꼬락 만지작거리는 모습에 엄마 도망가도 돼요?' 유발하는 치명적 매력을 선사합니다. 거친 록스타 이미지를 완벽하게 소화하는 당신은 마치 인디 밴드의 보컬리스트처럼 무대에 오르지 않아도 존재감이 폭발하죠.",
    notes: ["이탈리안사이프러스", "시더우드", "스파이시 어코드"],
    visualScales: {
      cute_sexy: 10,
      childhood_friend_chaebol: 3, // 4→3으로 조정
      bookworm_athlete: 6, // 7→6으로 조정
      cold_warm: 0,
      day_night: 10
    },
    styleKeywords: ["블랙 레더 재킷", "밴드 액세서리", "디스트로이드 진", "스트릿"], // "실버 반지"→"밴드 액세서리", "올블랙"→"디스트로이드 진"
    personality: ["반항적", "강렬함", "즉흥적", "솔직함"], // "카리스마"→"반항적", "미스터리"→"즉흥적", "독립적"→"솔직함"
    recommendedScenarios: ["록 페스티벌", "밴드 라이브 공연", "클럽 공연", "반항적 콘셉트 앨범"] // 변경
  },
  {
    id: "ACSCENT17",
    emoji: "💼",
    title: "1억 연봉 수트남",
    gender: "남성",
    description: "당신의 중후한 비즈니스 아우라는 '연봉 1억 냄새 풍기는 걸어다니는 수트 행거'라는 별명이 어울려요. 스모키 블렌드 우드의 농밀한 깊이, 로즈우드의 고급스러운 텍스처, 카다멈의 세련된 스파이시함이 어우러져 '테일러드 수트에 빈티지 시계로 내 사수였으면 하는' 금단현상 일으키는 중후함의 화신 같은 매력을 선사합니다. 다크 그레이 울 코트에 블랙 캐시미어 터틀넥을 완벽하게 소화하는 당신은 마치 경제지 표지 모델처럼 성공의 아이콘으로 보이죠.",
    notes: ["스모키 블렌드 우드", "로즈우드", "카다멈"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 8,
      cold_warm: 3,
      day_night: 7
    },
    styleKeywords: ["테일러드 수트", "다크 그레이 울 코트", "빈티지 시계", "블랙 터틀넥"],
    personality: ["중후함", "신뢰감", "카리스마", "성숙함"],
    recommendedScenarios: ["비즈니스 화보", "럭셔리 수트 콜라보", "매너 고수 캐릭터", "성공한 CEO 콘셉트"]
  },
  {
    id: "ACSCENT18",
    emoji: "😎",
    title: "시크 차가운 도시남",
    gender: "남성",
    description: "당신의 날카로운 눈매와 시크한 매력은 '베일 것 같은 차도남' 아우라를 완벽하게 풍겨요. 레더의 고급스러운 질감, 통카빈의 깊은 달콤함, 세이지의 세련된 허브러스함이 어우러져 '블랙 슈트에 미니멀 시계만으로 다가오지 마 오라 뿜뿜하다가도 따뜻한 미소로 심장 스틸'하는 반전 매력을 선사합니다. 미니멀하면서도 강렬한 패션 센스를 지닌 당신은 마치 고급 스파이 영화의 주인공처럼 모든 것이 완벽하게 계산된 듯한 이미지를 풍기죠.",
    notes: ["레더", "통카빈", "세이지"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 7, // 8→7로 조정
      bookworm_athlete: 6,
      cold_warm: 1,
      day_night: 8
    },
    styleKeywords: ["블랙 슈트", "미니멀 시계", "올블랙", "심플 엘레강스"],
    personality: ["시크함", "차분함", "자신감", "신비로움"],
    recommendedScenarios: ["미스터리 콘셉트 앨범", "블랙 앤 화이트 화보", "팬미팅 신비 캐릭터", "차가운 감성 발라드"]
  },
  {
    id: "ACSCENT19",
    emoji: "🏄‍♂️",
    title: "리넨셔츠 비타민보이",
    gender: "남성",
    description: "당신의 건강한 청량함은 '주말 브이로그 100만뷰' 찍을 것 같은 자연스러운 매력이 있어요. 바다소금의 미네랄한 청량감, 세이지의 허브러스한 향취, 자몽의 상큼함이 어우러져 '리넨 셔츠 한 장으로 설마 내 남친?' 착각 유발하는 건강한 비타민 같은 매력을 선사합니다. 밝은 미소와 자연스러운 매력으로 팬심 저격하는 청량 남친 같은 당신은 '오빠 사귀어요' 댓글 폭발시키는 챔피언이죠.",
    notes: ["바다소금", "세이지", "자몽"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaebol: 2,
      bookworm_athlete: 7,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["리넨 셔츠", "베이지 팬츠", "내추럴 스타일", "청량함"],
    personality: ["친근함", "건강함", "자연스러움", "따뜻함"],
    recommendedScenarios: ["데일리 브이로그", "카페 데이트 콘셉트", "봄여름 시즌송", "청량 콘셉트 앨범"]
  },
  {
    id: "ACSCENT20",
    emoji: "🌲",
    title: "통기타 캠핑왕",
    gender: "남성",
    description: "당신의 자연친화적 감성은 '캠핑 브이로그 100만뷰' 기록을 세울 정도로 매력적이에요. 타임의 허브러스한 야생감, 제라늄의 자연스러운 그린함, 엘레미의 따스한 우디함이 어우러져 '모닥불 앞 기타 연주 직캠에 팬들 심장 부서짐' 중독성 유발하는 야외 생존 전문가 같은 매력을 선사합니다. 자연과 도시의 경계를 자유롭게 넘나드는 당신은 감성 발라드의 최강자죠.",
    notes: ["타임", "제라늄", "엘레미"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 1,
      bookworm_athlete: 7,
      cold_warm: 8,
      day_night: 4
    },
    styleKeywords: ["아웃도어 룩", "체크 셔츠", "네이처 감성", "실용적"],
    personality: ["자연스러움", "여유로움", "따뜻함", "진정성"],
    recommendedScenarios: ["감성 어쿠스틱 무대", "캠핑 리얼리티", "아웃도어 화보", "계절 발라드 앨범"]
  },
  {
    id: "ACSCENT21",
    emoji: "👑",
    title: "포근한 현실 왕자님",
    gender: "남성",
    description: "당신의 포근한 사랑스러움은 '현실 왕자님라는는' 오해를 살 정도로 완벽해요. 머스크의 관능적 포근함, 아프리카 오렌지꽃의 이국적 매력, 튜베로즈의 고급스러운 깊이가 어우러져 '현실 왕자님' 논란을 일으키는 갤러리 뮤즈 같은 매력을 선사합니다. 블랙 코트만으로 '현실 왕자님' 논란 일으키는 아트 뮤즈, 등장만으로 팬미팅 분위기 장악하는 당신은 포근한 외모와 어울리는 따뜻한 내면의 매력이 돋보입니다다",
    notes: ["머스크", "아프리카 오렌지꽃", "튜베로즈"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaebol: 2,
      bookworm_athlete: 3,
      cold_warm: 6,
      day_night: 4
    },
    styleKeywords: ["아이보리 코트", "미니멀 스타일", "모노톤", "고급스러움"],
    personality: ["차분함", "지적임", "우아함", "신비로움"],
    recommendedScenarios: ["아트 갤러리 화보", "팬미팅 메인 이벤트", "럭셔리 브랜드 행사", "미스터리 콘셉트 앨범"]
  },
  {
    id: "ACSCENT22",
    emoji: "🥂",
    title: "소심한 고양이 편안룩",
    gender: "남성",
    description: "당신의 여유로운 고급미는 '확신의 소심한 고양이처럼 여유로운 호캉스 인간' 그 자체에요. 무화과의 달콤한 초록빛 여유, 베르가못의 밝은 시트러스 생기, 월계수잎의 품격 있는 그린함이 어우러져 '리넨 셔츠에 캐시미어 니트로 저 사람 호텔 주인 아냐?' 착각 유발하는 우아한 빈티지 영혼 같은 매력을 선사합니다. 편안한 럭셔리를 즐기는 당신은 여유로움이 가장 큰 매력이며, 불필요한 치장 없이도 고급스러운 아우라가 느껴지죠.",
    notes: ["무화과", "베르가못", "월계수잎"],
    visualScales: {
      cute_sexy: 5,
      childhood_friend_chaebol: 8, // 10→8로 조정 (30번과 차별화)
      bookworm_athlete: 5,
      cold_warm: 7, // 6→7로 조정
      day_night: 4 // 5→4로 조정
    },
    styleKeywords: ["리넨 셔츠", "캐시미어 니트", "편안한 럭셔리", "로우 프로필"], // "호텔 라운지룩"→"편안한 럭셔리", "편안한 럭셔리"→"로우 프로필"
    personality: ["여유로움", "소심함", "세련됨", "내적 평온"], // "고급스러움"→"소심함", "자신감"→"내적 평온"
    recommendedScenarios: ["카페 휴식", "북 라운지", "홈 인테리어 화보", "힐링 콘텐츠"] // 변경
  },
  {
    id: "ACSCENT23",
    emoji: "🏛️",
    title: "모던 갤러리 아트퀸",
    gender: "여성",
    description: "당신의 세련된 도시적 감각은 '현대 미술관 작품보다 더 미술관에 어울리는' 고급스러운 분위기를 풍겨요. 스웨이드의 부드럽고 고급스러운 질감, 은방울꽃의 섬세한 우아함, 머스크의 포근한 여운이 어우러져 '베이지 캐시미어 코트만으로 매너리즘 뭐냐고' 팬들 각성시키는 세련미의 폭력적 매력을 선사합니다. 당신의 패션 센스는 마치 유명 디자이너의 시그니처 아이템처럼 '어디서 샀나요?' 질문을 유발하고, 당신이 방문한 갤러리는 곧바로 인스타 핫플레이스로 등극할 것만 같아요.",
    notes: ["스웨이드", "은방울꽃", "머스크"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 2,
      cold_warm: 5, // 4→5로 조정 (13번과 차별화)
      day_night: 6
    },
    styleKeywords: ["베이지 캐시미어 코트", "고급스러움", "모던 아트", "도시적"], // "미니멀"→"모던 아트"
    personality: ["세련됨", "현대적", "침착함", "독창적"], // "고급스러움"→"현대적", "감각적"→"독창적"
    recommendedScenarios: ["현대 미술관 화보", "컨템포러리 아트 페어", "도시 스트리트 촬영", "세련된 콘셉트 앨범"] // "미술관 화보"→"현대 미술관 화보", "명품 브랜드 앰배서더"→"컨템포러리 아트 페어"
  },
  {
    id: "ACSCENT24",
    emoji: "🌿",
    title: "화이트티 내추럴 뮤즈",
    gender: "여성",
    description: "당신의 자연스러운 아름다움은 '민낯 최상위' 타이틀이 어울려요. 이탈리안만다린의 싱그러운 생기, 암브레트의 자연스러움, 머스크의 부드러운 포근함이 어우러져 '흰 티에 청바지만 입어도 화보' 같은 자연스러운 아우라를 선사합니다. 꾸미지 않은 내추럴한 비주얼의 당신은 '기본템만 입어도 화보네요' 댓글 폭발시키는 천생 비주얼이죠.",
    notes: ["이탈리안만다린", "암브레트", "머스크"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaebol: 3,
      bookworm_athlete: 6,
      cold_warm: 7,
      day_night: 3
    },
    styleKeywords: ["화이트 티셔츠", "청바지", "내추럴룩", "기본템"],
    personality: ["자연스러움", "편안함", "솔직함", "건강함"],
    recommendedScenarios: ["데일리 룩 화보", "캐주얼 브랜드 모델", "자연 속 촬영", "친근한 팬미팅"]
  },
  {
    id: "ACSCENT25",
    emoji: "📚",
    title: "빈티지 시계 감성문학가",
    gender: "남성",
    description: "당신의 지적인 매력은 '위스키 한 잔과 함께라면 심장 융해되는' 치명적인 수준이에요. 라벤더의 품격 있는 아로마틱함, 시나몬의 따뜻한 스파이시함, 과이악우드의 깊은 우디함이 어우러져 '블랙 터틀넥에 빈티지 시계만으로 토론하다 사랑에 빠질 것 같아' 지적 매력의 폭격기 같은 매력을 선사합니다. 예술적 감성이 돋보이는 당신은 마치 오래된 서재에 숨겨진 보물 같은 시집처럼 시간이 지날수록 매력이 깊어지는 감성파죠.",
    notes: ["라벤더", "시나몬", "과이악우드"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 6,
      bookworm_athlete: 10, // 그대로 유지 (15번과 차별화)
      cold_warm: 4,
      day_night: 7 // 6→7로 조정 (15번과 차별화)
    },
    styleKeywords: ["블랙 터틀넥", "빈티지 시계", "앤틱 액세서리", "감성 룩"], // "안경"→"앤틱 액세서리", "클래식룩"→"감성 룩"
    personality: ["지적임", "감성적", "예술적", "창의적"], // "깊이있음"→"감성적", "차분함"→"예술적", "사려깊음"→"창의적"
    recommendedScenarios: ["문학 토크쇼", "갤러리 오프닝", "와인 테이스팅", "감성 발라드 무대"] // 변경
  },
  {
    id: "ACSCENT26",
    emoji: "🖤",
    title: "미스터리 다크 시크남",
    gender: "남성",
    description: "당신의 위험한 매력은 '블랙 레더 재킷만 걸쳐도 나쁜 남자 콘셉트' 완성될 정도로 강렬해요. 이탈리안사이프러스의 청량한 시크함, 시더우드의 단단한 남성미, 스파이시 어코드의 도발적인 매력이 어우러져 '어두운 바에서 실버 반지 꼬락꼬락 만지작거리는 모습에 엄마 도망가도 돼요?' 유발하는 치명적 매력을 선사합니다. 세련된 미스터리 아우라를 풍기는 당신은 마치 비밀 많은 고급 나이트클럽의 VIP처럼 보이지 않는 경계선을 그으며 차가운 매력을 발산하죠.",
    notes: ["이탈리안사이프러스", "시더우드", "스파이시 어코드"],
    visualScales: {
      cute_sexy: 9, // 10→9로 조정 (16번과 차별화)
      childhood_friend_chaebol: 5, // 4→5로 조정 (16번과 차별화)
      bookworm_athlete: 8, // 7→8로 조정 (16번과 차별화)
      cold_warm: 0, 
      day_night: 9 // 10→9로 조정 (16번과 차별화)
    },
    styleKeywords: ["블랙 슈트", "실버 액세서리", "모노톤", "미니멀"], // "블랙 레더 재킷"→"블랙 슈트", "실버 반지"→"실버 액세서리", "올블랙"→"모노톤", "스트릿"→"미니멀"
    personality: ["신비로움", "차가움", "우아함", "계산적"], // "강렬함"→"신비로움", "카리스마"→"차가움", "미스터리"→"우아함", "독립적"→"계산적"
    recommendedScenarios: ["고급 나이트클럽", "미스터리 화보", "세련된 카페 촬영", "서스펜스 콘셉트 앨범"] // 변경
  },
  {
    id: "ACSCENT27",
    emoji: "💼",
    title: "울코트 CEO 아우라",
    gender: "남성",
    description: "당신의 중후한 비즈니스 아우라는 '연봉 1억 냄새 풍기는 걸어다니는 수트 행거'라는 별명이 어울려요. 스모키 블렌드 우드의 농밀한 깊이, 로즈우드의 고급스러운 텍스처, 카다멈의 세련된 스파이시함이 어우러져 '테일러드 수트에 빈티지 시계로 내 사수였으면 하는' 금단현상 일으키는 중후함의 화신 같은 매력을 선사합니다. 다크 그레이 울 코트에 블랙 캐시미어 터틀넥을 완벽하게 소화하는 당신은 마치 경제지 표지 모델처럼 성공의 아이콘으로 보이죠.",
    notes: ["스모키 블렌드 우드", "로즈우드", "카다멈"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaebol: 8, // 9→8로 조정
      bookworm_athlete: 8,
      cold_warm: 3,
      day_night: 7
    },
    styleKeywords: ["테일러드 수트", "다크 그레이 울 코트", "빈티지 시계", "블랙 터틀넥"],
    personality: ["중후함", "신뢰감", "카리스마", "성숙함"],
    recommendedScenarios: ["비즈니스 화보", "럭셔리 수트 콜라보", "매너 고수 캐릭터", "성공한 CEO 콘셉트"]
  },
  {
    id: "ACSCENT28",
    emoji: "💄",
    title: "심쿵 시크 올블랙녀",
    gender: "여성",
    description: "당신의 날카로운 눈매와 시크한 매력은 '베일 것 같은 차도녀녀' 아우라를 완벽하게 풍겨요. 레더의 고급스러운 질감, 통카빈의 깊은 달콤함, 세이지의 세련된 허브러스함이 어우러져 '블랙 슈트에 미니멀 시계만으로 다가오지 마 오라 뿜뿜하다가도 따뜻한 미소로 심장 스틸'하는 반전 매력을 선사합니다. 미니멀하면서도 강렬한 패션 센스를 지닌 당신은 마치 고급 스파이 영화의 주인공처럼 모든 것이 완벽하게 계산된 듯한 이미지를 풍기죠.",
    notes: ["레더", "통카빈", "세이지"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaebol: 7, // 8→7로 조정
      bookworm_athlete: 6,
      cold_warm: 2, // 1→2로 조정
      day_night: 8
    },
    styleKeywords: ["블랙 슈트", "미니멀 시계", "올블랙", "심플 엘레강스"],
    personality: ["시크함", "차분함", "자신감", "신비로움"],
    recommendedScenarios: ["미스터리 콘셉트 앨범", "블랙 앤 화이트 화보", "팬미팅 신비 캐릭터", "차가운 감성 발라드"]
  },
  {
    id: "ACSCENT29",
    emoji: "🔥",
    title: "아이라인 퍼포먼스 킹",
    gender: "남성",
    description: "당신의 강렬한 무대 장악력은 '퍼포먼스 장인'이라는 칭호가 어울려요. 바이올렛의 독특한 농밀함, 네스베리의 감각적인 달콤함, 프랑스머스크의 세련된 관능미가 어우러져 '블랙 스테이지 의상에 강렬한 아이메이크업으로 이게 뭐야 하면서도 떼창 유발하는' 퍼포먼스 킹 같은 매력을 선사합니다. 아이돌로서의 모든 재능을 완벽하게 소화하는 당신은 마치 무대의 최종보스처럼 모든 시선을 사로잡죠.",
    notes: ["바이올렛", "네스베리", "프랑스머스크"],
    visualScales: {
      cute_sexy: 9,
      childhood_friend_chaebol: 7,
      bookworm_athlete: 9,
      cold_warm: 3,
      day_night: 10
    },
    styleKeywords: ["스테이지 의상", "강렬한 메이크업", "퍼포먼스 룩", "무대 의상"],
    personality: ["독특함", "대담함", "열정적", "창의적"],
    recommendedScenarios: ["메인 퍼포먼스", "대형 콘서트", "강렬한 콘셉트 무대", "연말 시상식 무대"]
  },
  {
    id: "ACSCENT30",
    emoji: "🥂",
    title: "하이엔드 호텔 VIP",
    gender: "남성",
    description: "당신의 여유로운 고급미는 '확신의 하이엔드 럭셔리 호캉스 인간' 그 자체에요. 무화과의 달콤한 초록빛 여유, 베르가못의 밝은 시트러스 생기, 월계수잎의 품격 있는 그린함이 어우러져 '턱시도에 다이아몬드 커프링크스로 저 사람 호텔 오너 아냐?' 착각 유발하는 화려한 럭셔리 아우라를 선사합니다. 세계 최고급 호텔의 스위트룸에서 샴페인을 즐기는 모습이 가장 자연스러운 당신은 마치 국제적인 재벌가 후계자처럼 화려한 특권의식이 느껴지죠.",
    notes: ["무화과", "베르가못", "월계수잎"],
    visualScales: {
      cute_sexy: 5,
      childhood_friend_chaebol: 10, // 그대로 유지 (22번과 차별화)
      bookworm_athlete: 5,
      cold_warm: 4, // 6→4로 조정 (22번과 차별화)
      day_night: 7 // 5→7로 조정 (22번과 차별화)
    },
    styleKeywords: ["턱시도", "다이아몬드 액세서리", "하이엔드 브랜드", "화려한 럭셔리"], // "리넨 셔츠"→"턱시도", "캐시미어 니트"→"다이아몬드 액세서리", "호텔 라운지룩"→"하이엔드 브랜드", "편안한 럭셔리"→"화려한 럭셔리"
    personality: ["화려함", "당당함", "특권의식", "여유로움"], // "여유로움"→맨 뒤로, "고급스러움"→"화려함", "세련됨"→"당당함", "자신감"→"특권의식"
    recommendedScenarios: ["럭셔리 파티", "VIP 행사", "하이엔드 브랜드 행사", "프라이빗 제트 화보"] // 변경
  }
];

export type { PerfumeType };
export { perfumeTypes };