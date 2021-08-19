import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  console.log('cart', cart);
  return (
    <main>
      <div>
        {cart?.products?.map(
          (current) => (
            <CartItem
              productId={current?.product}
              amount={current?.amount}
              key={`${current?.product}cart`}
            />
          ),
        )}
      </div>
      <button type="button">buy</button>
      <button type="button">cancel</button>
    </main>
  );
}
