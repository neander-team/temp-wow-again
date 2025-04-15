// 为男性偶像"种型"定义的香水类型接口
interface PerfumeType {
  id: string;           // 香水代码 (ACSCENT01 等)
  emoji: string;        // 代表性表情符号
  title: string;        // 类型名称 (XX种型)
  description: string;  // 详细描述
  notes: string[];      // 香调笔记
  visualScales: {       // 视觉量表 (0-10之间的值)
    cute_sexy: number;  // 0: 想捏脸的小兔子样, 10: 淋雨后下颌线条突出的预告照片
    childhood_friend_chaeBol: number; // 0: 在便利店请你吃拉面的青梅竹马, 10: 生日时包下百货店一层的男朋友
    bookworm_athlete: number; // 0: 在图书馆推眼镜的学生会长, 10: 运动会上撩动少女心的王牌选手
    cold_warm: number; // 0: 粉丝签名会上也不露笑容的神秘人, 10: 对所有人温暖问候的国民弟弟
    day_night: number; // 0: 阳光下灿烂微笑的清爽少年, 10: 舞台灯光下散发强烈魅力的表演者
  };
  styleKeywords: string[]; // 风格关键词
  personality: string[];   // 性格特点
  recommendedScenarios: string[]; // 推荐场景
}

// 30种香水类型数据 (使用视觉量表)
const perfumeTypes: PerfumeType[] = [
  {
    id: "ACSCENT01",
    emoji: "🖤",
    title: "都市猎人种型",
    description: "你锐利的眼神和都市气息让人联想到城市流行音乐视频的男主角。黑莓的酸甜魅力、月桂叶的时尚感，以及雪松木的沉稳余韵，形成了完美组合，就像你那转身背影让人心动一样。即使在黑暗的城市小巷中，你闪耀的存在感也会让粉丝们大量留下心脏小偷的评论，这就是你的魅力所在。",
    notes: ["黑莓", "月桂叶", "雪松木"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaeBol: 7,
      bookworm_athlete: 5,
      cold_warm: 2,
      day_night: 9
    },
    styleKeywords: ["皮夹克", "暗色系", "都市感", "现代风"],
    personality: ["魅力", "时尚", "神秘", "酷感"],
    recommendedScenarios: ["深夜城市漫步", "爵士酒吧访问", "神秘初次约会", "画廊开幕式"]
  },
  {
    id: "ACSCENT02",
    emoji: "🤍",
    title: "T台征服者种型",
    description: "你精致的极简主义就是T台征服者本身。柑橘优雅的柑橘香、葡萄柚的清新感和牡丹的精致花香融合在一起，展现了如此简约也可以吗？的完美平衡，让人不禁赞叹。穿着白色西装配一串珍珠就能在上班路上引发心动事故的你，现代女性气息强烈，就像纽约时装周的主要模特一样令人震撼。",
    notes: ["柑橘", "葡萄柚", "牡丹"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaeBol: 10,
      bookworm_athlete: 3,
      cold_warm: 4,
      day_night: 6
    },
    styleKeywords: ["白色西装", "极简", "现代", "精致"],
    personality: ["精致", "优雅", "自信", "克制"],
    recommendedScenarios: ["时装秀", "画廊参观", "高端餐厅", "商务会议"]
  },
  {
    id: "ACSCENT03",
    emoji: "🍓",
    title: "粉彩精灵种型",
    description: "你散发的粉彩纯净能量，就像引爆粉丝们\"冷静啊\"的心评论的潮流引领者。草莓的甜美、茉莉的柔弱、香草的温暖融合在一起，完成了征服社交媒体动态的\"最爱入坑视频\"般的魅力。在春日阳光下花丛中拍摄的一张直拍就能引爆粉丝们\"坚持住\"的心评论的你，粉彩精灵般的能量唤起了初恋的幻想。",
    notes: ["草莓", "茉莉", "香草"],
    visualScales: {
      cute_sexy: 1,
      childhood_friend_chaeBol: 4,
      bookworm_athlete: 4,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["粉彩色调", "亮色", "柔和风格", "休闲"],
    personality: ["活泼", "纯真", "可爱", "亲切"],
    recommendedScenarios: ["春季野餐", "咖啡厅约会", "粉丝见面会", "冰淇淋约会"]
  },
  {
    id: "ACSCENT04",
    emoji: "🏝️",
    title: "度假村老板种型",
    description: "你悠闲的优雅让人误会\"你不是南欧度假村老板吗？\"的程度，散发着自然的高贵气息。佛手柑的清新西西里柑橘香、橙花的地中海优雅、琥珀的温暖舒适融合在一起，传递出无需假期也能感受度假氛围的悠闲魅力。穿着象牙色亚麻西装引发\"您是度假村老板吗？\"疑问的你，就像拥有地中海日落的与众不同的灵魂。",
    notes: ["佛手柑", "橙花", "琥珀"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaeBol: 9,
      bookworm_athlete: 3,
      cold_warm: 7,
      day_night: 3
    },
    styleKeywords: ["象牙色亚麻", "度假风", "自然风格", "悠闲"],
    personality: ["悠闲", "优雅", "高贵", "舒适"],
    recommendedScenarios: ["度假旅行", "日落沙滩派对", "游艇出游", "屋顶鸡尾酒会"]
  },
  {
    id: "ACSCENT05",
    emoji: "🔥",
    title: "魅力轰炸机种型",
    description: "你强烈的魅力散发出仅凭走进会议室就能让PPT通过的气场。苦橙的微苦、杜松子的辛辣、木质调的沉稳，赋予了你公司顶级精英的存在感。穿着黑色高领和炭灰色西装，展现\"只要站在我面前就会紧张\"的心脏恐怖分子本能的你，只需要查看高级手表的手腕动图就能引发粉丝心动事故。",
    notes: ["苦橙", "杜松子", "木质调"],
    visualScales: {
      cute_sexy: 9,
      childhood_friend_chaeBol: 8,
      bookworm_athlete: 6,
      cold_warm: 1,
      day_night: 10
    },
    styleKeywords: ["量身定制西装", "黑色高领", "炭灰色", "高级手表"],
    personality: ["魅力", "决断力", "自信", "专业性"],
    recommendedScenarios: ["重要舞台", "粉丝见面会主要环节", "品牌活动", "季节专辑活动"]
  },
  {
    id: "ACSCENT06",
    emoji: "🌿",
    title: "清爽肌肤美男种型",
    description: "你透明的肤色和自然活力，可以称得上化妆品品牌模特招募第一顺位。胡萝卜的新鲜生命力、葡萄柚的清爽能量、莲花的清澈水润融合在一起，引发\"请公开护肤程序\"评论爆炸的透明光彩。只穿一件白T恤就能闪耀的你，拥有自然而纯净的清爽感，就是健康生活方式的缪斯本身。",
    notes: ["胡萝卜", "葡萄柚", "莲花"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaeBol: 5,
      bookworm_athlete: 4,
      cold_warm: 8,
      day_night: 2
    },
    styleKeywords: ["白T恤", "自然风格", "清爽感", "整洁"],
    personality: ["自然", "健康", "清爽", "纯真"],
    recommendedScenarios: ["早晨VLOG", "护肤品牌广告", "健康内容", "自然中的写真"]
  },
  {
    id: "ACSCENT07",
    emoji: "🍷",
    title: "经典绅士种型",
    description: "你古典的优雅和成熟魅力散发着自然进入歌剧院VIP席位的高贵气场。玫瑰的优雅、大马士革玫瑰的深度、麝香的细腻余韵融合在一起，引发\"那位不是现代贵族吗？\"问题的法式时尚终极形态。穿着经典黑色西装配高级手表，引发\"现代贵族\"说流传的你，是古典音乐厅中最闪耀的高贵图标。",
    notes: ["玫瑰", "大马士革玫瑰", "麝香"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaeBol: 9,
      bookworm_athlete: 2,
      cold_warm: 3,
      day_night: 7
    },
    styleKeywords: ["经典西装", "高级手表", "优雅", "高贵"],
    personality: ["优雅", "成熟", "高贵", "精致"],
    recommendedScenarios: ["古典音乐会", "高级晚宴活动", "品牌大使", "高雅粉丝见面会"]
  },
  {
    id: "ACSCENT08",
    emoji: "💎",
    title: "晚宴王子种型",
    description: "你散发出的纯白气场，让人有在颁奖典礼上留下人生经典照片的预感，存在感极为耀眼。晚香玉的感性深度、白色花香的纯净、小苍兰的透明活力融合在一起，让人产生\"只要站在那个人旁边就会变得闪耀\"的想法。穿着白色燕尾服配上最少的配饰，仅凭存在就独占聚光灯的你，是夜越深越闪耀的优雅巅峰。",
    notes: ["晚香玉", "白色花香", "小苍兰"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaeBol: 10,
      bookworm_athlete: 3,
      cold_warm: 6,
      day_night: 7
    },
    styleKeywords: ["白色燕尾服", "极简配饰", "奢华", "优雅"],
    personality: ["优雅", "华丽", "强烈", "自信"],
    recommendedScenarios: ["颁奖典礼", "大型晚宴音乐会", "白色主题舞台", "高端品牌活动"]
  },
  {
    id: "ACSCENT09",
    emoji: "👑",
    title: "巴黎人完成型种型",
    description: "你的现代感性完美到可以开设\"巴黎人时尚大师班\"的程度。橙花的清纯、茉莉的精致深度、东加豆的甜美余韵融合在一起，提供了\"法国男人追赶班\"若开班可能立即售罄的魅力。极简风格搭配有品味的配饰，一举解决\"今天舞台穿什么\"的烦恼，作为时尚图标的你完成了精致的气场。",
    notes: ["橙花", "茉莉", "东加豆"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaeBol: 8,
      bookworm_athlete: 3,
      cold_warm: 5,
      day_night: 6
    },
    styleKeywords: ["现代", "极简", "精致", "有品味的配饰"],
    personality: ["精致", "优雅", "自信", "有品味"],
    recommendedScenarios: ["时尚杂志写真", "巴黎街头拍摄", "概念专辑活动", "设计师品牌合作"]
  },
  {
    id: "ACSCENT10",
    emoji: "🌸",
    title: "春日王子种型",
    description: "你的鲜艳纯真让人连连发问\"在拍春日写真吗？\"郁金香的精致美丽、仙客来的清雅、丁香的浪漫余韵融合在一起，形成了\"比花更美的偶像\"修饰语所匹配的纯真魅力。穿着粉彩针织衫配白色长裤，引发\"在拍写真吗\"疑问的纯真无瑕视觉形象的你，是最适合春季概念的偶像。",
    notes: ["郁金香", "仙客来", "丁香"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaeBol: 6,
      bookworm_athlete: 4,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["粉彩针织衫", "白色长裤", "明亮感", "清雅"],
    personality: ["纯真", "清澈", "亲近", "浪漫"],
    recommendedScenarios: ["春季概念专辑", "花田写真", "浪漫音乐视频", "粉丝见面会开场"]
  },
  {
    id: "ACSCENT11", 
    emoji: "🏖️",
    title: "度假灵魂种型",
    description: "你悠闲的度假灵魂甚至在日常生活中也会让人问\"现在在休假吗？\"青柠的清爽、罗勒的地中海悠闲、琥珀木的温暖舒适融合在一起，展现出拍旅行VLOG能达到百万点击的自然魅力。穿着亚麻衬衫配米色休闲裤，激发\"像我男性朋友一样\"幻想的自然度假区视觉形象的你，是最适合夏季概念的清爽偶像。",
    notes: ["青柠", "罗勒", "琥珀木"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaeBol: 4,
      bookworm_athlete: 7,
      cold_warm: 8,
      day_night: 2
    },
    styleKeywords: ["亚麻衬衫", "米色休闲裤", "沙滩装", "自然"],
    personality: ["悠闲", "自然", "亲切", "温暖"],
    recommendedScenarios: ["夏季概念专辑", "海滩写真", "真人旅行内容", "日落现场表演"]
  },
  {
    id: "ACSCENT12",
    emoji: "🕊️",
    title: "纯净初恋种型",
    description: "你纯净的纯白形象就是高考前夜梦中不该出现的初恋本身。铃兰的纯净、粉色小苍兰的浪漫活力、茉莉的优雅深度融合在一起，完成了\"学生时代一见钟情的学长\"幻想。穿着白衬衫配牛仔裤展现青春形象的你，仅仅是在阳光下微笑的样子就能完成社交媒体认证照片，是纯真的结晶。",
    notes: ["铃兰", "粉色小苍兰", "茉莉"],
    visualScales: {
      cute_sexy: 2,
      childhood_friend_chaeBol: 3,
      bookworm_athlete: 5,
      cold_warm: 10,
      day_night: 0
    },
    styleKeywords: ["白衬衫", "牛仔裤", "自然风格", "纯真"],
    personality: ["清纯", "纯真", "温柔", "舒适"],
    recommendedScenarios: ["初恋概念音乐视频", "校园写真", "粉丝见面会活动", "新人奖颁奖典礼"]
  },
  {
    id: "ACSCENT13",
    emoji: "🍊",
    title: "办公室清新剂种型",
    description: "你的清新感让进入会议室的瞬间大家精神一振具有提神效果。柚子的韩式清爽、迷迭香的草本整洁、薄荷的清凉爽脆融合在一起，展现\"完美驾驭办公室风格\"的形象。穿着整洁的衬衫配干净的西裤，成为\"办公室工作者最爱偶像\"的你，是整洁又清新能量满溢的商务风格典范。",
    notes: ["柚子", "迷迭香", "薄荷"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaeBol: 6,
      bookworm_athlete: 6,
      cold_warm: 7,
      day_night: 2
    },
    styleKeywords: ["整洁衬衫", "西裤", "整洁", "商务休闲"],
    personality: ["活力", "整洁", "干净", "有生气"],
    recommendedScenarios: ["商务休闲写真", "办公室概念音乐视频", "早间广播出演", "品牌广告"]
  },
  {
    id: "ACSCENT14",
    emoji: "✨",
    title: "整洁能干种型",
    description: "你的整洁能干形象散发着\"团队内项目总负责人\"的气场。薄荷的水晶般清爽、茉莉的优雅深度、马黛叶的现代感融合在一起，展现\"撒娇也不会奏效\"的冷都男魅力。穿着白衬衫，成为让\"心脏掉落\"的上班路直拍主角的你，拥有MBTI J型的完美整理能力，是团队王牌。",
    notes: ["薄荷", "茉莉", "马黛叶"],
    visualScales: {
      cute_sexy: 5,
      childhood_friend_chaeBol: 7,
      bookworm_athlete: 9,
      cold_warm: 3,
      day_night: 4
    },
    styleKeywords: ["白衬衫", "极简", "整洁", "有序"],
    personality: ["完美主义", "责任感", "效率", "可靠"],
    recommendedScenarios: ["团队领导职位", "幕后纪录片", "粉丝签名会MC", "实时直播主持"]
  },
  {
    id: "ACSCENT15",
    emoji: "🌞",
    title: "夏日武器照种型",
    description: "你活力四射的夏日能量只需夏日写真中的一张\"武器照\"就能引爆点赞数。佛手柑叶的闪耀柑橘香、苦橙的深层魅力、葡萄柚的清新感融合在一起，展现\"违规超速引发中暑\"的夏季特化型魅力。在沙滩装概念写真中射中粉丝心脏的你，是在紫外线下更加闪耀的夏季偶像。",
    notes: ["佛手柑叶", "苦橙", "葡萄柚"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaeBol: 5,
      bookworm_athlete: 10,
      cold_warm: 6,
      day_night: 3
    },
    styleKeywords: ["沙滩装", "夏季风格", "白T恤", "亮色"],
    personality: ["活力", "热情", "自由", "快乐"],
    recommendedScenarios: ["夏季概念专辑", "沙滩写真", "夏季音乐节", "泳池概念音乐视频"]
  },
  {
    id: "ACSCENT16",
    emoji: "🥃",
    title: "成熟气质大师种型",
    description: "你深邃的眼神和沉稳魅力散发着小酌威士忌同时提供人生咨询的可靠成熟感。檀香木的深沉香气、龙涎香的舒适感、纸莎草的时尚感融合在一起，完成了\"一次对话可能终身难忘\"的上瘾魅力。穿着黑色西装散发独特气场的你，只用眼神就能射中心脏，是成熟魅力的拥有者。",
    notes: ["檀香木", "龙涎香", "纸莎草"],
    visualScales: {
      cute_sexy: 9,
      childhood_friend_chaeBol: 8,
      bookworm_athlete: 3,
      cold_warm: 5,
      day_night: 8
    },
    styleKeywords: ["黑色西装", "高级手表", "沉稳", "成熟"],
    personality: ["成熟", "可靠", "魅力", "冷静"],
    recommendedScenarios: ["成熟抒情舞台", "威士忌品牌广告", "深夜脱口秀嘉宾", "导师角色"]
  },
  {
    id: "ACSCENT17",
    emoji: "🎭",
    title: "概念变身天才种型",
    description: "你自由不羁的艺术气质配得上\"概念变身无限缓冲天才\"修饰语。柠檬胡椒的独特辛辣、香薰的神秘烟熏感、鸢尾的粉质精致感融合在一起，展现\"类型无法分类的混音带\"般的魅力。一件复古夹克就能成为\"概念难以理解疯狂粉丝制造机\"的你，是每次都以新面貌让人惊讶的变身高手。",
    notes: ["柠檬胡椒", "香薰", "鸢尾"],
    visualScales: {
      cute_sexy: 5,
      childhood_friend_chaeBol: 7,
      bookworm_athlete: 5,
      cold_warm: 9,
      day_night: 7
    },
    styleKeywords: ["复古夹克", "前卫风格", "混搭", "独特"],
    personality: ["创意", "自由", "独特", "艺术"],
    recommendedScenarios: ["概念变身舞台", "音乐视频主角", "时尚杂志写真", "特别项目"]
  },
  {
    id: "ACSCENT18",
    emoji: "🏙️",
    title: "城市斗士种型",
    description: "你的都市魅力强烈到足以获得\"黑色高领统治者\"称号。粉红胡椒的辛辣初印象、肉豆蔻的深沉厚重、薄荷的时尚收尾融合在一起，散发\"别靠近我\"气场的城市斗士魅力。即使在黑暗的城市小巷也光芒四射的城市猫咪，以时尚的暴力性引发心动事故的你，像城市夜文化的王牌一样在黑暗中更加闪耀。",
    notes: ["粉红胡椒", "肉豆蔻", "薄荷"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaeBol: 5,
      bookworm_athlete: 8,
      cold_warm: 0,
      day_night: 9
    },
    styleKeywords: ["黑色高领", "暗色", "都市感", "时尚"],
    personality: ["时尚", "强韧", "独立", "魅力"],
    recommendedScenarios: ["嘻哈概念舞台", "城市街头写真", "强烈表演", "城市夜晚音乐视频"]
  },
  {
    id: "ACSCENT19",
    emoji: "🏄‍♂️",
    title: "清爽男友种型",
    description: "你健康的清爽感具有\"周末VLOG百万点击\"的自然魅力。海盐的矿物质清爽感、鼠尾草的草本香调、葡萄柚的清新感融合在一起，展现\"只穿一件亚麻衬衫就让人误以为是我男友？\"的健康维生素般魅力。以明亮笑容和自然魅力吸引粉丝的清爽男友般的你，是引爆\"欧巴交往吧\"评论的冠军。",
    notes: ["海盐", "鼠尾草", "葡萄柚"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaeBol: 2,
      bookworm_athlete: 7,
      cold_warm: 9,
      day_night: 1
    },
    styleKeywords: ["亚麻衬衫", "米色裤子", "自然风格", "清爽"],
    personality: ["亲切", "健康", "自然", "温暖"],
    recommendedScenarios: ["日常VLOG", "咖啡厅约会概念", "春夏季歌曲", "清爽概念专辑"]
  },
  {
    id: "ACSCENT20",
    emoji: "🌲",
    title: "感性黑手党种型",
    description: "你的亲近自然感性魅力足以创造\"露营VLOG百万点击\"记录。百里香的草本野性感、天竺葵的自然绿意、香树脂的温暖木质感融合在一起，引发\"篝火前吉他表演直拍让粉丝心碎\"上瘾的户外生存专家般魅力。自由穿梭于自然与城市边界的你，是感性抒情歌曲的最强者。",
    notes: ["百里香", "天竺葵", "香树脂"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaeBol: 1,
      bookworm_athlete: 7,
      cold_warm: 8,
      day_night: 4
    },
    styleKeywords: ["户外装", "格子衬衫", "自然感", "实用性"],
    personality: ["自然", "悠闲", "温暖", "真诚"],
    recommendedScenarios: ["感性原声舞台", "露营真人秀", "户外写真", "季节抒情专辑"]
  },
  {
    id: "ACSCENT21",
    emoji: "👑",
    title: "温暖王子种型",
    description: "你温暖的可爱魅力完美到会引起\"现实王子\"的误会。麝香的感性温暖、非洲橙花的异国魅力、晚香玉的高贵深度融合在一起，引发\"现实王子\"争议的画廊缪斯般魅力。只穿一件黑色大衣就引发\"现实王子\"争议的艺术缪斯，仅凭出场就能掌控粉丝见面会氛围的你，展现出与温暖外表相配的温暖内在魅力。",
    notes: ["麝香", "非洲橙花", "晚香玉"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaeBol: 2,
      bookworm_athlete: 3,
      cold_warm: 6,
      day_night: 4
    },
    styleKeywords: ["象牙色大衣", "极简风格", "单色调", "高贵"],
    personality: ["沉稳", "知性", "优雅", "神秘"],
    recommendedScenarios: ["艺术画廊写真", "粉丝见面会主要活动", "奢侈品牌活动", "神秘概念专辑"]
  },
  {
    id: "ACSCENT22",
    emoji: "🕊️",
    title: "纯白王子种型",
    description: "你纯净的纯白形象就是\"不能睁眼的初恋\"本身。白玫瑰的纯净优雅、粉红胡椒的淡淡活力、麝香的温暖余韵融合在一起，完成\"穿白衬衫配牛仔裤在卡拉OK唱高音的学长\"幻想。初雪天穿着白色大衣出现的你，像\"雪之王子\"一样吸引目光，尤其是在阳光下，天使般的光环照亮周围。",
    notes: ["白玫瑰", "粉红胡椒", "麝香"],
    visualScales: {
      cute_sexy: 3,
      childhood_friend_chaeBol: 7,
      bookworm_athlete: 5,
      cold_warm: 7,
      day_night: 2
    },
    styleKeywords: ["白色大衣", "纯白", "白衬衫", "牛仔裤"],
    personality: ["纯真", "清纯", "优雅", "安静"],
    recommendedScenarios: ["冬季概念专辑", "白色写真", "初恋音乐视频", "抒情舞台"]
  },
  {
    id: "ACSCENT23",
    emoji: "🏛️",
    title: "城市名品种型",
    description: "你精致的城市感觉散发着\"比美术馆作品更适合美术馆\"的高贵氛围。麂皮的柔软高贵质感、铃兰的精致优雅、麝香的温暖余韵融合在一起，展现\"仅凭米色羊绒大衣就能让粉丝们问\\\"为什么不倦怠\\\"\"的精致暴力魅力。你的时尚感就像知名设计师的签名单品，引发\"在哪里买的？\"问题，你光顾的咖啡厅立刻成为Instagram热门地点。",
    notes: ["麂皮", "铃兰", "麝香"],
    visualScales: {
      cute_sexy: 6,
      childhood_friend_chaeBol: 9,
      bookworm_athlete: 2,
      cold_warm: 4,
      day_night: 6
    },
    styleKeywords: ["米色羊绒大衣", "高贵", "极简", "都市感"],
    personality: ["精致", "高贵", "冷静", "感性"],
    recommendedScenarios: ["美术馆写真", "奢侈品牌大使", "城市街拍", "精致概念专辑"]
  },
  {
    id: "ACSCENT24",
    emoji: "🌿",
    title: "自然青年种型",
    description: "你自然的美丽适合\"素颜最佳\"称号。意大利柑橘的清新活力、龙涎草的自然感、麝香的柔软温暖融合在一起，展现\"穿白T恤配牛仔裤就像写真\"的自然气场。不加修饰的自然视觉形象的你，是引爆\"基本款也像写真\"评论的天生颜值。",
    notes: ["意大利柑橘", "龙涎草", "麝香"],
    visualScales: {
      cute_sexy: 4,
      childhood_friend_chaeBol: 3,
      bookworm_athlete: 6,
      cold_warm: 7,
      day_night: 3
    },
    styleKeywords: ["白T恤", "牛仔裤", "自然风格", "基本款"],
    personality: ["自然", "舒适", "诚实", "健康"],
    recommendedScenarios: ["日常写真", "休闲品牌模特", "自然环境拍摄", "亲切粉丝见面会"]
  },
  {
    id: "ACSCENT25",
    emoji: "📚",
    title: "知性致命种型",
    description: "你的知性魅力达到\"配上一杯威士忌就会让心脏融化\"的致命程度。薰衣草的高雅芳香、肉桂的温暖辛辣、愈创木的深沉木质感融合在一起，展现\"只穿黑色高领配复古手表就能让人在讨论中坠入爱河\"的知性魅力轰炸机效果。在深度对话中更加闪耀的你，就像老图书馆里褪色的书籍，随着时间推移增添深度的魅力拥有者。",
    notes: ["薰衣草", "肉桂", "愈创木"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaeBol: 6,
      bookworm_athlete: 10,
      cold_warm: 4,
      day_night: 6
    },
    styleKeywords: ["黑色高领", "复古手表", "眼镜", "经典风格"],
    personality: ["知性", "深度", "冷静", "thoughtful"],
    recommendedScenarios: ["知性脱口秀", "书籍概念写真", "复古书房拍摄", "感性抒情舞台"]
  },
  {
    id: "ACSCENT26",
    emoji: "🖤",
    title: "坏男人种型",
    description: "你的危险魅力强烈到\"只要披上黑色皮夹克就能完成坏男人概念\"的程度。意大利柏树的清爽时尚感、雪松木的坚实男性美、辛辣调的挑逗魅力融合在一起，引发\"在昏暗酒吧里把玩银色戒指的样子让人想问\\\"妈妈我可以逃走吗？\\\"\"的致命魅力。完美驾驭黑色皮夹克的你，就像独立乐队主唱一样，即使不登台也能存在感爆棚。",
    notes: ["意大利柏树", "雪松木", "辛辣调"],
    visualScales: {
      cute_sexy: 10,
      childhood_friend_chaeBol: 4,
      bookworm_athlete: 7,
      cold_warm: 0,
      day_night: 10
    },
    styleKeywords: ["黑色皮夹克", "银色戒指", "全黑", "街头风"],
    personality: ["强烈", "魅力", "神秘", "独立"],
    recommendedScenarios: ["摇滚概念舞台", "夜街写真", "强烈表演", "叛逆概念专辑"]
  },
  {
    id: "ACSCENT27",
    emoji: "💼",
    title: "西装衣架种型",
    description: "你沉稳的商务气场适合\"散发年薪1亿气息的行走西装衣架\"昵称。烟熏木调的浓郁深度、玫瑰木的高贵质感、小豆蔻的精致辛辣感融合在一起，展现\"穿量身定制西装配复古手表就想成为我的上司\"的上瘾沉稳魅力。完美驾驭深灰色羊毛大衣配黑色羊绒高领的你，就像经济杂志封面模特一样，看起来是成功的象征。",
    notes: ["烟熏木调", "玫瑰木", "小豆蔻"],
    visualScales: {
      cute_sexy: 8,
      childhood_friend_chaeBol: 9,
      bookworm_athlete: 8,
      cold_warm: 3,
      day_night: 7
    },
    styleKeywords: ["量身定制西装", "深灰色羊毛大衣", "复古手表", "黑色高领"],
    personality: ["沉稳", "可靠", "魅力", "成熟"],
    recommendedScenarios: ["商务写真", "奢华西装合作", "礼仪高手角色", "成功CEO概念"]
  },
  {
    id: "ACSCENT28",
    emoji: "🕶️",
    title: "冷都男种型",
    description: "你锐利的眼神和时尚魅力完美散发\"看起来会咬人的冷都男\"气场。皮革的高贵质感、东加豆的深沉甜美、鼠尾草的精致草本感融合在一起，展现\"穿黑色西装配极简手表散发\\\"别靠近我\\\"气场，却又用温暖微笑偷走心脏\"的反转魅力。拥有极简而强烈时尚感的你，就像高级间谍电影主角，给人一切都经过完美计算的印象。",
    notes: ["皮革", "东加豆", "鼠尾草"],
    visualScales: {
      cute_sexy: 7,
      childhood_friend_chaeBol: 8,
      bookworm_athlete: 6,
      cold_warm: 1,
      day_night: 8
    },
    styleKeywords: ["黑色西装", "极简手表", "全黑", "简约优雅"],
    personality: ["时尚", "冷静", "自信", "神秘"],
    recommendedScenarios: ["神秘概念专辑", "黑白写真", "粉丝见面会神秘角色", "冷感性抒情歌"]
  },
  {
    id: "ACSCENT29",
    emoji: "🔥",
    title: "舞台大师种型",
    description: "你强烈的舞台掌控力配得上\"表演大师\"称号。紫罗兰的独特浓郁、覆盆子的感性甜美、法国麝香的精致感性美融合在一起，展现\"穿黑色舞台服装配强烈眼妆让人惊叹但又引发大合唱\"的表演王者魅力。完美驾驭偶像所有才能的你，就像舞台上的最终BOSS，吸引所有目光。",
    notes: ["紫罗兰", "覆盆子", "法国麝香"],
    visualScales: {
      cute_sexy: 9,
      childhood_friend_chaeBol: 7,
      bookworm_athlete: 9,
      cold_warm: 3,
      day_night: 10
    },
    styleKeywords: ["舞台服装", "强烈妆容", "表演装", "舞台服"],
    personality: ["独特", "大胆", "热情", "创意"],
    recommendedScenarios: ["主要表演", "大型演唱会", "强烈概念舞台", "年末颁奖典礼表演"]
  },
  {
    id: "ACSCENT30",
    emoji: "🥂",
    title: "酒店度假人类种型",
    description: "你悠闲的高贵魅力就是\"确信的小心猫咪般悠闲的酒店度假人类\"本身。无花果的甜美绿意悠闲、佛手柑的明亮柑橘活力、月桂叶的高贵绿意融合在一起，引发\"穿亚麻衬衫配羊绒针织衫就让人误以为是酒店老板\"的优雅复古灵魂魅力。在酒店休息室享用一杯香槟的最自然模样，就像天生就是顶级酒店VIP会员一样悠闲的你。",
    notes: ["无花果", "佛手柑", "月桂叶"],
    visualScales: {
      cute_sexy: 5,
      childhood_friend_chaeBol: 10,
      bookworm_athlete: 5,
      cold_warm: 6,
      day_night: 5
    },
    styleKeywords: ["亚麻衬衫", "羊绒针织衫", "酒店休息厅风格", "舒适奢华"],
    personality: ["悠闲", "高贵", "精致", "自信"],
    recommendedScenarios: ["酒店写真", "奢华生活方式广告", "休息概念内容", "舒适现场表演"]
  }
];

export type { PerfumeType };
export { perfumeTypes };