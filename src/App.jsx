import Header from './components/Header';
import Hero from './components/Hero';
import PlatformTabs from './components/PlatformTabs';
import Stats from './components/Stats';
import Architects from './components/Architects';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <PlatformTabs />
      <Stats />
      <Architects />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App