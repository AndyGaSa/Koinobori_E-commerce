import React from 'react';

export default function Cart() {
  return (
    <main className="main_userCart">
      <section className="cartItems">
        <h3>Tus productos seleccionados</h3>
        <ul className="cartItems_list">
          <div className="list_cartItems" key="item_name">
            <li className="cartItem_item">
              <h3>La casa de los espíritus</h3>
              <h4>Isabel Allende</h4>
              <button type="button" className="item_button">-</button>
              <div className="item_amount">3</div>
              <button type="button" className="item_button">+</button>
            </li>
          </div>
        </ul>
      </section>
      <section className="totalPrice">
        <h3>Precio Total:</h3>
        <div className="totalPrice_total">20€</div>
      </section>
      <section className="buttons">
        <button type="button" className="buttons_pay">Pagar</button>
        <button type="button" className="buttons_removeItem">Quitar todos</button>
      </section>
    </main>
  );
}
