import { useState } from 'react';
import { useStarships } from '../api/hooks';

export const StarshipsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useStarships(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <ul>
        {data?.results.map(starship => (
          <li key={starship.name}>
            {starship.name} - {starship.model}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(old => old + 1)} disabled={!data?.next}>
          Next Page
        </button>
      </div>
    </div>
  );
};