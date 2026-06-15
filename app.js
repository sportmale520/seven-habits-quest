/* 🌌 心淵：選擇 — 核心遊戲邏輯與資料庫 (JavaScript) */

// ──────────────── 1. 關卡情境與抉擇資料庫 (習慣一：主動積極) ────────────────
const levelsData = [
  {
    id: 1,
    title: "絲線纏身",
    category: "序幕 ‧ 墜入",
    boss: "拖延之神「翳」之影",
    bgImage: "assets/images/game_60.jpg",
    description: "你在黑暗的深淵中醒來，空氣中浮現半透明的絲線。這是第一層「拖延」，你將面對最初的聲音考驗。",
    stages: [
      {
        text: "你睜開眼，四周一片漆黑。這裡是心之深淵第一層。空氣中飄著無數半透明的絲線，微微發光，緩緩蠕動。\n\n遠處，傳來一個慵懶的聲音——\n「又來了一個。說吧，孩子，你今天過得這麼爛……是誰害的？」",
        choices: [
          {
            text: "「一定是有人在背後偷偷牽線控制我！」",
            proactive: true,
            spiritFeedback: "你開始尋找「幕後黑手」。但這裡除了你沒有別人——牽線的人，正是你自己的雙手。你拿回了解釋權！",
            energyChange: 2
          },
          {
            text: "「都是運氣不好，環境太糟，我什麼也決定不了。」",
            proactive: false,
            spiritFeedback: "當你放棄選擇，你就把命運的操偶線交給了外部的環境與藉口，絲線收緊了！",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "早自習的點名",
    category: "校園篇 ‧ 第一關",
    boss: "拖延之神「翳」",
    bgImage: "assets/images/game_80.jpg",
    description: "遲到進入教室，面對老師嚴厲的質疑與同學們的側目，你該如何用行動來掌握主動權？",
    stages: [
      {
        text: "你衝進教室，早自習點名剛好結束。老師推了推眼鏡，嚴厲地盯著你：「又遲到了！你到底有沒有把讀書當一回事？」同學們紛紛轉頭看著你，氣氛尷尬。",
        choices: [
          {
            text: "「老師，對不起。我剛剛在走廊趕作業沒聽到，這是我自己的疏忽，現在進來跟您報到。」",
            proactive: true,
            spiritFeedback: "主動說明，不找無意義的藉口。你主動拿回了這個故事的解釋權！",
            energyChange: 2
          },
          {
            text: "（翻白眼小聲抱怨）「嘖，又不是只有我沒聽到，幹嘛只針對我……」",
            proactive: false,
            spiritFeedback: "消極反擊。你把今天一整天的心情與價值，交給了別人的情緒決定！",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "分組報告的挑戰",
    category: "校園篇 ‧ 第二關",
    boss: "消極巨魔「他答」",
    bgImage: "assets/images/game_80.jpg",
    description: "小組報告期限將至，組員們卻集體「裝死」不回訊息。你是坐以待斃，還是積極採取行動？",
    stages: [
      {
        text: "明天就是分組報告的發表日。你在群組發了多次訊息提醒大家分配任務，卻只有已讀不回或藉口連連。此時你怒火中燒，感到極度委屈。",
        choices: [
          {
            text: "「大家既然聯絡不上，我先做完我負責的部分，並在報告中明確標註每人分工，隨後私訊組長與老師協調。」",
            proactive: true,
            spiritFeedback: "專注於你「能控制的影響範圍」，不被他人的消極拖垮。劍靈綻放光芒！",
            energyChange: 2
          },
          {
            text: "「反正大家都不做，我也不做了，明天上台丟臉大家一起死！」",
            proactive: false,
            spiritFeedback: "玉石俱焚的被動心態。你讓別人的怠惰剝奪了你的學習與表現權利。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "模擬考失利",
    category: "校園篇 ‧ 第三關",
    boss: "消極巨魔「他答」",
    bgImage: "assets/images/game_90.jpg",
    description: "付出了極大努力卻換來一紙糟糕的模擬考成績單，這時你該如何看待自己的努力？",
    stages: [
      {
        text: "模擬考成績公佈。你熬夜讀了三個星期的數學，居然只考了 40 分。看著隔壁沒怎麼讀書卻考了 90 分的同學，你感到心灰意冷，想放棄這科。",
        choices: [
          {
            text: "「分數反映的是我目前的盲點。我需要去找老師或同學討論我寫錯的題目，調整讀書方法。」",
            proactive: true,
            spiritFeedback: "將挫折視為反饋，專注於改進策略，這正是強大的主動積極思維！",
            energyChange: 2
          },
          {
            text: "「我就是沒有數學天賦，再怎麼努力都是白費力氣。這輩子放棄數學算了。」",
            proactive: false,
            spiritFeedback: "落入決定論的陷阱（基因決定、天賦決定）。你給自己貼上失敗的標籤，斬斷了進步的可能性。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "被誤解的偷竊",
    category: "校園篇 ‧ 第四關",
    boss: "誤解幻影",
    bgImage: "assets/images/game_80.jpg",
    description: "班上同學的錢包不見了，所有的線索（包括你曾路過他的座位）都指向你，你該如何證明清白？",
    stages: [
      {
        text: "班會課上，班導和主任把你叫出去。失主同學指證你曾在下課時鬼鬼祟祟摸過他的課桌。班上同學看你的眼神充滿懷疑，你感到無比委屈與憤怒。",
        choices: [
          {
            text: "「我理解大家因為我路過而懷疑我。我願意配合調閱走廊監視器，並請當時跟我在一起的朋友作證。」",
            proactive: true,
            spiritFeedback: "保持理智，不情緒化發飆。用事實與行動來回應危機，成功消除誤解！",
            energyChange: 2
          },
          {
            text: "（大吼大叫，翻桌子）「你們血口噴人！你們才是小偷！這破學校我不待了！」",
            proactive: false,
            spiritFeedback: "暴怒與攻擊只會讓別人更懷疑你的心虛。消極的回應讓事態陷入絕境。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "嘮叨的門鎖",
    category: "家庭篇 ‧ 第一關",
    boss: "嘮叨古神",
    bgImage: "assets/images/game_90.jpg",
    description: "一回到家迎接你的是父母無休止的嘮叨，這時該如何建立健康的溝通邊界？",
    stages: [
      {
        text: "你剛進家門，鞋子還沒脫完，媽媽就開始碎碎念：「你看你，整天就知道抱著手機，書也不讀，房間亂得像垃圾場，以後能有什麼出息？」你一天的疲憊頓時轉為怒火。",
        choices: [
          {
            text: "「媽，我知道你擔心我。我先回房休息二十分鐘，然後我會去整理房間和寫作業，好嗎？」",
            proactive: true,
            spiritFeedback: "看穿嘮叨背後的「關心關切」，主動表達承諾與具體時程，瞬間化解家庭風暴！",
            energyChange: 2
          },
          {
            text: "（大力甩門）「煩死了！天天碎碎念，你除了挑我毛病還會幹嘛？這家我一秒都不想待！」",
            proactive: false,
            spiritFeedback: "用摔門和挑釁宣洩情緒，讓家庭衝突惡性循環，心智能量受挫！",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "零用錢的爭執",
    category: "家庭篇 ‧ 第二關",
    boss: "匱乏詛咒",
    bgImage: "assets/images/game_90.jpg",
    description: "你的零用錢比身邊的朋友都少，想買心儀的物品卻預算不足，你該如何解決？",
    stages: [
      {
        text: "同學都買了最新的限定球鞋，你向父母要求增加零用錢，卻遭到回絕：「小孩子吃飽穿暖就好，要那麼多錢做什麼？」你感到很失落，覺得父母不通人情。",
        choices: [
          {
            text: "「我列出想買球鞋的具體規劃，並向父母提案：透過分擔家務、提高段考成績或自己存錢來換取部分補助。」",
            proactive: true,
            spiritFeedback: "不抱怨匱乏，而是主動尋求「價值交換」與「解決方案」，展現成熟風範！",
            energyChange: 2
          },
          {
            text: "（冷戰）「小氣鬼！你們根本不愛我，以後我考試也不會認真了，隨便你們！」",
            proactive: false,
            spiritFeedback: "以自我傷害（放棄成績）來懲罰父母，是最消極且愚蠢的 Reactive 行為。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "手機使用時間",
    category: "家庭篇 ‧ 第三關",
    boss: "成癮幻象",
    bgImage: "assets/images/game_90.jpg",
    description: "因為手機遊戲玩太久，父母直接扣押了你的手機，這場冷戰你該如何結束？",
    stages: [
      {
        text: "你的手機被沒收了。父母說你最近太沉迷，成績有下滑跡象。你覺得手機是你的隱私，被沒收讓你十分憤怒，甚至考慮離家出走。",
        choices: [
          {
            text: "「跟父母坐下來，主動提出一份『手機限時自我管理合約』，並以接下來一週的作息來重建信任。」",
            proactive: true,
            spiritFeedback: "用可信的自我管理機制去換取自由度。主動出擊，重獲手機！",
            energyChange: 2
          },
          {
            text: "「既然不給我手機，那我也不去上學、不吃飯了，看誰耗得過誰！」",
            proactive: false,
            spiritFeedback: "以消極抵抗來抗議，只會讓父母更確信你缺乏自控力，手機歸還遙遙無期。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "兄弟姊妹的偏心",
    category: "家庭篇 ‧ 第四關",
    boss: "比較心魔",
    bgImage: "assets/images/game_90.jpg",
    description: "面對父母對弟弟/妹妹明顯的偏心待遇，你心中那份不平衡該如何釋懷與行動？",
    stages: [
      {
        text: "同樣是打破杯子，你被罵得狗血淋頭，妹妹卻只得到一句安慰。你覺得父母極度偏心，家庭溫暖根本不存在。",
        choices: [
          {
            text: "「雖然父母的態度我無法控制，但我能控制的是我與妹妹的關係，以及我如何照顧自己。我找時機向父母平和表達我的感受。」",
            proactive: true,
            spiritFeedback: "把注意力放回自己能掌控的關係與溝通上，跳出『受害者』角色！",
            energyChange: 2
          },
          {
            text: "「反正我就是撿來的。我討厭妹妹，也要跟父母劃清界線！」",
            proactive: false,
            spiritFeedback: "讓嫉妒與仇恨吞噬你的內心，從此在家庭中扮演怨婦，能量大量流失！",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "已讀不回的焦慮",
    category: "深夜與同儕 ‧ 第一關",
    boss: "社群幻影",
    bgImage: "assets/images/game_80.jpg",
    description: "你私訊了喜歡的人或摯友，對方已讀不回超過了24小時，你的內心開始演起小劇場...",
    stages: [
      {
        text: "晚上十一點，你不斷刷新聊天畫面。你發的關鍵訊息被已讀了整整一天。你的心跳加速，開始懷疑對方是不是討厭你，甚至想發長文質問對方。",
        choices: [
          {
            text: "「對方可能有他的事情要忙。我放下手機，去讀書或睡覺，明天正常面對即可。」",
            proactive: true,
            spiritFeedback: "不受外部不可控因素（別人的回覆速度）的干擾。專注於當下的生活，穩健通關！",
            energyChange: 2
          },
          {
            text: "「你到底什麼意思？為什麼不回我？我們絕交吧！」（連發十條奪命連環訊息）",
            proactive: false,
            spiritFeedback: "被社群軟體奴役。情緒化的連環轟炸只會給對方壓力，將關係推入谷底。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "同儕的排擠風暴",
    category: "深夜與同儕 ‧ 第二關",
    boss: "孤立巨獸",
    bgImage: "assets/images/game_80.jpg",
    description: "你發現原本要好的死黨們建立了沒有你的小群組，甚至開始在背後對你指指點點。",
    stages: [
      {
        text: "走廊上，原本熱絡的朋友看到你走過來，突然停止了說笑，交換了詭異的眼神。你無意中看到他們手機裡有一個以你黑照為頭像的新群組。",
        choices: [
          {
            text: "「尋求其他健康的社交圈。主動私下找其中一位較信任的朋友澄清是否有誤會，若無則保持優雅距離。」",
            proactive: true,
            spiritFeedback: "主動積極的社交邊界設定。不去求施捨的友誼，活出自己的價值！",
            energyChange: 2
          },
          {
            text: "「他們竟然這樣對我！我天天上網發黑文詛咒他們，找機會在班上揭他們的短！」",
            proactive: false,
            spiritFeedback: "以眼還眼的消極報復。這只會讓你跟他們落入同等的泥沼，耗盡自己珍貴的心智力。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "面對未來的焦慮",
    category: "深夜與同儕 ‧ 第三關",
    boss: "焦慮古神",
    bgImage: "assets/images/game_90.jpg",
    description: "面臨升學或生涯選擇，大家都很有方向，你卻依然迷茫，深夜失眠的你該怎麼辦？",
    stages: [
      {
        text: "夜深了。看著同學在 IG 上曬出理想學校的錄取通知或完美的規劃，再看看自己空白的前途，你感到無比焦慮，甚至覺得自己是一無是處的廢物。",
        choices: [
          {
            text: "「每個人的時鐘不同。我明天去找輔導老師做興趣測驗，並從最簡單的每天背十個單字做起。」",
            proactive: true,
            spiritFeedback: "將宏大的焦慮拆解為『當下可執行的小行動』。微小的主動勝過宏大的消極！",
            energyChange: 2
          },
          {
            text: "（刷短影音到清晨五點）「反正我考不上好學校，這輩子就當個爛泥吧，無所謂了。」",
            proactive: false,
            spiritFeedback: "用無意義的娛樂麻痺自己逃避現實，導致心智疲勞加劇，徹底被古神吞噬！",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "選擇的鏡像",
    category: "神器之間 ‧ 考驗",
    boss: "自我鏡像",
    bgImage: "assets/images/game_70.jpg",
    description: "你來到了一面巨大的古鏡前。鏡中倒映著你的心之陰暗面，向你發起終極拷問。",
    stages: [
      {
        text: "鏡中的自己邪魅地笑著：「你自以為很主動？難道你之前對父母發火、考試考爛抱怨題目超綱、生病怪天氣不好，這些都不是你的真心話？你本質上就是個消極的傀儡！」",
        choices: [
          {
            text: "「過去的消極不代表我的未來。我接受我曾有軟弱的時候，但我現在每一刻都有重新選擇的權力。」",
            proactive: true,
            spiritFeedback: "自我覺察（Self-Awareness）的覺醒！你接受了自己的不完美，並宣告了自由意志！",
            energyChange: 2
          },
          {
            text: "「你說得對……我根本改不掉。我的性格就是這樣，這就是我的宿命。」",
            proactive: false,
            spiritFeedback: "屈服於宿命論。把過去當作未來的藉口，鏡像對你露出了貪婪的微笑。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "狂風中的燈塔",
    category: "風暴將至 ‧ 考驗",
    boss: "風暴核心",
    bgImage: "assets/images/game_60.jpg",
    description: "深淵風暴來襲，周圍的人都在尖叫、抱怨與放棄。你是否能成為照亮他人的燈塔？",
    stages: [
      {
        text: "深淵裂開，四周的岩石墜落。無數被纏住的靈魂在哭喊：「都是神害的！都是世界不公！我們註定完蛋！」恐慌的情緒迅速蔓延，連你的劍都在顫抖。",
        choices: [
          {
            text: "「握緊劍柄，大聲呼喊：『與其詛咒黑暗，不如點亮心火！大家跟我一起尋求掩護，我們能決定自己的反應！』」",
            proactive: true,
            spiritFeedback: "這就是發揮影響力！你用自己的主動積極，感染並照亮了周圍的靈魂，能量爆發！",
            energyChange: 2
          },
          {
            text: "「完蛋了，大家都這麼說，看來真的死定了。我也一起哭吧。」",
            proactive: false,
            spiritFeedback: "被集體恐慌同化，放棄主動性，隨波逐流，落入深淵的無盡黑暗。",
            energyChange: -2
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "斬斷操偶線",
    category: "決戰古神 ‧ 終章",
    boss: "拖延之神「翳」",
    bgImage: "assets/images/game_95.jpg",
    description: "面對掌控全人類消極情緒的傀儡古神本尊，用你的心之利刃，給予致命的一擊！",
    stages: [
      {
        text: "巨大的「翳」俯視著你，身後是億萬條由怨恨、藉口、拖延化成的鋼索。牠發出震天咆哮：\n「凡人！你的掙扎毫無意義！世界由刺激主宰，你們的反應早已被物理、基因與環境決定！順從我，免受痛苦！」",
        choices: [
          {
            text: "「雙手握劍，飛身躍起：『我有獨立意志、自我覺察、良知與想像力！在刺激與回應之間，我——選擇現在！斬！』」",
            proactive: true,
            spiritFeedback: "終極斬擊！主動積極的璀璨光芒化為百米利刃，一擊斬斷古神本體與漫天絲線！",
            energyChange: 2
          },
          {
            text: "「看著漫天絲線，雙膝跪地：『世界確實太強大了，我的努力相較之下微不足道……』」",
            proactive: false,
            spiritFeedback: "在最終的關頭放棄了自主權，再次成為了命運的提線木偶，古神將你吞噬。",
            energyChange: -2
          }
        ]
      }
    ]
  }
];

// ──────────────── 2. Web Audio API 復古音效與科幻 Synthwave 電子合成引擎 ────────────────
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.5;
    this.sfxGain = null;
    
    // HTML5 Audio 用於背景音樂 MP3 串流 (Suno AI 或內建)
    this.audioEl = new Audio();
    this.audioEl.loop = true;
    this.audioEl.crossOrigin = "anonymous";
    this.trackType = 'builtin'; // 'builtin' | 'synth' | 'custom'
    this.currentTrackSrc = 'assets/audio/synthwave_montage.mp3';
    this.isAudioElPlaying = false;
    
    // Synthwave Sequencer 狀態
    this.isPlaying = false;
    this.tempo = 110; // BPM
    this.lookAhead = 0.1; // 100ms lookahead
    this.scheduleInterval = 40; // check every 40ms
    this.nextNoteTime = 0.0;
    this.step = 0; // 16th note step: 0 to 15
    this.timerId = null;
    this.delayNode = null;
    
    // 現代科幻和弦進程 (Am - F - C - G)
    this.chords = [
      { root: 55,  scale: [220, 261.63, 329.63, 392.00, 440, 523.25, 659.25, 783.99] }, // Am
      { root: 43.65, scale: [174.61, 220, 261.63, 349.23, 392.00, 440, 523.25, 698.46] }, // F
      { root: 65.41, scale: [261.63, 329.63, 392.00, 523.25, 587.33, 659.25, 783.99, 1046.5] }, // C
      { root: 49.00, scale: [196.00, 246.94, 293.66, 392.00, 440.00, 493.88, 587.33, 783.99] }  // G
    ];
    this.currentChordIdx = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    
    // 初始化全域音效 Gain 節點
    if (this.ctx && !this.sfxGain) {
      try {
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.sfxGain.connect(this.ctx.destination);
      } catch (e) {
        console.warn("SFX Gain node initialization failed", e);
      }
    }
    
    // 初始化全域科幻 Delay 迴路 (用於琶音與旋律，輸出接至 sfxGain)
    if (this.ctx && !this.delayNode) {
      try {
        this.delayNode = this.ctx.createDelay(1.0);
        this.delayNode.delayTime.value = 0.28; // 280ms Echo 延遲
        
        const delayGain = this.ctx.createGain();
        delayGain.gain.value = 0.35; // 35% 反饋
        
        this.delayNode.connect(delayGain);
        delayGain.connect(this.delayNode);
        this.delayNode.connect(this.sfxGain);
      } catch (e) {
        console.warn("Delay node initialization failed", e);
      }
    }

    if (this.audioEl) {
      this.audioEl.volume = this.volume;
    }
  }

  toggleMute() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      this.stopCurrentTrack();
    } else {
      this.init();
      this.playCurrentTrack();
    }
    return this.enabled;
  }

  // 設定全域音量
  setVolume(val) {
    this.volume = val;
    if (this.ctx && this.sfxGain) {
      this.sfxGain.gain.setValueAtTime(val, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.volume = this.enabled ? val : 0;
    }
  }

  // 播放當前設定的背景音樂
  playCurrentTrack() {
    this.init();
    if (!this.enabled) return;

    if (this.trackType === 'synth') {
      this.startSynthwave();
    } else {
      this.stopSynthwave();
      if (this.audioEl) {
        // 防止重複載入同一個 src
        const absoluteSrc = this.currentTrackSrc.startsWith('blob:') ? this.currentTrackSrc : (this.currentTrackSrc.startsWith('http') ? this.currentTrackSrc : window.location.origin + '/' + this.currentTrackSrc);
        if (this.audioEl.src !== absoluteSrc) {
          this.audioEl.src = this.currentTrackSrc;
        }
        this.audioEl.volume = this.volume;
        this.audioEl.play()
          .then(() => {
            this.isAudioElPlaying = true;
            updateWaveAnimation(true);
          })
          .catch(e => {
            console.warn("BGM playback failed/blocked:", e);
          });
      }
    }
  }

  // 停止播放背景音樂
  stopCurrentTrack() {
    if (this.trackType === 'synth') {
      this.stopSynthwave();
    } else {
      if (this.audioEl) {
        this.audioEl.pause();
        this.isAudioElPlaying = false;
        updateWaveAnimation(false);
      }
    }
  }

  // 更換背景音樂
  changeTrack(src) {
    this.stopCurrentTrack();
    if (src === 'synth') {
      this.trackType = 'synth';
    } else {
      this.trackType = 'builtin'; // 或是 'custom'
      this.currentTrackSrc = src;
    }
    this.playCurrentTrack();
  }

  // 啟動 Synthwave 樂團
  startSynthwave() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx) return;
    
    this.isPlaying = true;
    this.nextNoteTime = this.ctx.currentTime + 0.05;
    this.step = 0;
    this.currentChordIdx = 0;
    updateWaveAnimation(true);
    this.scheduler();
  }

  stopSynthwave() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    updateWaveAnimation(false);
  }

  scheduler() {
    if (!this.isPlaying) return;
    while (this.nextNoteTime < this.ctx.currentTime + this.lookAhead) {
      this.scheduleNote(this.step, this.nextNoteTime);
      this.advanceNote();
    }
    this.timerId = setTimeout(() => this.scheduler(), this.scheduleInterval);
  }

  advanceNote() {
    const secondsPerBeat = 60.0 / this.tempo;
    const secondsPer16th = secondsPerBeat / 4.0;
    
    this.nextNoteTime += secondsPer16th;
    this.step = (this.step + 1) % 16;
    
    if (this.step === 0) {
      // 每個小節切換和弦進程
      this.currentChordIdx = (this.currentChordIdx + 1) % this.chords.length;
    }
  }

  scheduleNote(step, time) {
    if (!this.enabled || !this.ctx) return;
    
    const chord = this.chords[this.currentChordIdx];
    
    // 1. 科幻八度 Synth Bass (八分音符律動，在偶數 step 播放)
    if (step % 2 === 0) {
      let freq = chord.root;
      if (step === 2 || step === 6 || step === 10 || step === 14) {
        freq = chord.root * 2;
      }
      this.playBass(freq, time);
    }
    
    // 2. 空間琶音主音 Lead (十六分音符，隨科幻旋律音階變化)
    const pattern = [0, 2, 4, 3, 5, 4, 6, 5, 7, 5, 6, 4, 5, 3, 4, 2];
    const scaleNoteIdx = pattern[step] % chord.scale.length;
    const leadFreq = chord.scale[scaleNoteIdx];
    this.playLead(leadFreq, time);
    
    // 3. 復古電子鼓組 (Drum Machine)
    if (step === 0 || step === 8) {
      this.playKick(time);
    }
    if (step === 4 || step === 12) {
      this.playSnare(time);
    }
    if (step % 4 === 2) {
      this.playHihat(time);
    }
  }

  // --- 樂器合成模組 ---

  // 1. Fat Synth Bass
  playBass(freq, time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, time);
    filter.frequency.exponentialRampToValueAtTime(120, time + 0.18);
    
    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);
    
    osc.start(time);
    osc.stop(time + 0.2);
  }

  // 2. Cosmic Lead
  playLead(freq, time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, time);
    filter.frequency.exponentialRampToValueAtTime(500, time + 0.08);
    
    gain.gain.setValueAtTime(0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    
    osc.connect(filter);
    filter.connect(gain);
    
    if (this.delayNode) {
      gain.connect(this.delayNode);
    }
    gain.connect(this.sfxGain || this.ctx.destination);
    
    osc.start(time);
    osc.stop(time + 0.12);
  }

  // 3. Retro Kick
  playKick(time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.09);
    
    gain.gain.setValueAtTime(0.24, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    
    osc.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);
    
    osc.start(time);
    osc.stop(time + 0.1);
  }

  // 4. White Noise Snare
  playSnare(time) {
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, time);
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);
    
    noise.start(time);
    noise.stop(time + 0.12);
    
    // Tom
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(70, time + 0.06);
    oscGain.gain.setValueAtTime(0.08, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
    
    osc.connect(oscGain);
    oscGain.connect(this.sfxGain || this.ctx.destination);
    osc.start(time);
    osc.stop(time + 0.06);
  }

  // 5. Highpass Hat
  playHihat(time) {
    const bufferSize = this.ctx.sampleRate * 0.03;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7000, time);
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);
    
    noise.start(time);
    noise.stop(time + 0.035);
  }

  // --- 一次性音效 (One-off Sound Effects) ---

  playClick() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);
    osc.start();
    osc.stop(now + 0.08);
  }

  playSwordChime() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [880, 1320, 1760, 2640];

    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.05);

      gain.gain.setValueAtTime(0.04, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.6);

      osc.connect(gain);
      gain.connect(this.sfxGain || this.ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.6);
    });
  }

  playSlash() {
    if (!this.enabled || !this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(3.0, this.ctx.currentTime);
    filter.frequency.setValueAtTime(3000, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);

    noise.start();
  }

  playRumble() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(30, now + 1.2);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, now);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.ctx.destination);

    osc.start();
    osc.stop(now + 1.2);
  }

  // 通關音樂
  playSuccess() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.12, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

      osc.connect(gain);
      gain.connect(this.sfxGain || this.ctx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.4);
    });
  }

  // 失敗音樂
  playFailure() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [493.88, 369.99, 311.13, 261.63];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);

      gain.gain.setValueAtTime(0.1, now + idx * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain || this.ctx.destination);
      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 0.5);
    });
  }
}

const audio = new AudioEngine();

// ──────────────── 3. 核心狀態管理與存檔 ────────────────
const GameState = {
  currentView: 'intro', // 'intro', 'map', 'stage'
  completedLevels: {},  // 格式： { levelId: stars }
  currentLevel: null,
  currentStageIndex: 0,
  currentEnergy: 4,

  init() {
    const saved = localStorage.getItem('seven_habits_quest_progress');
    if (saved) {
      try {
        this.completedLevels = JSON.parse(saved);
      } catch (e) {
        this.completedLevels = {};
      }
    }
  },

  save(levelId, stars) {
    if (!this.completedLevels[levelId] || stars > this.completedLevels[levelId]) {
      this.completedLevels[levelId] = stars;
      localStorage.setItem('seven_habits_quest_progress', JSON.stringify(this.completedLevels));
    }
  },

  isUnlocked(levelId) {
    if (levelId === 1) return true;
    const prevLevelId = levelId - 1;
    return this.completedLevels[prevLevelId] !== undefined;
  }
};

// ──────────────── 4. 過場動畫控制 ────────────────
const IntroController = {
  currentIndex: 0,
  timeline: [
    { image: 'intro_00.jpg', text: '第一層：拖延。心智被無形之絲纏繞，沉落深淵。', sound: 'ambient', duration: 4500 },
    { image: 'intro_05.jpg', text: '第一關：拖延之神「翳」之影，在黑暗中巍然聳立。', sound: 'rumble', duration: 4500 },
    { image: 'intro_10.jpg', text: '無數人偶跪倒在巨大鐘擺之下，高唱著：「都是別人害的...」', sound: 'rumble', duration: 5000 },
    { image: 'intro_15.jpg', text: '在此絕境，唯有內心的劍魂覺醒，方能斬斷束縛！', sound: 'swordChime', duration: 4500 },
    { image: 'intro_30.jpg', text: '「看清你的影響圈。你不是傀儡，你有重新選擇的權利！」', sound: 'swordChime', duration: 4500 },
    { image: 'intro_40.jpg', text: '「我選擇—— 現在！斬！」', sound: 'slash', duration: 3500 },
    { image: 'intro_50.jpg', text: '心淵七層已然展開。踏入深淵，做出屬於你的選擇吧。', sound: 'ambient', duration: 5000 }
  ],
  timer: null,

  start() {
    this.currentIndex = 0;
    this.showSlide();
    audio.playCurrentTrack();
  },

  showSlide() {
    if (this.currentIndex >= this.timeline.length) {
      this.showTitleScreen();
      return;
    }

    const slideData = this.timeline[this.currentIndex];
    const container = document.getElementById('intro-slides');
    
    // 清空並生成投影片
    container.innerHTML = `
      <div class="intro-slide active" style="background-image: url('assets/images/${slideData.image}');"></div>
    `;

    // 設定字幕
    const subtitle = document.querySelector('#intro-subtitles .subtitle-text');
    subtitle.innerHTML = '';
    
    // 觸發音效
    if (slideData.sound === 'rumble') {
      audio.playRumble();
      document.querySelector('.intro-container').classList.add('shake');
      setTimeout(() => document.querySelector('.intro-container').classList.remove('shake'), 1000);
    } else if (slideData.sound === 'swordChime') {
      audio.playSwordChime();
    } else if (slideData.sound === 'slash') {
      audio.playSlash();
      const flash = document.getElementById('flash-overlay');
      flash.classList.add('flash-active');
      setTimeout(() => flash.classList.remove('flash-active'), 500);
      document.querySelector('.intro-container').classList.add('shake');
      setTimeout(() => document.querySelector('.intro-container').classList.remove('shake'), 1000);
    }

    // 打字機效果渲染字幕
    let charIdx = 0;
    const typeWriter = () => {
      if (charIdx < slideData.text.length) {
        subtitle.innerHTML += slideData.text.charAt(charIdx);
        charIdx++;
        setTimeout(typeWriter, 40);
      }
    };
    typeWriter();

    // 排程下一張
    this.timer = setTimeout(() => {
      this.currentIndex++;
      this.showSlide();
    }, slideData.duration);
  },

  showTitleScreen() {
    const titleScreen = document.getElementById('intro-title-screen');
    titleScreen.classList.remove('hidden');
    audio.playSwordChime();
    
    // 點擊任意處進入地圖
    titleScreen.onclick = () => {
      this.finish();
    };

    // 如果玩家5秒內沒點，自動進入
    this.timer = setTimeout(() => {
      this.finish();
    }, 5000);
  },

  finish() {
    clearTimeout(this.timer);
    document.getElementById('intro-title-screen').classList.add('hidden');
    switchView('map');
  }
};

// ──────────────── 5. 地圖選擇控制器 ────────────────
const MapController = {
  render() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';

    // 取得最新通關狀態
    let nextLevelToComplete = 1;
    while (GameState.completedLevels[nextLevelToComplete] !== undefined && nextLevelToComplete < 15) {
      nextLevelToComplete++;
    }

    levelsData.forEach(lvl => {
      const cell = document.createElement('div');
      cell.classList.add('level-cell');
      
      const unlocked = GameState.isUnlocked(lvl.id);
      
      if (unlocked) {
        cell.classList.add('unlocked');
        // 如果是最新進度關卡，加上呼吸燈
        if (lvl.id === nextLevelToComplete) {
          cell.classList.add('active-progress');
        }

        // 星星渲染
        const starsCount = GameState.completedLevels[lvl.id] || 0;
        let starsHtml = '';
        for (let s = 1; s <= 3; s++) {
          if (s <= starsCount) {
            starsHtml += '<span class="cell-star">★</span>';
          } else {
            starsHtml += '<span class="cell-star empty">★</span>';
          }
        }
        
        // 關卡標題/號碼
        cell.innerHTML = `
          <span>${lvl.id === 15 ? '魔' : lvl.id}</span>
          <div class="cell-stars">${starsHtml}</div>
        `;

        // 點擊開啟關卡詳情
        cell.onclick = () => {
          audio.playClick();
          MapController.showLevelDetail(lvl);
        };
      } else {
        cell.classList.add('locked');
        cell.innerHTML = `<span>${lvl.id === 15 ? '魔' : lvl.id}</span>`;
      }

      grid.appendChild(cell);
    });
  },

  showLevelDetail(lvl) {
    const modal = document.getElementById('level-detail-modal');
    document.getElementById('modal-level-num').innerText = `${lvl.category}`;
    document.getElementById('modal-level-title').innerText = lvl.title;
    document.getElementById('modal-level-desc').innerText = lvl.description;
    document.getElementById('modal-level-boss').innerText = lvl.boss;
    
    modal.classList.remove('hidden');

    // 綁定按鈕
    document.getElementById('modal-start-btn').onclick = () => {
      audio.playClick();
      modal.classList.add('hidden');
      StageController.startLevel(lvl);
    };

    document.getElementById('modal-close-btn').onclick = () => {
      audio.playClick();
      modal.classList.add('hidden');
    };
  }
};

// ──────────────── 6. 關卡挑戰控制器 ────────────────
const StageController = {
  level: null,
  stageIdx: 0,
  energy: 4,

  startLevel(lvl) {
    this.level = lvl;
    this.stageIdx = 0;
    this.energy = 4;
    
    // UI 重設
    document.getElementById('stage-level-name').innerText = lvl.title;
    document.getElementById('stage-scene-bg').style.backgroundImage = `url('${lvl.bgImage}')`;
    
    this.updateHUD();
    this.renderStage();
    switchView('stage');
    
    // 如果是第15關 Boss，震動地鳴
    if (lvl.id === 15) {
      audio.playRumble();
      document.getElementById('stage-view').classList.add('shake');
      setTimeout(() => document.getElementById('stage-view').classList.remove('shake'), 1000);
    }
  },

  updateHUD() {
    const total = this.level.stages.length;
    const current = this.stageIdx + 1;
    document.getElementById('stage-progress-text').innerText = `${current} / ${total}`;
    
    const percent = (current / total) * 100;
    document.getElementById('stage-progress-bar').style.width = `${percent}%`;

    // 能量 HUD
    document.getElementById('energy-val').innerText = this.energy;
  },

  renderStage() {
    const stageData = this.level.stages[this.stageIdx];
    
    // 渲染對白
    const dialogContent = document.getElementById('dialog-content');
    dialogContent.innerHTML = '';
    
    // 漸顯字體
    let charIdx = 0;
    const typeWriter = () => {
      if (charIdx < stageData.text.length) {
        dialogContent.innerHTML += stageData.text.charAt(charIdx);
        charIdx++;
        // 為了閱讀體驗，打字速度適中
        setTimeout(typeWriter, 15);
      }
    };
    typeWriter();

    // 渲染選項
    const container = document.getElementById('choice-container');
    container.innerHTML = '';

    stageData.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.classList.add('choice-btn');
      btn.innerText = choice.text;
      
      btn.onclick = () => {
        audio.playClick();
        this.makeChoice(choice);
      };
      
      container.appendChild(btn);
    });
  },

  makeChoice(choice) {
    // 扣減能量
    this.energy = Math.max(0, Math.min(4, this.energy + choice.energyChange));
    document.getElementById('energy-val').innerText = this.energy;

    // 震動特效
    if (choice.energyChange < 0) {
      audio.playRumble();
      document.getElementById('stage-view').classList.add('shake');
      setTimeout(() => document.getElementById('stage-view').classList.remove('shake'), 500);
    } else {
      audio.playSwordChime();
    }

    // 顯示反饋
    const feedback = document.getElementById('spirit-feedback');
    const fText = document.getElementById('feedback-text');
    const fEnergy = document.getElementById('feedback-energy-change');

    fText.innerText = choice.spiritFeedback;
    
    if (choice.energyChange >= 0) {
      fEnergy.className = 'gain';
      fEnergy.innerText = `⚡ +${choice.energyChange}`;
    } else {
      fEnergy.className = 'drain';
      fEnergy.innerText = `⚡ ${choice.energyChange}`;
    }

    feedback.classList.remove('hidden');

    // 綁定繼續按鈕
    document.getElementById('feedback-next-btn').onclick = () => {
      audio.playClick();
      feedback.classList.add('hidden');
      this.nextStage();
    };
  },

  nextStage() {
    // 檢查生命值是否為 0
    if (this.energy <= 0) {
      this.settle(false);
      return;
    }

    this.stageIdx++;
    if (this.stageIdx < this.level.stages.length) {
      this.updateHUD();
      this.renderStage();
    } else {
      this.settle(true);
    }
  },

  settle(success) {
    const modal = document.getElementById('result-modal');
    const emoji = document.getElementById('result-emoji');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');
    const starsContainer = document.getElementById('result-stars');
    const energyVal = document.getElementById('result-energy-val');
    
    energyVal.innerText = this.energy;
    starsContainer.innerHTML = '';

    if (success) {
      audio.playSuccess();
      emoji.innerText = '🎉';
      title.innerText = '挑戰成功';
      title.className = 'status-win';
      desc.innerText = `在「${this.level.title}」中，你頂住了消極的拉扯，做出了主動積極的抉擇，成功擊退古神之力！`;
      
      // 計算星星數
      let stars = 1;
      if (this.energy === 4) stars = 3;
      else if (this.energy >= 2) stars = 2;

      // 保存存檔
      GameState.save(this.level.id, stars);

      // 星星動畫
      for (let s = 1; s <= 3; s++) {
        const star = document.createElement('span');
        star.classList.add('result-star');
        star.innerText = '★';
        if (s <= stars) {
          setTimeout(() => star.classList.add('pop'), s * 200);
        } else {
          star.classList.add('empty');
          setTimeout(() => star.classList.add('pop'), s * 200);
        }
        starsContainer.appendChild(star);
      }

      // 下一關按鈕
      const nextBtn = document.getElementById('result-next-btn');
      if (this.level.id < 15) {
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => {
          audio.playClick();
          modal.classList.add('hidden');
          const nextLvl = levelsData.find(l => l.id === this.level.id + 1);
          this.startLevel(nextLvl);
        };
      } else {
        nextBtn.classList.add('hidden');
      }

    } else {
      audio.playFailure();
      emoji.innerText = '💀';
      title.innerText = '意志被吞噬';
      title.className = 'status-lose';
      desc.innerText = `你在「${this.level.title}」中落入消極抱怨的陷阱，提線繩索緊扣，你失去了意志的主導權！`;
      
      // 0 顆星
      for (let s = 1; s <= 3; s++) {
        const star = document.createElement('span');
        star.classList.add('result-star', 'empty');
        star.innerText = '★';
        setTimeout(() => star.classList.add('pop'), s * 150);
        starsContainer.appendChild(star);
      }

      document.getElementById('result-next-btn').classList.add('hidden');
    }

    modal.classList.remove('hidden');

    // 綁定重試與地圖按鈕
    document.getElementById('result-retry-btn').onclick = () => {
      audio.playClick();
      modal.classList.add('hidden');
      this.startLevel(this.level);
    };

    document.getElementById('result-map-btn').onclick = () => {
      audio.playClick();
      modal.classList.add('hidden');
      switchView('map');
    };
  }
};

// ──────────────── 7. 音樂與音效 UI 控制與互動 ────────────────

// 更新音波動畫狀態
function updateWaveAnimation(isPlaying) {
  const container = document.querySelector('.music-wave-container');
  if (container) {
    if (isPlaying && audio.enabled) {
      container.classList.add('playing');
    } else {
      container.classList.remove('playing');
    }
  }
}

// 切換自訂音樂輸入區域的顯示狀態
function toggleCustomMusicSections(val) {
  const uploadSection = document.getElementById('music-upload-section');
  const urlSection = document.getElementById('music-url-section');
  if (val === 'custom') {
    uploadSection.classList.remove('hidden');
    urlSection.classList.remove('hidden');
  } else {
    uploadSection.classList.add('hidden');
    urlSection.classList.add('hidden');
  }
}

// 綁定浮動音樂按鈕事件
document.getElementById('floating-music-btn').onclick = () => {
  audio.playClick();
  const modal = document.getElementById('music-settings-modal');
  modal.classList.remove('hidden');
  
  // 同步面板控制元件狀態
  document.getElementById('music-volume-slider').value = audio.volume;
  document.getElementById('music-track-select').value = audio.trackType === 'synth' ? 'synth' : audio.currentTrackSrc;
  
  const isPlayingNow = audio.trackType === 'synth' ? audio.isPlaying : audio.isAudioElPlaying;
  document.getElementById('music-play-pause-btn').innerText = isPlayingNow ? '暫停播放' : '開始播放';
  
  toggleCustomMusicSections(document.getElementById('music-track-select').value);
};

// 關閉音樂面板按鈕
document.getElementById('music-modal-close').onclick = () => {
  audio.playClick();
  document.getElementById('music-settings-modal').classList.add('hidden');
};

// 主音量拉桿調整
document.getElementById('music-volume-slider').oninput = (e) => {
  const val = parseFloat(e.target.value);
  audio.setVolume(val);
};

// 切換背景音軌選單
document.getElementById('music-track-select').onchange = (e) => {
  audio.playClick();
  const val = e.target.value;
  toggleCustomMusicSections(val);
  
  if (val !== 'custom') {
    audio.changeTrack(val);
  }
};

// 本地上傳自訂 MP3
document.getElementById('music-file-input').onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById('music-file-name').innerText = file.name;
    const fileUrl = URL.createObjectURL(file);
    audio.changeTrack(fileUrl);
    
    // 更新選單項為 custom
    document.getElementById('music-track-select').value = 'custom';
  }
};

// 貼上自訂音樂網址套用
document.getElementById('music-url-apply').onclick = () => {
  audio.playClick();
  const url = document.getElementById('music-url-input').value.trim();
  if (url) {
    audio.changeTrack(url);
    document.getElementById('music-track-select').value = 'custom';
  } else {
    alert("請輸入有效的音樂網址！");
  }
};

// 播放/暫停按鈕
document.getElementById('music-play-pause-btn').onclick = () => {
  audio.playClick();
  const isPlayingNow = audio.trackType === 'synth' ? audio.isPlaying : audio.isAudioElPlaying;
  if (isPlayingNow) {
    audio.stopCurrentTrack();
    document.getElementById('music-play-pause-btn').innerText = '開始播放';
  } else {
    audio.playCurrentTrack();
    document.getElementById('music-play-pause-btn').innerText = '暫停播放';
  }
};


// ──────────────── 8. 畫面切換與初始化 ────────────────
function switchView(viewId) {
  // 停止所有舊視窗的 active 狀態
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });

  // 啟動新視窗
  const activeView = document.getElementById(`${viewId}-view`);
  if (activeView) {
    activeView.classList.add('active');
  }

  // 特殊視窗切換回調
  if (viewId === 'map') {
    MapController.render();
  }

  // 控制浮動音樂按鈕的顯示（在開場動畫時隱藏，之後顯示）
  const floatingMusicBtn = document.getElementById('floating-music-btn');
  if (floatingMusicBtn) {
    if (viewId === 'intro') {
      floatingMusicBtn.classList.add('hidden');
    } else {
      floatingMusicBtn.classList.remove('hidden');
    }
  }
}

// 綁定過場動畫的開關與跳過按鈕
document.getElementById('mute-btn').onclick = () => {
  const enabled = audio.toggleMute();
  document.getElementById('mute-btn').innerText = enabled ? '🔊 關聲音' : '🔇 開聲音';
  
  // 同步控制面板音量拉桿與音波動畫
  document.getElementById('music-volume-slider').value = enabled ? audio.volume : 0;
  updateWaveAnimation(enabled && (audio.trackType === 'synth' ? audio.isPlaying : audio.isAudioElPlaying));
};

document.getElementById('skip-btn').onclick = () => {
  audio.playClick();
  IntroController.finish();
};

// 進入程式初始化
window.onload = () => {
  GameState.init();
  IntroController.start();
};
