import { useState } from 'react';
import { useStarships } from '../api/hooks';
import { Grid, Column, Pagination } from '@carbon/react';
import { ProductCard } from './ProductCard';
import styles from './StarshipsList.module.scss';

export const StarshipsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useStarships(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className={styles['starships-list']}>
      <h1>Star Wars Starships</h1>

      <Grid fullWidth>
        {data?.results.map(starship => (
          <Column sm={4} md={4} lg={8} key={starship.name}>
            <ProductCard product={starship} />
          </Column>
        ))}
      </Grid>

      <Pagination
        totalItems={data?.count}
        backwardText="Previous page"
        forwardText="Next page"
        pageSize={10}
        pageSizes={[10]}
        itemsPerPageText="Items per page"
        page={page}
        onChange={({ page }) => {
          setPage(page);
        }}
      />
    </div>
  );
};
