import { PieChart } from '@mui/x-charts/PieChart';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function StatisticsCard (props) {
    
    return (
        <div className='statisticsCard'> 
        <div className='cardinfo'>
        <img className='statisticCardLogo' src={props.src}/>
           <div className='cardText'>
           <h3>{props.name}</h3>
           <p>{props.profession}</p>
           </div> 
        </div>
                <PieChart 
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'week', color:' orange' },
        { id: 1, value: 15, label: 'month', color:'gray'},
        { id: 2, value: 20, label: 'total',color:'rgb(38, 38, 59)' },
      ],
    },
  ]}
  width={300}
  height={150}
/></div>
    )
}
export default StatisticsCard;