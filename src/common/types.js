const types = {
  global: {
    SHOW_GLOBAL_LOADING: Symbol()
  },
  training: {
    FETCH_TRAINING_LIST: Symbol(),
    FETCH_TRAINING_DETAIL: Symbol(),
    FETCH_TRAINING_ATTACHMENT: Symbol()
  },
  announcements: {
    FETCH_ANNOUNCEMENT_LIST: Symbol(),
    FETCH_ANNOUNCEMENT_DETAIL: Symbol(),
    FETCH_BROWSER_STATUS: Symbol()
  },
  news: {
    FETCH_NEWS_LIST: Symbol(),
    FETCH_NEWS_DETAIL: Symbol()
  },
  database: {
    FETCH_DB_CATEGORY: Symbol(),
    FETCH_DB_FILES: Symbol(),
    FETCH_NEWS_DETAIL: Symbol()
  },
  duty: {
    FETCH_DUTY_LIST: Symbol()
  },
  scheduling: {
    FETCH_SCHEDULING_LIST: Symbol()
  },
  wage: {
    FETCH_WAGE: Symbol()
  }
}
export default types
