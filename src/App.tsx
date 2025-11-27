import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { SEOHead } from './components/SEO/SEOHead';
import { MainTimeline } from './components/Timeline/MainTimeline';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <SEOHead />
      <div className="App">
        <Header />
        <Intro />
        <MainTimeline />
        <Footer />
      </div>
    </AppProviders>
  );
}
