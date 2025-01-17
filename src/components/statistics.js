import * as React from "react";
import "./statistics.css";
import StatisticsCard from "./statisticcard";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645,
  30341.807, 31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03,
  35093.824, 35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727,
  36691, 36571, 36632, 36527, 36827, 37124, 37895, 38515.918,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
  29259.764, 30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426,
  34865.78, 35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473,
  34971, 35185, 35618, 36436, 36941, 37334, 37782.83, 38058.086,
];

const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
  30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44,
  35528.715, 36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582,
  43189, 43320, 43413, 43922, 44293, 44689, 45619.785, 46177.617,
];

function Statistics() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };
  return (
    <div className="statisticsMain">
      <div className="statisticsTitle">
        <h1>Statistics</h1>
      </div>
      <div className="statisticsDiv">
        <div className="cardsDiv">
          <div className="statisticsTitle2">
            <h2> Courses Activity</h2>
          </div>
          <div className="statisticsCards">
            <StatisticsCard
              name="Bob Williams"
              profession="UI/UX Design"
              src="/images/avatar.jpg"
            />
            <StatisticsCard
              name="George Bush"
              profession="Chemical Science"
              src="/images/avatar.jpg"
            />
            <StatisticsCard
              name="Konstantine Janashia"
              profession="Physical Engeenering"
              src="/images/janashia.jpeg"
            />
          </div>
        </div>
        <div className="statisticPoints">
          <div className="pointsDiv1">
            <div className="pointsTitle">
              <h2>Learning points</h2>
            </div>
            <LineChart
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  strokeDasharray: "10 5",
                  strokeWidth: 4,
                },
                "& .MuiAreaElement-series-Germany": {
                  fill: "url('#myGradient')",
                },
              }}
              xAxis={[
                {
                  id: "Years",
                  data: years,
                  scaleType: "time",
                  valueFormatter: (date) => date.getFullYear().toString(),
                },
              ]}
              series={[
                {
                  id: "France",
                  data: FranceGDPperCapita,
                  stack: "total",
                  area: true,
                  showMark: false,
                },
                {
                  id: "Germany",
                  data: GermanyGDPperCapita,
                  stack: "total",
                  area: true,
                  showMark: false,
                },
                {
                  id: "United Kingdom",
                  data: UKGDPperCapita,
                  stack: "total",
                  area: true,
                  showMark: false,
                },
              ]}
              margin={{ left: 60, top: 10, right: 20 }}
              width={550}
              height={300}
            >
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                  <stop offset="5%" stopColor="gold" />
                  <stop offset="95%" stopColor="red" />
                </linearGradient>
              </defs>
            </LineChart>
          </div>
          <div className="pointsDiv2">
            <div className="pointsTitle">
              <h2>Learning points</h2>
            </div>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["June 10", "June 20", "June 30"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistics;
