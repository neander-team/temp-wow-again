// Interface definition for perfume types for male idol "Jong-hyung"
interface PerfumeType {
    id: string;           // Perfume code (ACSCENT01 etc.)
    emoji: string;        // Representative emoji
    title: string;        // Type name (XX Jong-hyung)
    description: string;  // Detailed description
    notes: string[];      // Fragrance notes
    visualScales: {       // Visual scales (values between 0-10)
      cute_sexy: number;  // 0: Baby bunny face you want to pinch, 10: Teaser photo with jaw emphasized after rain
      childhood_friend_chaebol: number; // 0: Childhood friend buying you ramen at convenience store, 10: Boyfriend who rented a department store floor for your birthday
      bookworm_athlete: number; // 0: Student council president fixing glasses in library, 10: Ace who melts female hearts at sports day
      cold_guy_warm_guy: number; // 0: Mysterious person who doesn't smile even at fan signing, 10: National little brother who warmly greets everyone
      daytime_man_nighttime_man: number; // 0: Fresh boy smiling brightly under the sun, 10: Performer with intense charisma under stage lights
    };
    styleKeywords: string[]; // Style keywords
    personality: string[];   // Personality traits
    recommendedScenarios: string[]; // Recommended situations
  }
  
  // 30 perfume type data (using visual scales)
  export const perfumeTypes: PerfumeType[] = [
    {
      id: "ACSCENT01",
      emoji: "🖤",
      title: "Urban Hunter",
      description: "Your sharp gaze and urban aura are like the male protagonist of a city pop music video. The bittersweet charm of blackberry, the chic sophistication of bay leaf, and the deep resonance of cedarwood create a perfect combination that induces 'heart-fluttering death at the sight of your back as you turn away.' Your presence, which shines even in dark downtown alleys, is a charm point that generates countless 'heart stealer' comments from fans.",
      notes: ["Blackberry", "Bay Leaf", "Cedarwood"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 2,
        daytime_man_nighttime_man: 9
      },
      styleKeywords: ["Leather jacket", "Dark colors", "Urban", "Modern"],
      personality: ["Charisma", "Chic", "Mysterious", "Cool"],
      recommendedScenarios: ["Late night urban walks", "Jazz bar visits", "Mysterious first dates", "Gallery openings"]
    },
    {
      id: "ACSCENT02",
      emoji: "🤍",
      title: "Runway Conqueror",
      description: "Your sophisticated minimalism is the epitome of a 'runway conqueror.' The elegant citrus scent of mandarin orange, the freshness of grapefruit, and the delicate floral notes of peony blend to create a perfect balance that makes people wonder, 'How can something so simple be so amazing?' Your modern feminine aura, causing 'heart-fluttering accidents on the commute' with just a white suit and a single strand of pearls, is as overwhelming as the main model at New York Fashion Week.",
      notes: ["Mandarin Orange", "Grapefruit", "Peony"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["White suit", "Minimal", "Modern", "Sophisticated"],
      personality: ["Refined", "Elegant", "Confident", "Composed"],
      recommendedScenarios: ["Fashion shows", "Gallery visits", "High-end restaurants", "Business meetings"]
    },
    {
      id: "ACSCENT03",
      emoji: "🍓",
      title: "Pastel Fairy",
      description: "The pastel pure energy radiating from you is like a trendsetter that explodes fans' 'heart, please calm down' comments. The sweetness of strawberry, the gentle delicacy of jasmine, and the warmth of vanilla combine to complete a charm like the 'bias introduction video' that dominates social media feeds. Your pastel fairy energy, which causes fans to explode with 'heart, hang in there' comments from just one candid photo taken in a flower field under spring sunlight, evokes first love fantasies.",
      notes: ["Strawberry", "Jasmine", "Vanilla"],
      visualScales: {
        cute_sexy: 1,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["Pastel tones", "Bright colors", "Soft look", "Casual"],
      personality: ["Vibrant", "Pure", "Lovable", "Approachable"],
      recommendedScenarios: ["Spring picnics", "Café dates", "Fan meetings", "Ice cream dates"]
    },
    {
      id: "ACSCENT04",
      emoji: "🏝️",
      title: "Resort Owner",
      description: "Your relaxed elegance raises the question, 'Are you a Southern European resort owner?' with its natural luxury. The refreshing Sicilian citrus scent of bergamot, the Mediterranean elegance of orange flower, and the warm comfort of amber blend to deliver a relaxed charm that conveys 'resort vibes without the vacation.' With an ivory linen suit raising suspicions of 'Are you a resort owner?', you're like a unique soul that embodies the sunset of the Mediterranean.",
      notes: ["Bergamot", "Orange Flower", "Amber"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["Ivory linen", "Resort look", "Natural style", "Relaxed"],
      personality: ["Relaxed", "Elegant", "Luxurious", "Comfortable"],
      recommendedScenarios: ["Resort travels", "Sunset beach parties", "Yacht outings", "Rooftop cocktails"]
    },
    {
      id: "ACSCENT05",
      emoji: "🔥",
      title: "Charisma Bomber",
      description: "Your intense charisma exudes an aura of 'PPT approval just by entering the meeting room.' The bitterness of bitter orange, the spiciness of juniper berry, and the weightiness of woody notes create a presence like 'the company's top elite.' Triggering 'heart-pounding terrorist instincts' with a black turtleneck and charcoal gray suit that make people think 'I get nervous just standing in front of you,' you cause fan heart attacks with just a GIF of checking your luxury watch.",
      notes: ["Bitter Orange", "Juniper Berry", "Woody Notes"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 1,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["Tailored suit", "Black turtleneck", "Charcoal gray", "Luxury watch"],
      personality: ["Charisma", "Decisiveness", "Confidence", "Expertise"],
      recommendedScenarios: ["Important stages", "Fan meeting main corners", "Brand events", "Season album activities"]
    },
    {
      id: "ACSCENT06",
      emoji: "🌿",
      title: "Fresh Skin Beauty",
      description: "Your transparent skin tone and natural vitality shine enough to be 'first choice for cosmetic brand model recruitment.' The fresh vitality of carrot, the refreshing energy of grapefruit, and the clear moistness of lotus blend to bring the transparent radiance that explodes with 'please share your skincare routine' comments. Shining even in just a white T-shirt, you are the wellness muse embodying natural freshness.",
      notes: ["Carrot", "Grapefruit", "Lotus"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["White T-shirt", "Natural look", "Fresh feel", "Clean-cut"],
      personality: ["Natural", "Healthy", "Fresh", "Pure"],
      recommendedScenarios: ["Morning vlogs", "Skincare brand ads", "Wellness content", "Natural photoshoots"]
    },
    {
      id: "ACSCENT07",
      emoji: "🍷",
      title: "Classic Gentleman",
      description: "Your classic elegance and mature charm emit a dignified aura of 'naturally entering the VIP seat at the opera house.' The elegance of rose, the depth of Damascus rose, and the delicate lingering of musk blend to showcase the epitome of French chic that raises the question, 'Is that person a modern noble?' With a classic black suit and luxury watch sparking 'modern nobility theories,' you are the icon of dignity that shines brightest in a classical concert hall.",
      notes: ["Rose", "Damascus Rose", "Musk"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 2,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["Classic suit", "Luxury watch", "Elegance", "Luxury"],
      personality: ["Elegant", "Mature", "Noble", "Sophisticated"],
      recommendedScenarios: ["Classical concerts", "High-end gala events", "Brand ambassador roles", "Dignified fan meetings"]
    },
    {
      id: "ACSCENT08",
      emoji: "💎",
      title: "Gala Prince",
      description: "The pure white aura emanating from you gives a sense that 'you'll create a life shot at an awards ceremony' with its dazzling presence. The sensual depth of tuberose, the purity of white floral, and the transparent vitality of freesia blend to bring a charm that makes people think 'just standing next to that person would make me shine.' With a white tuxedo and minimal accessories, 'monopolizing the spotlight just by being there,' you are the epitome of elegance that shines brighter as the night deepens.",
      notes: ["Tuberose", "White Floral", "Freesia"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["White tuxedo", "Minimal accessories", "Luxury", "Elegance"],
      personality: ["Elegant", "Splendid", "Intense", "Confident"],
      recommendedScenarios: ["Award ceremonies", "Large-scale gala concerts", "White concept stages", "High-end brand events"]
    },
    {
      id: "ACSCENT09",
      emoji: "👑",
      title: "Parisian Perfect",
      description: "Your modern sensibility is perfect enough to open a 'Parisian chic master class.' The freshness of orange blossom, the sophisticated depth of jasmine, and the sweet lingering of tonka bean blend to bring charm that would sell out a 'French man crash course' class. With minimal styling and sensible accessories, you are the fashion icon who instantly resolves the 'what to wear on stage today?' dilemma, completing a sophisticated aura.",
      notes: ["Orange Blossom", "Jasmine", "Tonka Bean"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 5,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["Modern", "Minimal", "Sophisticated", "Sensible accessories"],
      personality: ["Refined", "Elegant", "Confident", "Sensible"],
      recommendedScenarios: ["Fashion magazine photoshoots", "Paris street photography", "Concept album activities", "Designer brand collaborations"]
    },
    {
      id: "ACSCENT10",
      emoji: "🌸",
      title: "Spring Day Prince",
      description: "Your bright purity repeatedly raises the question, 'Are you in the middle of a spring photoshoot?' The delicate beauty of tulips, the freshness of cyclamen, and the romantic lingering of lilac blend to bring a pure charm worthy of the description 'idol more beautiful than flowers.' With a pastel knit and white pants causing questions of 'Are you in a photoshoot?', your clear, untainted visual is the idol most suited for spring concepts.",
      notes: ["Tulip", "Cyclamen", "Lilac"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 4,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["Pastel knit", "White pants", "Brightness", "Freshness"],
      personality: ["Pure", "Clear", "Friendly", "Romantic"],
      recommendedScenarios: ["Spring concept albums", "Flower field photoshoots", "Romantic music videos", "Fan meeting openings"]
    },
    {
      id: "ACSCENT11", 
      emoji: "🏖️",
      title: "Vacation Soul",
      description: "Your leisurely vacation soul makes people ask 'Are you on vacation right now?' even in daily life. The freshness of lime, the Mediterranean leisureliness of basil, and the warm comfort of amberwood blend to bring a natural charm that 'would get a million views if filming a travel vlog.' With a linen shirt and beige chino pants evoking the 'like my guy friend' fantasy, your natural resort visual makes you the refreshing idol most suited for summer concepts.",
      notes: ["Lime", "Basil", "Amberwood"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["Linen shirt", "Beige chino pants", "Beachwear", "Natural"],
      personality: ["Leisurely", "Natural", "Friendly", "Warm"],
      recommendedScenarios: ["Summer concept albums", "Beach photoshoots", "Reality travel content", "Sunset live performances"]
    },
    {
      id: "ACSCENT12",
      emoji: "🕊️",
      title: "Pure First Love",
      description: "Your pure white image is the embodiment of 'the first love you shouldn't see in your dream the night before exams.' The freshness of lily of the valley, the romantic vitality of pink freesia, and the elegant depth of jasmine blend to complete the 'senior you fell in love with at first sight in school' fantasy. Showcasing a youthful image with a white shirt and jeans, you are the crystallization of purity whose social media certification photos are completed just by smiling under the sunlight.",
      notes: ["Lily of the Valley", "Pink Freesia", "Jasmine"],
      visualScales: {
        cute_sexy: 2,
        childhood_friend_chaebol: 3,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 10,
        daytime_man_nighttime_man: 0
      },
      styleKeywords: ["White shirt", "Jeans", "Natural look", "Purity"],
      personality: ["Pure", "Innocent", "Gentle", "Comfortable"],
      recommendedScenarios: ["First love concept music videos", "Campus photoshoots", "Fan meeting events", "Rookie award ceremonies"]
    },
    {
      id: "ACSCENT13",
      emoji: "🍊",
      title: "Office Refresher",
      description: "Your refreshing clarity has a revitalizing effect that 'wakes everyone up the moment you enter the meeting room.' The Korean freshness of yuzu, the herbal cleanness of rosemary, and the cool crispness of mint blend to bring an image of 'perfectly embodying office look.' With a neat shirt and clean slacks making you the 'office workers' favorite idol,' you are the textbook example of a business look that is orderly yet brimming with fresh energy.",
      notes: ["Yuzu", "Rosemary", "Mint"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["Neat shirt", "Slacks", "Clean-cut", "Business casual"],
      personality: ["Energetic", "Organized", "Clean", "Lively"],
      recommendedScenarios: ["Business casual photoshoots", "Office concept music videos", "Morning broadcast appearances", "Brand advertisements"]
    },
    {
      id: "ACSCENT14",
      emoji: "✨",
      title: "Neat Efficiency",
      description: "Your neat efficient image exudes the aura of 'project overall supervisor within the group.' The crystal-like freshness of mint, the elegant depth of jasmine, and the modernity of mate leaf blend to bring a cold guy charm that 'wouldn't be swayed by aegyo.' With a white shirt making you the protagonist of heart-dropping commute fancams, you are the team ace with the perfect organizational abilities of an MBTI J type.",
      notes: ["Mint", "Jasmine", "Mate Leaf"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 9,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["White shirt", "Minimal", "Clean-cut", "Organized"],
      personality: ["Perfectionist", "Responsible", "Efficient", "Reliable"],
      recommendedScenarios: ["Team leader positions", "Behind-the-scenes documentaries", "Fan signing event MCs", "Real-time live broadcasts"]
    },
    {
      id: "ACSCENT15",
      emoji: "🌞",
      title: "Summer Unguarded Shot",
      description: "Your energetic summer energy can explode with likes from just 'one unguarded shot in a summer photoshoot.' The sparkling citrus scent of petitgrain, the deep charm of bitter orange, and the freshness of grapefruit blend to bring a summer-specialized charm that 'causes heatstroke by speeding violation.' You, who snipe fans' hearts in beachwear concept photoshoots, are the summer icon that shines brighter under the sun's rays.",
      notes: ["Petitgrain", "Bitter Orange", "Grapefruit"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 10,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["Beachwear", "Summer look", "White T-shirt", "Bright colors"],
      personality: ["Energetic", "Passionate", "Free", "Joyful"],
      recommendedScenarios: ["Summer concept albums", "Beach photoshoots", "Summer festivals", "Pool concept music videos"]
    },
    {
      id: "ACSCENT16",
      emoji: "🥃",
      title: "Mature Charm Master",
      description: "Your deep gaze and weighty charm emit a reliable mature ambiance like 'giving life advice while sipping whiskey.' The deep scent of sandalwood, the comfortable warmth of ambroxan, and the chic sophistication of papyrus blend to complete an addictive charm that feels like 'once you talk to them, you'll never forget it.' Radiating a unique aura in a black suit, you are the possessor of mature charm that captures hearts with just a gaze.",
      notes: ["Sandalwood", "Ambroxan", "Papyrus"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 5,
        daytime_man_nighttime_man: 8
      },
      styleKeywords: ["Black suit", "Luxury watch", "Weightiness", "Maturity"],
      personality: ["Mature", "Reliable", "Charismatic", "Calm"],
      recommendedScenarios: ["Mature ballad stages", "Whiskey brand advertisements", "Late-night talk show guests", "Mentor positions"]
    },
    {
      id: "ACSCENT17",
      emoji: "🎭",
      title: "Concept Transformation Genius",
      description: "Your free-spirited artist temperament suits the title 'concept transformation infinite buffering genius.' The unique spiciness of lemon pepper, the mysterious smokiness of incense, and the powdery sophistication of iris blend to bring charm like a 'genre-defying mixtape.' A vintage jacket maker of 'concept incomprehensible' crazy fandoms, you are the transformation genius who surprises with a new look each time.",
      notes: ["Lemon Pepper", "Incense", "Iris"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["Vintage jacket", "Avant-garde", "Mix-match", "Unique"],
      personality: ["Creative", "Free", "Unique", "Artistic"],
      recommendedScenarios: ["Concept transformation stages", "Music video protagonists", "Fashion magazine photoshoots", "Special projects"]
    },
    {
      id: "ACSCENT18",
      emoji: "🏙️",
      title: "Urban Fighter",
      description: "Your urban charisma is intense enough to earn the title 'black turtleneck dominator.' The spicy first impression of pink pepper, the deep weightiness of nutmeg, and the chic finish of mint blend to bring an urban fighter charm that emits a 'don't come near me' aura. An urban cat whose presence shines even in dark city alleys, causing heart attacks with the violence of your chic style, you shine more in the darkness like the ace of urban night culture.",
      notes: ["Pink Pepper", "Nutmeg", "Mint"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 5,
        bookworm_athlete: 8,
        cold_guy_warm_guy: 0,
        daytime_man_nighttime_man: 9
      },
      styleKeywords: ["Black turtleneck", "Dark colors", "Urban", "Chic"],
      personality: ["Chic", "Strong", "Independent", "Charismatic"],
      recommendedScenarios: ["Hip-hop concept stages", "Urban street photoshoots", "Intense performances", "City night music videos"]
    },
    {
      id: "ACSCENT19",
      emoji: "🏄‍♂️",
      title: "Fresh Boyfriend",
      description: "Your healthy freshness has the natural charm of 'a million views on a weekend vlog.' The mineral freshness of sea salt, the herbal scent of sage, and the freshness of grapefruit blend to bring a healthy vitamin-like charm that causes 'boyfriend misconceptions from just one linen shirt.' With a bright smile and natural charm that captures fan hearts, you are the fresh boyfriend-like champion who explodes 'oppa, let's date' comments.",
      notes: ["Sea Salt", "Sage", "Grapefruit"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 2,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 9,
        daytime_man_nighttime_man: 1
      },
      styleKeywords: ["Linen shirt", "Beige pants", "Natural style", "Fresh feel"],
      personality: ["Friendly", "Healthy", "Natural", "Warm"],
      recommendedScenarios: ["Daily vlogs", "Café date concepts", "Spring-summer season songs", "Fresh concept albums"]
    },
    {
      id: "ACSCENT20",
      emoji: "🌲",
      title: "Sentimental Mafia",
      description: "Your nature-friendly sensitivity is charming enough to create a 'camping vlog million view' record. The herbal wildness of thyme, the natural greenness of geranium, and the warm woodiness of elemi blend to bring an outdoor survival expert-like charm that causes 'fan heart shattering in bonfire guitar performance fancams.' Freely moving between nature and city boundaries, you are the strongest in emotional ballads.",
      notes: ["Thyme", "Geranium", "Elemi"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 1,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 8,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["Outdoor look", "Check shirt", "Nature aesthetic", "Practical"],
      personality: ["Natural", "Relaxed", "Warm", "Genuine"],
      recommendedScenarios: ["Emotional acoustic stages", "Camping reality shows", "Outdoor photoshoots", "Seasonal ballad albums"]
    },
    {
      id: "ACSCENT21",
      emoji: "👑",
      title: "Warm Prince",
      description: "Your warm loveliness is perfect enough to cause misunderstandings of being a 'real prince.' The sensual warmth of musk, the exotic charm of African orange flower, and the luxurious depth of tuberose blend to bring gallery muse-like charm that sparks 'real prince' controversies. An art muse causing 'real prince' controversies with just a black coat, dominating fan meeting atmospheres with just your appearance, you stand out with inner warmth matching your warm appearance.",
      notes: ["Musk", "African Orange Flower", "Tuberose"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 2,
        bookworm_athlete: 3,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 4
      },
      styleKeywords: ["Ivory coat", "Minimal style", "Monotone", "Luxury"],
      personality: ["Calm", "Intellectual", "Elegant", "Mysterious"],
      recommendedScenarios: ["Art gallery photoshoots", "Fan meeting main events", "Luxury brand events", "Mystery concept albums"]
    },
    {
      id: "ACSCENT22",
      emoji: "🕊️",
      title: "Pure White Prince",
      description: "Your pure white image is the embodiment of 'first love you shouldn't wake up to.' The pure elegance of white rose, the subtle vitality of pink pepper, and the warm lingering of musk blend to complete the 'senior singing high notes in a karaoke room with white shirt and jeans' fantasy. Appearing in a white coat on the first snowy day, you catch attention like the 'snow prince,' especially under the sunlight, brightening surroundings with an angelic aura.",
      notes: ["White Rose", "Pink Pepper", "Musk"],
      visualScales: {
        cute_sexy: 3,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 2
      },
      styleKeywords: ["White coat", "Pure white", "White shirt", "Jeans"],
      personality: ["Pure", "Innocent", "Elegant", "Quiet"],
      recommendedScenarios: ["Winter concept albums", "White photoshoots", "First love music videos", "Ballad stages"]
    },
    {
      id: "ACSCENT23",
      emoji: "🏛️",
      title: "Urban Luxury",
      description: "Your sophisticated urban sense exudes a luxurious atmosphere that makes you 'more suitable for an art museum than the artworks inside.' The soft luxurious texture of suede, the delicate elegance of lily of the valley, and the warm lingering of musk blend to bring the violent charm of sophistication that 'awakens fans asking what kind of slump with just a beige cashmere coat.' Your fashion sense is like a signature item of a famous designer, raising questions of 'where did you buy that?', and cafés you visit are likely to become Instagram hotspots.",
      notes: ["Suede", "Lily of the Valley", "Musk"],
      visualScales: {
        cute_sexy: 6,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 2,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["Beige cashmere coat", "Luxurious", "Minimal", "Urban"],
      personality: ["Refined", "Luxurious", "Calm", "Sensual"],
      recommendedScenarios: ["Art museum photoshoots", "Luxury brand ambassadorships", "Urban street photography", "Sophisticated concept albums"]
    },
    {
      id: "ACSCENT24",
      emoji: "🌿",
      title: "Natural Youth",
      description: "Your natural beauty suits the title 'bare face top tier.' The fresh vitality of Italian mandarin, the naturalness of ambrette, and the soft warmth of musk blend to bring a natural aura that's 'like a photoshoot just with a white tee and jeans.' With an unadorned natural visual, you are the natural visual who explodes 'even basic items look like a photoshoot' comments.",
      notes: ["Italian Mandarin", "Ambrette", "Musk"],
      visualScales: {
        cute_sexy: 4,
        childhood_friend_chaebol: 3,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 7,
        daytime_man_nighttime_man: 3
      },
      styleKeywords: ["White T-shirt", "Jeans", "Natural look", "Basic items"],
      personality: ["Natural", "Comfortable", "Honest", "Healthy"],
      recommendedScenarios: ["Daily look photoshoots", "Casual brand models", "Natural setting photoshoots", "Friendly fan meetings"]
    },
    {
      id: "ACSCENT25",
      emoji: "📚",
      title: "Intellectual Fatal",
      description: "Your intellectual charm reaches the fatal level of 'heart melting with a glass of whiskey.' The dignified aromatic quality of lavender, the warm spiciness of cinnamon, and the deep woodiness of guaiac wood blend to create a intellectual charm bomber that makes people think 'I might fall in love while having a deep discussion with someone in a black turtleneck and vintage watch.' Shining more during deep conversations, you are like faded books in an old library, gaining more depth as time passes.",
      notes: ["Lavender", "Cinnamon", "Guaiac Wood"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 6,
        bookworm_athlete: 10,
        cold_guy_warm_guy: 4,
        daytime_man_nighttime_man: 6
      },
      styleKeywords: ["Black turtleneck", "Vintage watch", "Glasses", "Classic look"],
      personality: ["Intellectual", "Deep", "Calm", "Thoughtful"],
      recommendedScenarios: ["Intellectual talk shows", "Book concept photoshoots", "Vintage library shoots", "Emotional ballad stages"]
    },
    {
      id: "ACSCENT26",
      emoji: "🖤",
      title: "Bad Boy",
      description: "Your dangerous charm is intense enough to 'complete a bad boy concept just by throwing on a black leather jacket.' The refreshing chic feel of Italian cypress, the solid masculinity of cedarwood, and the provocative charm of spicy accord blend to create a fatal attraction that makes people ask 'Mom, can I run away?' when seeing you fidgeting with silver rings in a dark bar. Perfectly pulling off a black leather jacket, you explode with presence even without getting on stage, like an indie band vocalist.",
      notes: ["Italian Cypress", "Cedarwood", "Spicy Accord"],
      visualScales: {
        cute_sexy: 10,
        childhood_friend_chaebol: 4,
        bookworm_athlete: 7,
        cold_guy_warm_guy: 0,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["Black leather jacket", "Silver rings", "All black", "Street style"],
      personality: ["Intense", "Charismatic", "Mysterious", "Independent"],
      recommendedScenarios: ["Rock concept stages", "Night street photoshoots", "Intense performances", "Rebellious concept albums"]
    },
    {
      id: "ACSCENT27",
      emoji: "💼",
      title: "Suit Hanger",
      description: "Your weighty business aura suits the nickname 'walking suit hanger emanating 100 million annual salary vibes.' The dense depth of smoky blended wood, the luxurious texture of rosewood, and the sophisticated spiciness of cardamom blend to bring a weighty incarnate charm that causes 'withdrawal symptoms wishing you were my supervisor in a tailored suit and vintage watch.' Perfectly pulling off a dark gray wool coat and black cashmere turtleneck, you look like a success icon reminiscent of an economic magazine cover model.",
      notes: ["Smoky Blended Wood", "Rosewood", "Cardamom"],
      visualScales: {
        cute_sexy: 8,
        childhood_friend_chaebol: 9,
        bookworm_athlete: 8,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 7
      },
      styleKeywords: ["Tailored suit", "Dark gray wool coat", "Vintage watch", "Black turtleneck"],
      personality: ["Weighty", "Reliable", "Charismatic", "Mature"],
      recommendedScenarios: ["Business photoshoots", "Luxury suit collaborations", "Manner master character", "Successful CEO concept"]
    },
    {
      id: "ACSCENT28",
      emoji: "🕶️",
      title: "Cold Guy",
      description: "Your sharp gaze and chic charm perfectly emit a 'likely to bite cold guy' aura. The luxurious texture of leather, the deep sweetness of tonka bean, and the sophisticated herbaceousness of sage blend to bring a reversal charm that 'exudes don't-approach-me vibes in a black suit with a minimal watch, yet steals hearts with a warm smile.' With a minimal yet intense fashion sense, you exude an image that seems perfectly calculated like the protagonist of a high-end spy movie.",
      notes: ["Leather", "Tonka Bean", "Sage"],
      visualScales: {
        cute_sexy: 7,
        childhood_friend_chaebol: 8,
        bookworm_athlete: 6,
        cold_guy_warm_guy: 1,
        daytime_man_nighttime_man: 8
      },
      styleKeywords: ["Black suit", "Minimal watch", "All black", "Simple elegance"],
      personality: ["Chic", "Calm", "Confident", "Mysterious"],
      recommendedScenarios: ["Mystery concept albums", "Black and white photoshoots", "Fan meeting mystery character", "Cold emotional ballads"]
    },
    {
      id: "ACSCENT29",
      emoji: "🔥",
      title: "Stage Master",
      description: "Your intense stage dominance suits the title 'performance master.' The unique density of violet, the sensual sweetness of nesberry, and the sophisticated sensuality of French musk blend to bring performance king-like charm that 'provokes mass sing-alongs amidst reactions of what is this? to black stage outfits with intense eye makeup.' Perfectly embodying all the talents of an idol, you capture all gazes like the final boss of the stage.",
      notes: ["Violet", "Nesberry", "French Musk"],
      visualScales: {
        cute_sexy: 9,
        childhood_friend_chaebol: 7,
        bookworm_athlete: 9,
        cold_guy_warm_guy: 3,
        daytime_man_nighttime_man: 10
      },
      styleKeywords: ["Stage outfits", "Intense makeup", "Performance look", "Stage costumes"],
      personality: ["Unique", "Bold", "Passionate", "Creative"],
      recommendedScenarios: ["Main performances", "Large concerts", "Intense concept stages", "Year-end award ceremony stages"]
    },
    {
      id: "ACSCENT30",
      emoji: "🥂",
      title: "Hotel Vacation Human",
      description: "Your relaxed luxury is the embodiment of 'a confirmed shy cat-like leisurely hotel vacation human.' The sweet greenness of fig, the bright citrus vitality of bergamot, and the dignified greenness of bay leaf blend to bring an elegant vintage soul-like charm that causes 'isn't that person the hotel owner?' misconceptions with a linen shirt and cashmere knit. Most natural enjoying a glass of champagne in a hotel lounge, you are as leisurely as if you've been a VIP member of a luxury hotel since birth.",
      notes: ["Fig", "Bergamot", "Bay Leaf"],
      visualScales: {
        cute_sexy: 5,
        childhood_friend_chaebol: 10,
        bookworm_athlete: 5,
        cold_guy_warm_guy: 6,
        daytime_man_nighttime_man: 5
      },
      styleKeywords: ["Linen shirt", "Cashmere knit", "Hotel lounge look", "Comfortable luxury"],
      personality: ["Leisurely", "Luxurious", "Refined", "Confident"],
      recommendedScenarios: ["Hotel photoshoots", "Luxury lifestyle advertisements", "Rest concept content", "Relaxed live sessions"]
    }
  ];