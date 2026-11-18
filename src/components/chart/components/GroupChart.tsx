import React from 'react';
import { BarChart} from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { tGroup } from '../groupdata';
import SettingChart from './SettingChart';
import { LineChart} from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {

  const [isBar, setIsBar] = React.useState(true);

  const chartSetting = {
      yAxis: [{ label: 'Высота (м)' }],
      height: 400,
    };

  const [series, setSeries] = React.useState({
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });

  let seriesY = Object.entries(series)
    .filter(item => item[1] == true)
    .map(item => {
       return {"dataKey": item[0], "label": item[0]}
     });

  return(
    <Container maxWidth="lg">
      {isBar &&
      (<LineChart   
        dataset={ data }
        xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
        series={ seriesY}
        slotProps={{
          legend: {
            position: { vertical: 'bottom', horizontal: 'center' },
          },
        }}
        {...chartSetting}
      />)}
      {!isBar && 
      (<BarChart
        dataset={ data }
        xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
        series={ seriesY }
        slotProps={{
          legend: {
            position: { vertical: 'bottom', horizontal: 'center' },
          }, 
        }}
        {...chartSetting}
      />)}
      <SettingChart series={ series } setSeries={ setSeries } isBar = {isBar} setIsBar ={setIsBar}/>
    </Container>
  )
}
export default GroupChart;