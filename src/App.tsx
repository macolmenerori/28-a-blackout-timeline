import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { MainTimeline } from './components/Timeline/MainTimeline';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <div className="App">
        <Header />
        <Intro />
        <MainTimeline />
      </div>
    </AppProviders>
  );
}
