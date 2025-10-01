import ThemeToggle from './components/ThemeToggle'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExtracurricularsSection from './components/ExtracurricularsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div id="colorlib-page">
        <AboutSection />
        <SkillsSection />
        <ExtracurricularsSection />
      </div>
      <Footer />
    </>
  )
}
