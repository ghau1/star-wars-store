import { Button, NumberInput } from '@carbon/react';
import { useState } from 'react';
import styles from './ProductCard.module.scss';

type Product = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = event => {
    setQuantity(event.imaginaryTarget.value);
  };

  const handleBuy = () => {
    console.log(`Buying ${quantity} of ${product.name}`);
  };

  return (
    <div className={styles['product-card']}>
      <h1>{product.name}</h1>
      <p>{product.model}</p>
      <p>{product.manufacturer}</p>
      <span>{product.cost_in_credits}</span>
      <div className="product-actions">
        <NumberInput
          id={`quantity-${product.id}`}
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          label="Quantity"
          hideLabel
        />
        <Button onClick={handleBuy}>Buy</Button>
      </div>
    </div>
  );
}
