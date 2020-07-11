import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import {Provider} from 'react-redux'
import store from './redux/store'

import theme from './theme/materialUiTheme'
import StyledApp from './theme/globalStyles.style'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <StyledApp>
        <Routes/>
      </StyledApp>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

