import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import actionType from '../../redux/actions/action.type';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'hammerjs';
// hammerjs

function Chart2() {
  const dispatch = useDispatch();
  const racesData = useSelector(({ races }) => races);
  const driversData = useSelector(({ drivers }) => drivers);

  const driverPoints = useSelector(({ points }) => points);

  function getPoints(pilot) {
    const accumulatedPoints = [];

    const Points = racesData?.map(({ Results }) => Results
      .filter((e) => e.Driver.driverId === pilot).map(({ points }) => points)).map((e) => e[0]);

    for (let i = 0; i < Points.length; i += 1) {
      if (i === 0) {
        accumulatedPoints.push(+Points[i]);
      } else {
        accumulatedPoints.push(+Points[i] + +accumulatedPoints[i - 1]);
      }
    }

    return accumulatedPoints;
  }

  const addPilot = (pilot) => dispatch(
    {
      type: actionType.ADD_CHART_DRIVER,
      driver: {
        driverId: pilot,
        points: getPoints(pilot)
      }
    }
  );

  return (
    <>
      <Header />
      <Chart className="chart">
        <ChartTitle text="Drivers Statistic" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            title={{
              text: 'Countries'
            }}
            categories={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11'
            ]}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          {driverPoints.map((driver) => <ChartSeriesItem type="line" data={driver.points} />)}
        </ChartSeries>
      </Chart>
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {driversData[0]?.map((e) => <button type="button" onClick={() => addPilot(e.Driver.driverId)}>{e.Driver.familyName}</button>)}
      </section>
      <Footer />
    </>
  );
}

export default Chart2;
