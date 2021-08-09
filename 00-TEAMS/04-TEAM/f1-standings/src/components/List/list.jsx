import React from 'react';
import { useSelector } from 'react-redux';

export default function ListDriver() {
  const data = useSelector((store) => store.race);
  return (
    <>
      {data[0]?.Results.map((e) => (
        <button type="button">
          <section>
            <span>1</span>
            <div>Color Equipo</div>
            <p>{e.driver.familyName}</p>
            <div>
              <p>puntos</p>
            </div>
          </section>
        </button>
      ))}
    </>
  );
}
