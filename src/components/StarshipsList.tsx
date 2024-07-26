import { useState } from 'react';
import { useStarships } from '../api/hooks';
import { Grid, Column, Pagination } from '@carbon/react';

type Product = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
};

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.model}</p>
      <p>{product.manufacturer}</p>
      <span>{product.cost_in_credits}</span>
    </div>
  );
}

export const StarshipsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useStarships(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="starships-list">
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
          onChange={({ page }) => {
            setPage(page);
          }}
        />
      </div>
    </>
  );
};
