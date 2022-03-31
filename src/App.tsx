import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Information } from './pages'
import Layout from './layout/Layout'
import { useTheme } from './hooks/useTheme'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useEffect } from 'react'

const App = () => {
  const { theme, changeTheme } = useTheme()
  const [value, setValue] = useLocalStorage<'light' | 'dark'>('theme', theme)

  useEffect(() => {
    changeTheme && changeTheme(value || 'light')
  }, [])

  useEffect(() => {
    setValue(theme)
  }, [theme])

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="information" element={<Information />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
