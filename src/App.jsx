import { Route, Routes, HashRouter} from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header.jsx'
import Page from './components/Page.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const {i18n} = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page/>} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
