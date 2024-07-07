import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';




import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
} from "@mui/x-charts/Gauge";
import AddIcon from '@mui/icons-material/Add';
import "./home.css";
import { Box, LinearProgress, Typography } from '@mui/material';
const progressBars = [
  { value: 20, color: 'orange', text: 'Java Code' }, // Red, 20% progress
  { value: 50, color: 'blue', text: 'Basic Design' }, // Blue, 50% progress
  { value: 75, color: 'gray', text: 'Team Building' }, // Green, 75% progress
  { value: 90, color: 'pink', text: 'Buisness Marketing' }, // Orange, 90% progress
];

const LinearProgressWithLabel = ({ value, color, text }) => (
  <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
    <Typography variant="body1" color="white" gutterBottom>
      {text}
    </Typography>
    <Box display="flex" alignItems="center" width="100%">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 15,
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="white">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  </Box>
);

function HomePage() {
  
  return (
    
    <div className="homeMainDiv">
    <div className="homeDiv">
      <div className="firstChart">
        <h2>Frequency Analysis Chart</h2>
        <LineChart 
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15] }]}
          series={[
            {
              data: [1, 2, 3, 4, 5, 5.1, 5.2, 5.3, 6, 6.3],
            },
          ]}
          width={600}
          height={300}
        />
      </div>
      <div className="secondcharts">
        <div className="secondChart">
          <h2>Statistics</h2>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["2016", "2017", "2018"] }]}
            series={[
              { data: [400, 300, 500] },
              { data: [100, 600, 300] },
              { data: [200, 500, 600] },
            ]}
            width={400}
            height={300}
          />
        </div>
        <div className="thirdChart">
          <h2>Course Activities</h2>
          <Gauge width={200} height={200} value={75} style={{ fontSize: '30px',color: 'blue' }} />
          <div className="dotDiv">
          <img src="/images/blue.png" /> process
          <img src="/images/white.png" /> in process
          </div>
      
        </div>
      </div>
      <div className="forthChart">
        <h2>Top Tutors</h2>
        <p>add them to the lsit</p>
        <div className="tutorsFirstDiv">
      <div className="tutorsDiv">
            <img className='tutorsIcon'src='images/avatar.png'/>
            <div className="tutorsInfo">
                <p style={{fontSize:'20px', color:'white'}}> Luka Kurdadze </p>
                <p style={{fontSize:'16px',color:'gray'}}>  Programming </p>
            </div>
            <img  className="tutorAdd" src='/images/add.png'/>
        </div>
      <div className="tutorsDiv">
            <img className='tutorsIcon'src='images/avatar.png'/>
            <div className="tutorsInfo">
                <p style={{fontSize:'20px', color:'white'}}> Guja Gudiashvili </p>
                <p style={{fontSize:'16px',color:'gray'}}>  Basketboll </p>
            </div>
            <img  className="tutorAdd" src='/images/add.png'/>
        </div>
      </div>
      <div className="tutorsSeconDiv">
      <div className="tutorsDiv">
            <img className='tutorsIcon'src='images/tengo.png'/>
            <div className="tutorsInfo">
                <p style={{fontSize:'20px', color:'white'}}> Tengo Maliari </p>
                <p style={{fontSize:'16px',color:'gray'}}>  Lesva,Shpakli </p>
            </div>
            <img  className="tutorAdd" src='/images/add.png'/>
  
        </div>
      <div className="tutorsDiv">
            <img className='tutorsIcon'src='images/badri.png'/>
            <div className="tutorsInfo">
                <p style={{fontSize:'20px', color:'white'}}> Badri Shtanga </p>
                <p style={{fontSize:'16px',color:'gray'}}>  Jimi,Wiaga </p>
            </div>
            <img  className="tutorAdd" src='/images/add.png'/>
        </div>
      </div>
      </div>
    </div>
    <div className="homeSecondDiv">
    <div className="planningDiv">
<div className="planningDivTitle"> <h2>My Planning </h2>  </div>
<div className="homePlanningDivs">
  <div className="homePlanningCard">
<img className="cardImg" src="/images/cardimg1.png"/>
<div className="homePlanningCardText">
  <h3>3d animation conferrence</h3>
  <p style={{color:'gray'}}>December 23,Monday</p>
  
</div>
<Dropdown>
  <MenuButton
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
  >
    <MoreVert />
  </MenuButton>
  <Menu>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
  </div>
  <div className="homePlanningCard">
<img className="cardImg" src="/images/cardimg1.png"/>
<div className="homePlanningCardText">
  <h3>Handle Ux Research</h3>
  <p style={{color:'gray'}}>March 13,Sunday</p>
</div>
<Dropdown>
  <MenuButton
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
  >
    <MoreVert />
  </MenuButton>
  <Menu>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
  </div>
  <div className="homePlanningCard">
<img className="cardImg" src="/images/cardimg1.png"/>
<div className="homePlanningCardText">
  <h3>3d UI Project</h3>
  <p style={{color:'gray'}}>June 22,Saturday</p>
</div>
<Dropdown>
  <MenuButton
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
  >
    <MoreVert />
  </MenuButton>
  <Menu>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
  </div>
</div>
    </div>
    <div className="courseTimeDiv">
      <div className="courseTimeText">
        <h2>Completed course</h2> <Dropdown>
  <MenuButton
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
  >
    <MoreVert />
  </MenuButton>
  <Menu>
    <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
      </div>
      
      <Box width="100%">
    {progressBars.map((bar, index) => (
      <LinearProgressWithLabel key={index} value={bar.value} color={bar.color} text={bar.text} />
    ))}
  </Box>
);
    </div>
    </div>
    </div>
  );
}
export default HomePage;
