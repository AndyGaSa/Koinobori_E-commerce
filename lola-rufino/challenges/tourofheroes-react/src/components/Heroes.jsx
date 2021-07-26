import React from 'react';
import '../styles.css';
import './heroes.css';
import Header from './Header';
import Nav from './Nav';

export default function Heroes() {
  const url = '';
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  return (
    <>
      <Header />
      <Nav />
      <h2>My Heroes</h2>
      <div>
        <form>
          <span>Hero name:</span>
          <input />
        </form>
        <button className="add-button" type="submit">Add hero</button>
      </div>
      <ul className="heroes">
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[0].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[1].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[2].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[3].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[4].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[5].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[6].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[7].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[8].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
        <li>
          <a href={url}>
            <span className="badge">1</span>
            {heroes[9].name}
          </a>
          <button className="delete" type="button">x</button>
        </li>
      </ul>
    </>
  );
}
