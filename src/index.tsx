import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './context/theme.context'

import './styles/globals.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
