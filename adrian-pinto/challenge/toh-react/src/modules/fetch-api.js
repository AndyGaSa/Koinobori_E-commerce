/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
/**
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * https://superheroapi.com/
 * https://akabab.github.io/superhero-api/
 * https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api
 * @param { Number || String } heroId Id number || 'all' => to obtain all heroes json
 * @param { String } heroInfo id, powerstat, apparence, biography, connections, work
 * @returns { Object } promise
 */
const callHeroe = (heroId, heroInfo = 'id') => {
  const consult = heroId === 'all' ? `${heroId}.json` : `${heroInfo}/${heroId}.json`;
  const [status, setStatus] = useState('idle');
  const [heroe, setData] = useState([]);

  useEffect(() => {
    if (!consult) return;
    const fetchHeroe = async () => {
      setStatus('fetching');
      const incomingHeroe = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${consult}`);
      const heroe = await incomingHeroe.json();
      setData(heroe);
      setStatus('fetched');
    };

    fetchHeroe();
  }, [heroId, heroInfo]);

  return { status, heroe };
};

export default callHeroe;
