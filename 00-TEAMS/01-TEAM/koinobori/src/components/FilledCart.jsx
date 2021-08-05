import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FilledCart.scss';

export default function FilledCart() {
  const [LocalStorage, setLocalStorage] = useState([]);

  useEffect(() => {
    setLocalStorage(JSON.parse(localStorage.getItem('cart')));
  }, []);

  function deleteArticle(name) {
    setLocalStorage(LocalStorage.filter((item) => item.name !== name));
    localStorage.setItem('cart', JSON.stringify(LocalStorage));
  }

  return (
    <main className="main">
      <ul className="items__container">
        {LocalStorage.map((item) => (
          <li className="item__container">
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
                placeholder={item.quantity}
                min="1"
                max="100"
              />
            </div>
            <div className="delete__button">
              <button onClick={() => deleteArticle(item.name)} className="item__delete" type="button">X</button>
              <div className="item__empty" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
