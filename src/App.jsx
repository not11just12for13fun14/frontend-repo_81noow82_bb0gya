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
    <div className="min-h-screen bg-slate-950 text-white">
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
  )
}

export default App