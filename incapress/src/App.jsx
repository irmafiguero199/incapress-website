import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MissionVision from './pages/MissionVision.jsx'
import Programs from './pages/Programs.jsx'
import Impact from './pages/Impact.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Gallery from './pages/Gallery.jsx'
import News from './pages/News.jsx'
import RegistrationInformation from './pages/RegistrationInformation.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="programs" element={<Programs />} />
        <Route path="impact" element={<Impact />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="registration-information" element={<RegistrationInformation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
