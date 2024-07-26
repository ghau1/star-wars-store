import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useStarships } from './hooks';
import { QueryClient } from '@tanstack/react-query';

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('should fetch starships', async () => {
  const { result } = renderHook(() => useStarships(1), {
    wrapper: createWrapper(),
  });

  await waitFor(() =>
    expect(result.current).toMatchObject({ isSuccess: true })
  );

  expect(result.current.data?.results[0].name).toBe('Millennium Falcon');
});
