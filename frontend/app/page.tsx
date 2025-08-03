import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
}