import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChart } from '../../../redux/actions/sonary.creators';

export default function Dashboard() {
  const chart = useSelector((store) => store.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChart());
  }, []);
  return (
    <main>
      <ul>
        {
            chart.map((name) => (
              <li>
                {name}
              </li>
            ))
        }

      </ul>

    </main>
  );
}
