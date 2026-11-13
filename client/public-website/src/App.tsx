import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ContentPage from './pages/ContentPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'
import PageScrollManager from './components/layout/PageScrollManager'
import SiteLayout from './components/layout/SiteLayout'
import { contentPages } from './data/pages'
import './styles/site.css'
import './styles/home.css'
import './styles/content.css'
import './styles/contact.css'
import './styles/about.css'

function App() {
  return (
    <SiteLayout>
      <PageScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news-events" element={<NewsPage />} />
        {Object.entries(contentPages).filter(([path]) => path !== 'about').map(([path, page]) => (
          <Route key={path} path={`/${path}`} element={<ContentPage page={page} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
