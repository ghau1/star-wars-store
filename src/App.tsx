import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { StarshipsList } from './components/StarshipsList';
import { PageLayout } from './components/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <StarshipsList />
      </PageLayout>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
