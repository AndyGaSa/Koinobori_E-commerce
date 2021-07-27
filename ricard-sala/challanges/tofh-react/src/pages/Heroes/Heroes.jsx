import React, { useState } from 'react';
import HeroCOntainer from '../../components/HeroContainer/HeroContainer';
import '../../Styles/Styles.css';
import './heroes.css';

// eslint-disable-next-line react/prop-types
export default function Heroes({ currentView }) {
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);

  const heroesList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  return (
    <>

      <HeroCOntainer
        heroesList={heroesList}
        heroesId={currentId}
        heroesName={currentName}
        setCurrentId={setCurrentId}
        setCurrentName={setCurrentName}
        setCurrentView={() => currentView('details')}
      />
    </>

  );
}
