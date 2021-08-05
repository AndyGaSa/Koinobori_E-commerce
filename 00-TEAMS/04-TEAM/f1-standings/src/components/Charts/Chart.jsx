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
import 'hammerjs';

const categories = [
  'Bahrain',
  'Italy',
  'Portugal',
  'Spain',
  'Monaco',
  'Azerbaijan',
  'France',
  'Austria',
  'Austria',
  'UK',
  'Hungary'
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
      <Chart>
        <ChartTitle text="Drivers Statistic" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            title={{
              text: 'Countries'
            }}
            categories={categories}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          {driverSeries.map((driver) => <ChartSeriesItem type="line" data={driver.points} />)}
        </ChartSeries>
      </Chart>
      <div>
        <input type="text" onChange={(event) => setDriver1(event.target.value)} />

        <input type="text" onChange={(event) => setDriver2(event.target.value)} />

        {driversData[0]?.map((e) => (
          <p>{e.Driver.driverId}</p>
        ))}

      </div>
    </>
  );
}
