// 男性アイドル「種型（しゅけい）」のための香水タイプインターフェース定義
interface PerfumeType {
    id: string;           // 香水コード (ACSCENT01 など)
    emoji: string;        // 代表絵文字
    title: string;        // タイプ名 (〇〇種型)
    description: string;  // 詳細説明
    notes: string[];      // 香りノート
    visualScales: {       // ビジュアルスケール (0-10の間の値)
      cute_sexy: number;  // 0: 頬をつまみたくなる赤ちゃんウサギ顔, 10: 雨に濡れて顎線が強調されるティーザー写真
      childhood_friend_chaebol: number; // 0: コンビニでラーメンを奢ってくれる幼なじみ, 10: 誕生日にデパート1フロア貸し切った彼氏
      bookworm_athlete: number; // 0: 図書館で眼鏡を直す生徒会長, 10: 体育大会で女心を揺さぶるエース
      cold_guy_warm_guy: number; // 0: ファンサイン会でも笑顔を見せない謎めいた存在, 10: 誰にでも温かく挨拶する国民的弟キャラ
      daytime_man_nighttime_man: number; // 0: 太陽の下で明るく笑う爽やかな少年, 10: ステージライトの下で強烈なカリスマのパフォーマー
    };
    styleKeywords: string[]; // スタイルキーワード
    personality: string[];   // 性格特性
    recommendedScenarios: string[]; // 推奨シチュエーション
  }
  
  // 30種類の香水タイプデータ（ビジュアルスケール使用）
  export const perfumeTypes: PerfumeType[] = [
    {
      id: "ACSCENT01",
      emoji: "🖤",
      title: "都市の狩人種型",
      description: "あなたの鋭い眼差しと都会的なオーラは、まるでシティポップミュージックビデオの主人公のよう。ブラックベリーの甘酸っぱい魅力と月桂樹の洗練された雰囲気、そしてシダーウッドの重厚な余韻は、「振り向く後ろ姿に胸キュン死」を引き起こす完璧な組み合わせです。暗い都心の路地でも輝くあなたの存在感は、ファンたちの「心臓スティーラー」コメントを大量生産する魅力ポイントですね。",
      notes: ["ブラックベリー", "月桂樹", "シダーウッド"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 2,
        daytime_man_nighttime_man: 9
      },
      styleKeywords: ["レザージャケット", "ダークカラー", "アーバン", "モダン"],
      personality: ["カリスマ", "シック", "ミステリアス", "クール"],
      recommendedScenarios: ["深夜の都心散歩", "ジャズバー訪問", "神秘的な初デート", "ギャラリーオープニング"]
    },
    {
      id: "ACSCENT02",
      emoji: "🤍",
      title: "ランウェイ征服者種型",
      description: "あなたの洗練されたミニマリズムは「ランウェイ征服者」そのもの。マンダリンオレンジの優雅なシトラスの香りとグレープフルーツの爽やかさ、ピオニーの繊細なフローラルノートが調和して、「こんなにシンプルでも大丈夫？」と感嘆を呼び起こす完璧なバランスを見せています。ホワイトスーツに真珠一連だけで「通勤路の胸キュン事故」を引き起こすあなたのモダンフェミニンなオーラは、まるでニューヨークファッションウィークのメインモデルのように圧倒的です。",
      notes: ["マンダリンオレンジ", "グレープフルーツ", "ピオニー"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["ホワイトスーツ", "ミニマル", "モダン", "洗練された"],
      personality: ["洗練", "優雅", "自信", "節制"],
      recommendedScenarios: ["ファッションショー", "ギャラリー訪問", "ハイエンドレストラン", "ビジネスミーティング"]
    },
    {
      id: "ACSCENT03",
      emoji: "🍓",
      title: "パステル妖精種型",
      description: "あなたから感じられるパステル純粋エネルギーは、まるでファンたちの「心臓よ落ち着いて」コメントが爆発するトレンドセッターのよう。ストロベリーの甘さ、ジャスミンの優しさ、バニラの温かさが調和して、SNSフィードを支配する「推し入門動画」のような魅力を完成させます。春の日差しの下、花畑で撮られた直撮り一枚でファンたちの「心臓よ耐えよう」コメントを爆発させるあなたのパステル妖精エネルギーは、初恋のファンタジーを呼び起こします。",
      notes: ["ストロベリー", "ジャスミン", "バニラ"],
      visualScales: {
        cute_sexy: 1,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["パステルトーン", "明るい色", "ソフトルック", "カジュアル"],
      personality: ["明るさ", "純粋さ", "愛らしさ", "親しみやすさ"],
      recommendedScenarios: ["春のピクニック", "カフェデート", "ファンミーティング", "アイスクリームデート"]
    },
    {
      id: "ACSCENT04",
      emoji: "🏝️",
      title: "リゾート社長種型",
      description: "あなたのゆとりある優雅さは、「南ヨーロッパのリゾートオーナーではないですか？」と誤解を招くほど自然な高級感が感じられます。ベルガモットの爽やかなシチリアの柑橘の香り、オレンジフラワーの地中海的優雅さ、アンバーの温かな快適さが調和して、「休暇なしでもリゾート感覚」を伝える余裕のある魅力を与えます。アイボリーリネンスーツで「あなたリゾートオーナー？」との疑念を呼び起こすあなたは、まるで地中海の夕日を抱いたような独特な魂の持ち主です。",
      notes: ["ベルガモット", "オレンジフラワー", "アンバー"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["アイボリーリネン", "リゾートルック", "ナチュラルスタイル", "余裕"],
      personality: ["余裕", "優雅", "高級感", "快適さ"],
      recommendedScenarios: ["リゾート旅行", "サンセットビーチパーティー", "ヨット遊び", "ルーフトップカクテル"]
    },
    {
      id: "ACSCENT05",
      emoji: "🔥",
      title: "カリスマ爆撃機種型",
      description: "あなたの強烈なカリスマは「会議室に入室しただけでPPT合格」のオーラを放ちます。ビターオレンジの苦みと、ジュニパーベリーのスパイシーさ、ウッディノートの重厚さが、まるで「社内最高のエリート」の存在感をもたらします。ブラックタートルネックにチャコールグレースーツで「私の前に立つだけでドキドキするのに」心臓テロリスト本能を発揮するあなたは、高級時計をチェックする手首のGIFだけでもファンダムの胸キュン死を引き起こします。",
      notes: ["ビターオレンジ", "ジュニパーベリー", "ウッディノート"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 1,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["テーラードスーツ", "ブラックタートルネック", "チャコールグレー", "高級時計"],
      personality: ["カリスマ", "決断力", "自信", "専門性"],
      recommendedScenarios: ["重要なステージ", "ファンミーティングメインコーナー", "ブランドイベント", "シーズンアルバム活動"]
    },
    {
      id: "ACSCENT06",
      emoji: "🌿",
      title: "清涼美肌種型",
      description: "あなたの透明な肌トーンと自然な生き生きとした雰囲気は、「化粧品ブランドモデルスカウト第一位」に上がるほど輝いています。キャロットの新鮮な生命力、グレープフルーツの爽やかなエネルギー、ロータスのクリアな水分感が調和して、「スキンケアルーティン公開してください」コメントが爆発する透明な輝きをもたらします。白いTシャツ一枚でも輝くあなたは、そのままの自然な爽やかさを持つウェルネスミューズそのものです。",
      notes: ["キャロット", "グレープフルーツ", "ロータス"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["白Tシャツ", "ナチュラルルック", "清涼感", "清潔感"],
      personality: ["自然体", "健康的", "清涼感", "純粋さ"],
      recommendedScenarios: ["朝のVlog", "スキンケアブランド広告", "ウェルネスコンテンツ", "自然の中での撮影"]
    },
    {
      id: "ACSCENT07",
      emoji: "🍷",
      title: "クラシック紳士種型",
      description: "あなたの古典的な優雅さと成熟した魅力は、「オペラハウスのVIP席に自然に入場する」品格あるオーラを放ちます。ローズの優雅さ、ダマスクローズの深さ、ムスクの繊細な余韻が調和して、「あの方は現代版貴族ではないですか？」という質問を引き起こすフレンチシックの極みを示します。クラシックなブラックスーツに高級時計で「現代版貴族説」が飛び交うあなたは、クラシックコンサートホールで最も輝く品格のアイコンです。",
      notes: ["ローズ", "ダマスクローズ", "ムスク"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 2,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["クラシックスーツ", "高級時計", "優雅さ", "高級感"],
      personality: ["優雅", "成熟", "高貴", "洗練"],
      recommendedScenarios: ["クラシックコンサート", "高級ガライベント", "ブランドアンバサダー", "品格あるファンミーティング"]
    },
    {
      id: "ACSCENT08",
      emoji: "💎",
      title: "ガラ王子種型",
      description: "あなたから放たれる純白のオーラは、「授賞式で人生ショットを残す」ような予感がする眩しい存在感です。チュベローズの官能的な深さ、ホワイトフローラルの純粋さ、フリージアの透明な生命力が調和して、「あの人の隣に立つだけでも輝くだろう」と思わせる魅力をもたらします。ホワイトタキシードに最小限のアクセサリーで「そこにいるだけでスポットライト」を独占するあなたは、夜が深まるほどより輝く優雅さの極みです。",
      notes: ["チュベローズ", "ホワイトフローラル", "フリージア"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["ホワイトタキシード", "ミニマルアクセサリー", "ラグジュアリー", "優雅さ"],
      personality: ["優雅", "華やか", "強烈", "堂々"],
      recommendedScenarios: ["授賞式", "大規模ガラコンサート", "ホワイトコンセプトステージ", "ハイエンドブランドイベント"]
    },
    {
      id: "ACSCENT09",
      emoji: "👑",
      title: "パリジャン完成形種型",
      description: "あなたのモダンな感性は、「パリジャンシックさマスタークラス」を開設してもよいほど完璧です。オレンジブロッサムの清楚さ、ジャスミンの洗練された深さ、トンカビーンの甘い余韻が調和して、「フランス男子キャッチアップ」クラスを開けば完売するだろう魅力をもたらします。ミニマルなスタイリングにセンスのあるアクセサリーで「今日のステージ何を着る？」という悩みを一気に終結させるファッションアイコンであるあなたは、洗練されたオーラを完成させます。",
      notes: ["オレンジブロッサム", "ジャスミン", "トンカビーン"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 5,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["モダン", "ミニマル", "洗練", "センス良いアクセサリー"],
      personality: ["洗練", "優雅", "自信", "センス良さ"],
      recommendedScenarios: ["ファッション誌撮影", "パリストリート撮影", "コンセプトアルバム活動", "デザイナーブランドコラボ"]
    },
    {
      id: "ACSCENT10",
      emoji: "🌸",
      title: "春の日の王子種型",
      description: "あなたの華やかな純粋さは、「春の日の撮影中ですか？」という疑問を連発させます。チューリップの繊細な美しさ、シクラメンの清らかさ、ライラックのロマンチックな余韻が調和して、「花より美しいアイドル」という形容詞が似合う清純な魅力をもたらします。パステルニットに白いパンツで「撮影中ですか？」という疑問を引き起こすあなたの汚れなく澄んだビジュアルは、春のコンセプトが最も似合うアイドルです。",
      notes: ["チューリップ", "シクラメン", "ライラック"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["パステルニット", "ホワイトパンツ", "華やかさ", "清らかさ"],
      personality: ["純粋さ", "澄んだ", "親しみやすさ", "ロマンチック"],
      recommendedScenarios: ["春コンセプトアルバム", "フラワーフィールド撮影", "ロマンチックMV", "ファンミーティングオープニング"]
    },
    {
      id: "ACSCENT11", 
      emoji: "🏖️",
      title: "バカンス魂種型",
      description: "あなたのゆとりあるバカンス魂は、「今休暇中ですか？」という質問を日常でも聞かせます。ライムの爽やかさ、バジルの地中海的余裕、アンバーウッドの温かな快適さが調和して、「旅行Vlogを撮れば100万視聴」を記録しそうな自然な魅力をもたらします。リネンシャツにベージュのチノパンツで「私の男友達みたい」幻想を引き起こす自然なリゾートビジュアルのあなたは、サマーコンセプトが最も似合う爽やかアイドルです。",
      notes: ["ライム", "バジル", "アンバーウッド"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["リネンシャツ", "ベージュチノパンツ", "ビーチウェア", "自然体"],
      personality: ["余裕", "自然体", "親しみやすさ", "温かさ"],
      recommendedScenarios: ["サマーコンセプトアルバム", "ビーチ撮影", "リアリティ旅行コンテンツ", "サンセットライブパフォーマンス"]
    },
    {
      id: "ACSCENT12",
      emoji: "🕊️",
      title: "清らかな初恋種型",
      description: "あなたの清楚な純白イメージは、「受験前夜の夢に出てきたら困る」初恋そのもの。スズランの清楚さ、ピンクフリージアのロマンチックな生命力、ジャスミンの優雅な深さが調和して、「学生時代に一目惚れした先輩」幻想を完成させます。白いシャツにジーンズで瑞々しいイメージを見せるあなたは、太陽の下で微笑むだけでSNS認証ショットが完成する純粋の結晶です。",
      notes: ["スズラン", "ピンクフリージア", "ジャスミン"],
      visualScales: {
        cute_sexy: 2,
        childhood_friend_chaebol: 3,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 10,
        daytime_man_nighttime_man: 0
      },
      styleKeywords: ["白シャツ", "ジーンズ", "ナチュラルルック", "純粋さ"],
      personality: ["清純", "純粋", "優しさ", "快適さ"],
      recommendedScenarios: ["初恋コンセプトMV", "キャンパス撮影", "ファンミーティングイベント", "新人賞授賞式"]
    },
    {
      id: "ACSCENT13",
      emoji: "🍊",
      title: "オフィスリフレッシャー種型",
      description: "あなたの爽やかな清涼感は、「会議室に入った瞬間に全員が目を覚ます」リフレッシャー効果があります。柚子の韓国的清涼感、ローズマリーのハーブ的な清潔さ、ミントの涼しいクリスピーさが調和して、「オフィスルック完璧消化」イメージをもたらします。きちんとしたシャツに清潔なスラックスで「オフィスワーカー推しアイドル」に上がるあなたは、整った上に爽やかなエネルギーあふれるビジネスルックの定石です。",
      notes: ["柚子", "ローズマリー", "ミント"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["きちんとしたシャツ", "スラックス", "清潔感", "ビジネスカジュアル"],
      personality: ["活気", "整然", "清潔感", "生き生き"],
      recommendedScenarios: ["ビジネスカジュアル撮影", "オフィスコンセプトMV", "朝の放送出演", "ブランド広告"]
    },
    {
      id: "ACSCENT14",
      emoji: "✨",
      title: "きちんとした仕事人種型",
      description: "あなたのきちんとした仕事人イメージは、「グループ内プロジェクト総括」オーラを漂わせます。ミントのクリスタルのような清涼感、ジャスミンの優雅な深さ、マテ葉のモダンさが調和して、「可愛さアピールしても通じなさそう」なツンデレ男魅力をもたらします。白いシャツに心臓落ちる通勤路直撮りの主人公であるあなたは、MBTI J型の完璧な整理整頓能力を持つチームエースです。",
      notes: ["ミント", "ジャスミン", "マテ葉"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 9,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["白シャツ", "ミニマル", "清潔感", "整然"],
      personality: ["完璧主義", "責任感", "効率性", "信頼感"],
      recommendedScenarios: ["チームリーダーポジション", "ビハインドドキュメンタリー", "ファンサイン会MC", "リアルタイムライブ進行"]
    },
    {
      id: "ACSCENT15",
      emoji: "🌞",
      title: "夏の無防備ショット種型",
      description: "あなたの活気ある夏のエネルギーは、「夏の撮影の中の無防備ショット」一つでいいね数を爆発させることができます。プチグレインのスパークリングなシトラスの香り、ビターオレンジの深い魅力、グレープフルーツの爽やかさが調和して、「速度違反で熱中症を引き起こす」夏特化型の魅力をもたらします。ビーチウェアコンセプト撮影でファンたちの心臓を狙撃するあなたは、紫外線の下でも輝くサマーアイコンです。",
      notes: ["プチグレイン", "ビターオレンジ", "グレープフルーツ"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 10,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["ビーチウェア", "サマールック", "白Tシャツ", "明るい色"],
      personality: ["活気", "情熱的", "自由", "楽しさ"],
      recommendedScenarios: ["夏コンセプトアルバム", "ビーチ撮影", "サマーフェスティバル", "プール撮影MV"]
    },
    {
      id: "ACSCENT16",
      emoji: "🥃",
      title: "大人の魅力職人種型",
      description: "あなたの深みのある眼差しと重厚な魅力は、「ウイスキーを少しずつ飲みながら人生相談」をしてくれる頼もしい成熟した雰囲気を漂わせます。サンダルウッドの深い香り、アンブロクサンの快適さ、パピルスのシックさが調和して、「一度対話したら一生忘れられなさそうな」中毒性のある魅力を完成させます。ブラックスーツに独特のオーラを放つあなたは、眼差しだけで心臓を狙撃する成熟した魅力の持ち主です。",
      notes: ["サンダルウッド", "アンブロクサン", "パピルス"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 5,
        daytime_man_nighttime_man: 8
      },
      styleKeywords: ["ブラックスーツ", "高級時計", "重厚感", "成熟"],
      personality: ["成熟", "信頼感", "カリスマ", "冷静"],
      recommendedScenarios: ["成熟したバラードステージ", "ウイスキーブランド広告", "深夜トークショーゲスト", "メンターポジション"]
    },
    {
      id: "ACSCENT17",
      emoji: "🎭",
      title: "コンセプト変身天才種型",
      description: "あなたの自由奔放なアーティスト気質は、「コンセプト変身無限バッファリング天才」という形容詞が似合います。レモンペッパーの独特な辛さ、インセンスの神秘的なスモーキーさ、アイリスのパウダリーな洗練さが調和して、「ジャンル区分不可能なミックステープ」のような魅力をもたらします。ヴィンテージジャケット一つで「コンセプト理解不能」なクレイジーファンダム量産機であるあなたは、毎回新しい姿で驚かせる変身の天才です。",
      notes: ["レモンペッパー", "インセンス", "アイリス"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["ヴィンテージジャケット", "アバンギャルド", "ミックスマッチ", "独特"],
      personality: ["創造的", "自由", "独特", "芸術的"],
      recommendedScenarios: ["コンセプト変身ステージ", "MV主人公", "ファッション誌撮影", "特別プロジェクト"]
    },
    {
      id: "ACSCENT18",
      emoji: "🏙️",
      title: "都市の戦士種型",
      description: "あなたの都会的なカリスマは「ブラックタートルネックの支配者」タイトルを獲得するほど強烈です。ピンクペッパーのスパイシーな第一印象、ナツメグの深い重厚感、ミントのシックな仕上げが調和して、「近づかないで」オーラを発散する都市の戦士魅力をもたらします。暗い都心の路地でも存在感が光る都会の野良猫、シックさの暴力性で胸キュン死引き起こす者であるあなたは、都市の夜文化のエースのように暗闇の中でより輝きます。",
      notes: ["ピンクペッパー", "ナツメグ", "ミント"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 8,
        cold_guy_warm_guy: 0,
        daytime_man_nighttime_man: 9
      },
      styleKeywords: ["ブラックタートルネック", "暗い色", "都会的", "シック"],
      personality: ["シック", "強靭", "独立的", "カリスマ"],
      recommendedScenarios: ["ヒップホップコンセプトステージ", "アーバンストリート撮影", "強烈なパフォーマンス", "シティナイトMV"]
    },
    {
      id: "ACSCENT19",
      emoji: "🏄‍♂️",
      title: "爽やか彼氏種型",
      description: "あなたの健康的な爽やかさは「週末Vlog 100万視聴」を記録しそうな自然な魅力があります。海の塩のミネラル的な爽やかさ、セージのハーブ的な香り、グレープフルーツの爽やかさが調和して、「リネンシャツ一枚でまさか私の彼氏？」錯覚を引き起こす健康的なビタミンのような魅力をもたらします。明るい笑顔と自然な魅力でファン心を狙撃する爽やかな彼氏のようなあなたは、「オッパ付き合ってください」コメントを爆発させるチャンピオンです。",
      notes: ["海の塩", "セージ", "グレープフルーツ"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 2,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["リネンシャツ", "ベージュパンツ", "ナチュラルスタイル", "爽やかさ"],
      personality: ["親しみやすさ", "健康的", "自然体", "温かさ"],
      recommendedScenarios: ["デイリーVlog", "カフェデートコンセプト", "春夏シーズンソング", "爽やかコンセプトアルバム"]
    },
    {
      id: "ACSCENT20",
      emoji: "🌲",
      title: "感性マフィア種型",
      description: "あなたの自然親和的な感性は「キャンプVlog 100万視聴」記録を打ち立てるほど魅力的です。タイムのハーブ的な野生感、ゼラニウムの自然なグリーン感、エレミの温かなウッディ感が調和して、「たき火の前ギター演奏直撮りにファン心臓崩壊」中毒性を引き起こす野外生存専門家のような魅力をもたらします。自然と都市の境界を自由に行き来するあなたは、感性バラードの最強者です。",
      notes: ["タイム", "ゼラニウム", "エレミ"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 1,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["アウトドアルック", "チェックシャツ", "ネイチャー感性", "実用的"],
      personality: ["自然体", "余裕", "温かさ", "誠実さ"],
      recommendedScenarios: ["感性アコースティックステージ", "キャンプリアリティ", "アウトドア撮影", "季節バラードアルバム"]
    },
    {
      id: "ACSCENT21",
      emoji: "👑",
      title: "温かい王子種型",
      description: "あなたの温かい愛らしさは「現実の王子様という」誤解を生むほど完璧です。ムスクの官能的な温かさ、アフリカオレンジ花の異国的な魅力、チュベローズの高級な深さが調和して、「現実の王子様」論争を引き起こすギャラリーミューズのような魅力をもたらします。ブラックコートだけで「現実の王子様」論争を引き起こすアートミューズ、登場だけでファンミーティングの雰囲気を掌握するあなたは、温かい外見に似合う温かい内面の魅力が際立ちます。",
      notes: ["ムスク", "アフリカオレンジ花", "チュベローズ"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 2,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["アイボリーコート", "ミニマルスタイル", "モノトーン", "高級感"],
      personality: ["落ち着き", "知的", "優雅", "神秘的"],
      recommendedScenarios: ["アートギャラリー撮影", "ファンミーティングメインイベント", "ラグジュアリーブランドイベント", "ミステリーコンセプトアルバム"]
    },
    {
      id: "ACSCENT22",
      emoji: "🕊️",
      title: "純白王子種型",
      description: "あなたの清純な純白イメージは「目を覚ますべきでない初恋」そのものです。ホワイトローズの純粋な優雅さ、ピンクペッパーの控えめな生命力、ムスクの温かな余韻が調和して、「白いシャツにジーンズでカラオケで高音を歌ってくれる先輩」幻想を完成させます。初雪が降る日に白いコートを着て現れるあなたは、まるで「雪の王子」のように視線を奪い、特に太陽の下では天使のようなオーラで周囲を明るくします。",
      notes: ["ホワイトローズ", "ピンクペッパー", "ムスク"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["ホワイトコート", "純白", "白シャツ", "ジーンズ"],
      personality: ["純粋", "清純", "優雅", "静か"],
      recommendedScenarios: ["冬コンセプトアルバム", "ホワイト撮影", "初恋MV", "バラードステージ"]
    },
    {
      id: "ACSCENT23",
      emoji: "🏛️",
      title: "都市名品種型",
      description: "あなたの洗練された都会的センスは「美術館の作品より美術館に似合う」高級な雰囲気を漂わせます。スエードの柔らかく高級な質感、スズランの繊細な優雅さ、ムスクの温かな余韻が調和して、「ベージュカシミアコートだけでマンネリズム何だって」ファンを覚醒させる洗練さの暴力的魅力をもたらします。あなたのファッションセンスは、まるで有名デザイナーのシグネチャーアイテムのように「どこで買ったの？」質問を引き起こし、あなたが訪れたカフェはすぐにインスタのホットプレイスに上がりそうです。",
      notes: ["スエード", "スズラン", "ムスク"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 2,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["ベージュカシミアコート", "高級感", "ミニマル", "都会的"],
      personality: ["洗練", "高級感", "冷静", "感覚的"],
      recommendedScenarios: ["美術館撮影", "名品ブランドアンバサダー", "都市ストリート撮影", "洗練されたコンセプトアルバム"]
    },
    {
      id: "ACSCENT24",
      emoji: "🌿",
      title: "ナチュラル青年種型",
      description: "あなたの自然な美しさは「素顔最上位」タイトルが似合います。イタリアンマンダリンの爽やかな生命力、アンブレットの自然さ、ムスクの柔らかな温かさが調和して、「白Tにジーンズだけでも撮影」のような自然なオーラをもたらします。飾らないナチュラルなビジュアルのあなたは、「ベーシックアイテムだけでも撮影ですね」コメント爆発させる天性のビジュアルです。",
      notes: ["イタリアンマンダリン", "アンブレット", "ムスク"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 3,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["白Tシャツ", "ジーンズ", "ナチュラルルック", "ベーシックアイテム"],
      personality: ["自然体", "快適さ", "率直さ", "健康的"],
      recommendedScenarios: ["デイリールック撮影", "カジュアルブランドモデル", "自然の中での撮影", "親しみやすいファンミーティング"]
    },
    {
      id: "ACSCENT25",
      emoji: "📚",
      title: "インテリ致命種型",
      description: "あなたの知的な魅力は「ウイスキー一杯と一緒なら心臓溶解する」致命的なレベルです。ラベンダーの品格あるアロマティック感、シナモンの温かいスパイシー感、グアイアックウッドの深いウッディ感が調和して、「ブラックタートルネックにヴィンテージ時計だけで討論していて恋に落ちそう」知的魅力の爆撃機のような魅力をもたらします。深い対話をする時より輝くあなたは、まるで古い書斎の色あせた本のように時間が経つほど深みを増す魅力の持ち主です。",
      notes: ["ラベンダー", "シナモン", "グアイアックウッド"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 10,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["ブラックタートルネック", "ヴィンテージ時計", "眼鏡", "クラシックルック"],
      personality: ["知的", "深みがある", "冷静", "思慮深さ"],
      recommendedScenarios: ["知的トークショー", "ブックコンセプト撮影", "ヴィンテージ書斎撮影", "感性バラードステージ"]
    },
    {
      id: "ACSCENT26",
      emoji: "🖤",
      title: "悪い男種型",
      description: "あなたの危険な魅力は「ブラックレザージャケットだけ着ても悪い男コンセプト」完成するほど強烈です。イタリアンサイプレスの爽やかなシック感、シダーウッドの堅い男性美、スパイシーアコードの挑発的な魅力が調和して、「暗いバーでシルバーリングをいじくり回す姿にお母さん逃げてもいいですか？」を引き起こす致命的な魅力をもたらします。ブラックレザージャケットを完璧に消化するあなたは、まるでインディーバンドのボーカリストのようにステージに上がらなくても存在感が爆発します。",
      notes: ["イタリアンサイプレス", "シダーウッド", "スパイシーアコード"],
      visualScales: {
        cute_sexy: 10,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 0,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["ブラックレザージャケット", "シルバーリング", "オールブラック", "ストリート"],
      personality: ["強烈", "カリスマ", "ミステリアス", "独立的"],
      recommendedScenarios: ["ロックコンセプトステージ", "夜の街撮影", "強烈なパフォーマンス", "反抗的コンセプトアルバム"]
    },
    {
      id: "ACSCENT27",
      emoji: "💼",
      title: "スーツハンガー種型",
      description: "あなたの重厚なビジネスオーラは「年俸1億の匂いを漂わせる歩くスーツハンガー」というニックネームが似合います。スモーキーブレンドウッドの濃密な深さ、ローズウッドの高級なテクスチャー、カルダモンの洗練されたスパイシー感が調和して、「テーラードスーツにヴィンテージ時計で私の上司だったらと思う」禁断現象を引き起こす重厚さの化身のような魅力をもたらします。ダークグレーウールコートにブラックカシミアタートルネックを完璧に消化するあなたは、まるで経済誌の表紙モデルのように成功のアイコンに見えます。",
      notes: ["スモーキーブレンドウッド", "ローズウッド", "カルダモン"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 8,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["テーラードスーツ", "ダークグレーウールコート", "ヴィンテージ時計", "ブラックタートルネック"],
      personality: ["重厚", "信頼感", "カリスマ", "成熟"],
      recommendedScenarios: ["ビジネス撮影", "ラグジュアリースーツコラボ", "マナー高手キャラクター", "成功したCEOコンセプト"]
    },
    {
      id: "ACSCENT28",
      emoji: "🕶️",
      title: "ツンデレ男種型",
      description: "あなたの鋭い眼差しとシックな魅力は「噛みつきそうなツンデレ男」オーラを完璧に漂わせます。レザーの高級な質感、トンカビーンの深い甘さ、セージの洗練されたハーブ感が調和して、「ブラックスーツにミニマル時計だけで近づいてくるなオーラ全開だったのに温かい笑顔で心臓スティール」する反転魅力をもたらします。ミニマルでありながら強烈なファッションセンスを持つあなたは、まるで高級スパイ映画の主人公のようにすべてが完璧に計算されたようなイメージを漂わせます。",
      notes: ["レザー", "トンカビーン", "セージ"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 1,
        daytime_man_nighttime_man: 8
      },
      styleKeywords: ["ブラックスーツ", "ミニマル時計", "オールブラック", "シンプルエレガンス"],
      personality: ["シック", "冷静", "自信", "神秘的"],
      recommendedScenarios: ["ミステリーコンセプトアルバム", "ブラック＆ホワイト撮影", "ファンミーティング神秘キャラクター", "冷たい感性バラード"]
    },
    {
      id: "ACSCENT29",
      emoji: "🔥",
      title: "ステージ職人種型",
      description: "あなたの強烈なステージ掌握力は「パフォーマンス職人」という称号が似合います。バイオレットの独特な濃密さ、ネスベリーの感覚的な甘さ、フレンチムスクの洗練された官能美が調和して、「ブラックステージ衣装に強烈なアイメイクで何これと思いながらも大合唱引き起こす」パフォーマンスキングのような魅力をもたらします。アイドルとしてのすべての才能を完璧に消化するあなたは、まるでステージの最終ボスのようにすべての視線を奪います。",
      notes: ["バイオレット", "ネスベリー", "フレンチムスク"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 9,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["ステージ衣装", "強烈なメイクアップ", "パフォーマンスルック", "舞台衣装"],
      personality: ["独特", "大胆", "情熱的", "創造的"],
      recommendedScenarios: ["メインパフォーマンス", "大型コンサート", "強烈なコンセプトステージ", "年末授賞式ステージ"]
    },
    {
      id: "ACSCENT30",
      emoji: "🥂",
      title: "ホテルステイ人間種型",
      description: "あなたのゆとりある高級感は「確信の臆病な猫のようにゆとりあるホテルステイ人間」そのものです。イチジクの甘い緑の余裕、ベルガモットの明るいシトラス生命力、月桂樹の品格あるグリーン感が調和して、「リネンシャツにカシミアニットであの人ホテル所有者じゃない？」錯覚を引き起こす優雅なヴィンテージ魂のような魅力をもたらします。ホテルラウンジでシャンパン一杯を楽しむ姿が最も自然なあなたは、まるで生まれた時から特級ホテルVIP会員だったかのようにゆとりがあります。",
      notes: ["イチジク", "ベルガモット", "月桂樹"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 5
      },
      styleKeywords: ["リネンシャツ", "カシミアニット", "ホテルラウンジルック", "快適なラグジュアリー"],
      personality: ["ゆとり", "高級感", "洗練", "自信"],
      recommendedScenarios: ["ホテル撮影", "ラグジュアリーライフスタイル広告", "休息コンセプトコンテンツ", "くつろぎライブセッション"]
    }
  ];
