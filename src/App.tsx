import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './pages/HomePage';

import './styles/global.css';
import './styles/theme.css';

function App() {

  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
}

export default App;
