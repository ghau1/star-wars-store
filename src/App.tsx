import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { StarshipsList } from './components/StarshipsList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StarshipsList />
    </QueryClientProvider>
  );
}

export default App;
