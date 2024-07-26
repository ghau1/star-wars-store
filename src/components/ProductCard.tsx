import { Button, NumberInput, ToastNotification } from '@carbon/react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
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
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleBuy = () => {
    toast(
      <ToastNotification
        kind="success"
        title="Purchase Successful"
        subtitle={`You bought ${quantityRef.current?.value} of ${product.name}`}
      />,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  };

  return (
    <div className={styles['product-card']}>
      <h1>{product.name}</h1>
      <p>{product.model}</p>
      <p>{product.manufacturer}</p>
      <span>{product.cost_in_credits}</span>
      <div className="product-actions">
        <NumberInput
          id={`quantity-${product.name}`}
          min={1}
          value={1}
          ref={quantityRef}
          label="Quantity"
          hideLabel
        />
        <Button onClick={handleBuy}>Buy</Button>
      </div>
    </div>
  );
}
