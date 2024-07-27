import { Button, NumberInput, ToastNotification } from '@carbon/react';
import { useCallback, useRef } from 'react';
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

  const handleBuy = useCallback(() => {
    toast(
      <ToastNotification
        hideCloseButton
        kind="success"
        title="Added to Basket"
        subtitle={`${quantityRef.current?.value} of ${product.name}`}
        className={styles['toast-notification']}
      />,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  }, [product.name]);

  return (
    <div className={styles['product-card']}>
      <h1>{product.name}</h1>
      <p>Model: {product.model}</p>
      <p>Manufacturer: {product.manufacturer}</p>
      <p>Cost in credits: {product.cost_in_credits}</p>
      <div className={styles['product-actions']}>
        <NumberInput
          id={`quantity-${product.name}`}
          min={1}
          value={1}
          ref={quantityRef}
          label="Quantity"
          hideLabel
        />
        <Button kind="primary" onClick={handleBuy}>
          Buy
        </Button>
      </div>
    </div>
  );
}
