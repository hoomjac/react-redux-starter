import * as serviceWorker from './serviceWorker'
import 'core-js/fn/object/values'
import 'core-js/fn/object/entries'
import 'core-js/es7/symbol'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import history from '@history'
import { Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { ActivityIndicator } from 'antd-mobile'
import { composeWithDevTools } from 'redux-devtools-extension'
import router from '~common/routers'
import { ThemeProvider, injectGlobal } from 'styled-components'
import actions from './actions'
import { Toast } from 'antd-mobile'

// 样式主题
const theme = {
  red: '#FF0000',
  blue: 'rgba(53, 98, 176, 1.000)',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.99)'
}

// 全局样式
injectGlobal`
  html {
     -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    font-size: 10px;
    -webkit-user-select: none;
    height: 100%;

  }

  *, *:beforeAll, *:after {
    box-sizing: inherit;
     -webkit-overflow-scrolling: touch;
  }
  body {
     -webkit-overflow-scrolling: touch;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    height: 100%;
    .am-card-footer-content {
      white-space: nowrap !important;
    }

    .am-tabs-default-bar-tab {
      white-space: nowrap !important;
      display: flex;
      font-size: 1.3rem;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  #root {
     -webkit-overflow-scrolling: touch;
    height: 100%;
  }

  div {
     -webkit-overflow-scrolling: touch;
  }
`

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(reduxThunk))
    : applyMiddleware(reduxThunk)
)
const initView = () => {
  const routes = []
  for (const [key, value] of Object.entries(router)) {
    const component = Loadable({
      loader: value.component,
      loading: () => {
        return <ActivityIndicator toast text="加载中..." />
      }
    })
    routes.push(
      <Route key={key} exact={value.exact} path={key} component={component} />
    )
  }

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <>{routes}</>
        </Router>
      </ThemeProvider>
    </Provider>,
    document.querySelector('#root')
  )
}

initView()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
