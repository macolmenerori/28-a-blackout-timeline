import { Header } from './components/Header/Header';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <div className="App">
        <Header />
      </div>
    </AppProviders>
  );
}
