import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import OrganizationSchema from '../seo/OrganizationSchema.jsx'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <OrganizationSchema />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
