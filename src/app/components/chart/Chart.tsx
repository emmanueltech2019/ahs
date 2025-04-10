import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent } from '@mui/material';
import { Box, Typography, Chip, ToggleButtonGroup, ToggleButton } from '@mui/material';

// const chartData = {
//   xAxis: [
//     { data: ['Feb 1', 'Feb 10', 'Feb 20', 'Mar 1', 'Mar 10', 'Mar 20'], scaleType: 'point' }
//   ],
//   series: [
//     {
//       data: [48000, 47000, 720, 52000, 51000, 52000],
//       label: 'Treated',
//       area: true,
//       color: '#3b82f6',
//     },
//   ],
// };
const chartData = {
    xAxis: [
      { data: ['Feb 1', 'Feb 10', 'Feb 20', 'Mar 1', 'Mar 10', 'Mar 20'], scaleType: 'point' as 'point' | 'time' | 'band' | 'log' | 'pow' | 'sqrt' | 'utc' | 'linear' | undefined }
    ],
    series: [
      {
        data: [48000, 47000, 80720, 52000, 51000, 52000],
        label: 'Treated',
        area: true,
        color: '#3b82f6',
      },
    ],
  };
export default function HerniaPatientsChart() {
  const [range, setRange] = React.useState('1M');

//   const handleRangeChange = (_, newRange) => {
//     if (newRange !== null) {
//       setRange(newRange);
//     }
//   };
// const handleRangeChange = (newRange: '1M' | '3M' | '6M' | '1Y') => {
//     setRange(newRange);
//   };
const handleRangeChange = (
    event: React.MouseEvent<HTMLElement>,
    newRange: '1M' | '3M' | '6M' | '1Y' | null
  ) => {
    if (newRange !== null) {
      setRange(newRange);
    }
  };
  
  return (
    <Card className="rounded-xl border border-solid mx-20">
      <CardContent>
        {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Typography variant="h6" fontWeight="bold">Hernia Patients</Typography>
          <ToggleButtonGroup
            value={range}
            exclusive
            onChange={handleRangeChange}
            size="small"
          >
            <ToggleButton value="1M">1M</ToggleButton>
            <ToggleButton value="3M">3M</ToggleButton>
            <ToggleButton value="6M">6M</ToggleButton>
            <ToggleButton value="1Y">1Y</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Typography variant="h3" fontWeight="bold">52,000</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Chip label="+23%" style={{ backgroundColor: '#fbbf24', color: '#000' }} />
            <Typography variant="body2">vs last month</Typography>
          </Box>
        </Box>

        <LineChart
          height={300}
          series={chartData.series}
          xAxis={chartData.xAxis}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
            },
            '.MuiAreaElement-root': {
              fillOpacity: 0.2,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
