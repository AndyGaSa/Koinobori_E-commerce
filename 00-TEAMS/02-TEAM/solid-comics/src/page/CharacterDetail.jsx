import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserSelection from '../components/user-selection/UserSelection';

import './styles/CharacterDetail.scss';

export default function Detail() {
  const characters = useSelector((store) => store.characters);

  const { characterId } = useParams();
  const [character, setcharacter] = useState();

  useEffect(() => {
    const currentCharacter = characterId && characters?.find((item) => +item.id === +characterId);

    setcharacter(currentCharacter);
  }, [characterId]);

  return (
    <main className="character__details">
      <h2 className="character__detail-title">

        {character?.name}

      </h2>
      <div className="character__detail-top">
        <img data-testid="create-img" className="character__detail-img" src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt="character" />
        <section>
          <UserSelection characterId={characterId} />
          <div className="character__detail-creators" data-testid={`list-item-${character?.id}`}>
            <h3 className="character__detail-creator">
              Description:
              {character?.description}
            </h3>
          </div>
          <div />
        </section>
      </div>
    </main>
  );
}
