export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh-tw', 
    messages: {
      'zh-tw': {
        yhname: '吳元皓',
        loading: "載入中",
        title: {
          home: "首頁",
          about: "關於我",
          projects: "專案作品",
          contact: "聯絡資訊",
          blog: "部落格",
        },
        home :{
          learnmore: '更多資訊',
        },
        buttons: {
          submit: "提交",
          cancel: "取消",
          send: "發送"
        },
        navigation: {
          next: "下一頁",
          previous: "上一頁",
          back: "返回"
        },
        content: {
          welcome: "歡迎來到我的網站",
          introduction: " 我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。 ",
          readMore: "閱讀更多"
        },
        lang: {
          switchTo: "切換語言至",
          english: "英文",
          chinese: "中文",
          current: "目前語言",
          select: "選擇語言"
        }
      },
      en: {
        yhname: 'Yuan-Hau Wu',
        loading: "Loading",
        title: {
          home: "Home",
          about: "About",
          projects: "Projects",
          contact: "Contact",
          blog: "Blog",
        },
        home: {
          learnmore: "Scroll down",
        },
        buttons: {
          submit: "Submit",
          cancel: "Cancel",
          send: "Send"
        },
        navigation: {
          next: "Next",
          previous: "Previous",
          back: "Back"
        },
        content: {
          welcome: "Welcome to my website",
          introduction: "I'm currently a High school student in Taiwan, currently working on Typescript and Javascript projects, I'm also super intrested in server stuff like Linux. ",
        },
        lang: {
          switchTo: "Switch to",
          english: "English",
          chinese: "Chinese",
          current: "Current language",
          select: "Select language"
        }
      }
    }
  }))
