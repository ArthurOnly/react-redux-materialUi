import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import {Provider} from 'react-redux'
import store from './redux/store'

import theme from './theme/materialUiTheme'
import GlobalStyle from './theme/globalStyles.style'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes/>
      <GlobalStyle/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

