import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StarshipsList } from './StarshipsList';

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

test('renders starships and handles pagination', async () => {
  renderWithClient(<StarshipsList />);
  
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  const starshipName = await screen.findByText(/Millennium Falcon/i);
  expect(starshipName).toBeInTheDocument();
});
