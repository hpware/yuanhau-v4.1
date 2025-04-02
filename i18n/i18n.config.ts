import recommendations from "~/server/api/db/recommendations";

// Mini word list.
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh-tw",
  messages: {
    "zh-tw": {
      yhname: "吳元皓",
      loading: "載入中",
      title: {
        about: "關於我",
        projects: "專案作品",
        contact: "聯絡資訊",
        blog: "Blog",
      },
      nav: {
        home: "首頁",
        about: "關於",
        projects: "專案",
        contact: "聯繫",
        blog: "部落格",
        learnmore: "更多資訊",
      },
      lang: {
        switchTo: "切換語言至",
        english: "英文",
        chinese: "中文",
        current: "目前語言",
        select: "選擇語言",
      },
      login: {
        notloggedin: "尚未登入",
      },
      core: {
        contentnotavaible: "該項目無法使用",
        announce: {
          title: "系統訊息",
        },
        chatbot: {
          title: "問 AI",
          placeholder: "誰是吳元皓？",
        },
      },
      home: {
        title: "首頁",
        introduction:
          " 我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。 ",
        learnmore: "更多資訊",
        codeknowledge: "技能熟練度",
      },
      blog: {
        description: "我的部落格",
      },
      photos: {
        title: "相簿",
        description: "這裡全部都是我拍的照片!",
      },
      words: {
        post: "貼文",
      },
      threads: {
        description: "以下為我在 Threads 上放的文",
      },
      projects: {
        useai: "這個程式有使用AI寫作",
        code: "程式碼",
        webpage: "網頁",
        description: "這裡包含著我在之前做過的東西",
      },
      dcstatus: {
        online: "線上",
        idle: "待線中",
        dnd: "勿擾",
        offline: "不在線上",
      },
      school: {
        index: {
          title: "學校專案",
          description: "這裡是用來放我在學校做的專案、PPT、程式"
        }
      },
    },
    en: {
      yhname: "Yuan-Hau Wu",
      loading: "Loading",
      title: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
        blog: "Blog",
      },
      login: {
        notloggedin: "Not Logged in",
      },
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        blog: "Blog",
        learnmore: "Learn more about me",
      },
      core: {
        contentnotavaible: "Item unavaible",
        announce: {
          title: "System Message",
        },
        chatbot: {
          title: "Ask AI",
          placeholder: "Who is Howard?",
        },
      },
      home: {
        title: "Home",
        introduction:
          "I'm currently a High school student in Taiwan, currently working on Typescript and Javascript projects, I'm also super intrested in server stuff like Linux.",
        learnmore: "Scroll down",
        codeknowledge: "My code skills",
      },
      blog: {
        description: "My blog posts.",
      },
      photos: {
        title: "Images",
        description: "These pictures are all captured by @yhw_tw",
      },
      words: {
        post: "posts",
      },
      threads: {
        description: "Below is all my posts from Threads",
      },
      projects: {
        useai: "AI is envolved in some way.",
        code: "Code",
        webpage: "Webpage",
        description: "This page includes most what I have done before.",
      },
      dcstatus: {
        online: "Online",
        idle: "Idle",
        dnd: "Do not disturb",
        offline: "Offline",
      },
      school: {
        index: {
          title: "School Projects",
          description: "This is where I store my school projects, PPTs, and code."
        }
      },
    },
  },
}));
