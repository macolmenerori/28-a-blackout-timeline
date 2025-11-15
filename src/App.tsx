import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <div className="App">
        <Header />
        <Intro />
      </div>
    </AppProviders>
  );
}
