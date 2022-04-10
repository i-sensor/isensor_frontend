import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './context/theme.context'
import './i18nextConf'

import './styles/globals.scss'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <Router>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
