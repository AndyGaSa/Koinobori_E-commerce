import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'hammerjs';
import './style.scss';

const categories = [
  '1.Bahrain',
  '2.Italy',
  '3.Portugal',
  '4.Spain',
  '5.Monaco',
  '6.Azerbaijan',
  '7.France',
  '8.Austria',
  '9.Austria',
  '10.UK',
  '11.Hungary'
];
const categoriesRace = [
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
];

export default function ChartContainer() {
  const [Driver1, setDriver1] = React.useState();
  const [Driver2, setDriver2] = React.useState();
  const racesData = useSelector(({ races }) => races);
  const driversData = useSelector((store) => store?.drivers);
  const [driverSeries, setDriverSeries] = React.useState([]);

  React.useEffect(() => {
    const pointsPilot1 = racesData?.map(({ Results }) => Results
      .filter((e) => e.Driver.driverId === Driver1).map(({ points }) => points)).map((e) => e[0]);
    const pointsPilot2 = racesData?.map(({ Results }) => Results
      .filter((e) => e.Driver.driverId === Driver2).map(({ points }) => points)).map((e) => e[0]);

    const series = [
      {
        driverId: Driver1,
        points: pointsPilot1
      },
      {
        driverId: Driver2,
        points: pointsPilot2
      }
    ];
    setDriverSeries(series);
  }, [racesData, Driver1, Driver2]);

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
            categories={categoriesRace}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          {driverSeries.map((driver) => <ChartSeriesItem type="line" data={driver.points} />)}
        </ChartSeries>
      </Chart>
      <section className="driver-info">
        <div className="driver-input">
          <input className="imput-conatiner" type="text" onChange={(event) => setDriver1(event.target.value)} />

          <input className="imput-container" type="text" onChange={(event) => setDriver2(event.target.value)} />

        </div>
        <section className="leyend">
          <div>
            {driversData[0]?.map((e) => (
              <p className="leyend-info">{e.Driver.driverId}</p>
            ))}
          </div>
          <div>
            {categories.map((e) => (
              <p className="leyend-info">{e}</p>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
