import { useQuery } from '@tanstack/react-query';
import { fetchStarships } from './requests';
import { StarshipsResponse } from './types';

export const useStarships = (page: number) => {
  return useQuery<StarshipsResponse, Error>({
    queryKey: ['starships', page],
    queryFn: () => fetchStarships(page)
  });
};
