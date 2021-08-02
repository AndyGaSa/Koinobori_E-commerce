import React from 'react';
import callHeroe from '../../modules/fetch-api';

const List = () => {
  const { status, heroe: heroes } = callHeroe('all');

  return (
    <>
      <h1>Heroes List</h1>
      <ul>
        {status === 'fetched' && (
          heroes.map((hero) => <li>{hero.name}</li>)
        )}
      </ul>
    </>
  );
};

export default List;
