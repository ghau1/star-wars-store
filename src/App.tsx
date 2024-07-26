import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { StarshipsList } from './components/StarshipsList';
import { PageLayout } from './components/PageLayout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <StarshipsList />
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
