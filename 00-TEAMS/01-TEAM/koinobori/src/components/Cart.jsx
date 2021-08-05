import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import './Cart.scss';

export default function Cart() {
  const [LocalStorage, setLocalStorage] = useState([]);
  const updateView = [];
  useEffect(() => {
    setLocalStorage(JSON.parse(localStorage.getItem('cart')));
  }, [LocalStorage]);

  function deleteArticle(name, quantity) {
    updateView.push(true);
    if (quantity === 1) {
      const newLocalStorage = LocalStorage.filter((item) => item.name !== name);
      setLocalStorage(newLocalStorage);
      localStorage.setItem('cart', JSON.stringify(newLocalStorage));
    } else {
      const findIndex = LocalStorage.findIndex((item) => item.name === name);
      const newLocalStorage = LocalStorage;
      newLocalStorage[findIndex].quantity -= 1;
      setLocalStorage(newLocalStorage);
      localStorage.setItem('cart', JSON.stringify(newLocalStorage));
    }
  }

  return (
    LocalStorage === null || LocalStorage.length === 0
      ? <EmptyCart />
      : (
        <main className="main">
          <ul className="items__container">
            {LocalStorage.map((item) => (
              <li key={item.name} data-testid="cart-li" className="item__container">
                <Link to={`/details/${item.category}/${item.id}`}><img className="item__image" src={item.imageFront} alt={item.name} /></Link>
                <div className="nameprice__container">
                  <span className="item__name">{item.name}</span>
                  <span className="item__price">{item.price}</span>
                </div>
                <div className="quantityinput__container">
                  <span className="item__quantity">Quantity:</span>
                  <input
                    className="item__input"
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    min="1"
                    max="100"
                    readOnly
                  />
                </div>
                <div className="delete__button">
                  <button data-testid="cart-button" onClick={() => deleteArticle(item.name, item.quantity)} className="item__delete" type="button">X</button>
                  <div className="item__empty" />
                </div>
              </li>
            ))}
          </ul>
        </main>
      )
  );
}
