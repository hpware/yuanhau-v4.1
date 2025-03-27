export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh-tw', 
    messages: {
      'zh-tw': {
        yhname: '吳元皓',
        nav: {
          home: '首頁',
          about: '關於',
          projects: '專案',
          contact: '聯繫',
          blog: '部落格',
          learnmore: "更多資訊"
        },
        common: {
          loadMore: '載入更多',
          viewAll: '查看全部',
          back: '返回',
          next: '下一步',
          previous: '上一步',
          search: '搜尋',
          notFound: '找不到頁面'
        },
        buttons: {
          submit: '提交',
          cancel: '取消',
          save: '儲存',
          delete: '刪除',
          edit: '編輯'
        },
        time: {
          today: '今天',
          yesterday: '昨天',
          days: '{count} 天前',
          minutes: '{count} 分鐘前'
        },
        projects: {
          viewDetails: '查看詳情',
          skills: '使用技術',
          duration: '專案期間'
        }
      },
      en: {
        yhname: 'Yuan-Hau Wu',
        nav: {
          home: 'Home',
          about: 'About',
          projects: 'Projects',
          contact: 'Contact',
          blog: 'Blog',
          learnmore: "Learn more about me"
        },
        common: {
          loadMore: 'Load More',
          viewAll: 'View All',
          back: 'Back',
          next: 'Next',
          previous: 'Previous',
          search: 'Search',
          notFound: 'Page Not Found'
        },
        buttons: {
          submit: 'Submit',
          cancel: 'Cancel',
          save: 'Save',
          delete: 'Delete',
          edit: 'Edit'
        },
        time: {
          today: 'Today',
          yesterday: 'Yesterday',
          days: '{count} days ago',
          minutes: '{count} minutes ago'
        },
        projects: {
          viewDetails: 'View Details',
          skills: 'Skills Used',
          duration: 'Project Duration'
        }
      }
    }
  }))
