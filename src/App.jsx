import Header from './components/Header';
import Hero from './components/Hero';
import BadgesMarquee from './components/BadgesMarquee';
import ComplianceStrip from './components/ComplianceStrip';
import PlatformTabs from './components/PlatformTabs';
import AttackMatrix from './components/AttackMatrix';
import FeaturesGrid from './components/FeaturesGrid';
import CTAConsole from './components/CTAConsole';
import Stats from './components/Stats';
import Architects from './components/Architects';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white relative scanlines holo-grain">
      {/* subtle vignette to push focus center */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.6)_100%)] z-[1]" />
      <div className="relative z-[2]">
        <Header />
        <Hero />
        <BadgesMarquee />
        <ComplianceStrip />
        <PlatformTabs />
        <AttackMatrix />
        <FeaturesGrid />
        <CTAConsole />
        <Stats />
        <Architects />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App