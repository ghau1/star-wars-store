import axios from 'axios';
import { StarshipsResponse } from './types';

export const fetchStarships = async (
  page: number
): Promise<StarshipsResponse> => {
  const { data } = await axios.get(
    `https://swapi.dev/api/starships/?page=${page}`
  );
  return data;
};
