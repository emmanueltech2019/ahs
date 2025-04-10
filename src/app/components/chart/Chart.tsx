import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent, Box, Typography, Chip, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const chartData = {
  xAxis: [
    {
      data: ['Feb 1', 'Feb 10', 'Feb 20', 'Mar 1', 'Mar 10', 'Mar 20'],
      scaleType: 'point' as const,
    },
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


const defaultBoxStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function HerniaPatientsChart() {
  const [range, setRange] = React.useState<'1M' | '3M' | '6M' | '1Y'>('1M');

  const handleRangeChange = (
    _: React.MouseEvent<HTMLElement>,
    newRange: '1M' | '3M' | '6M' | '1Y' | null
  ) => {
    if (newRange !== null) {
      setRange(newRange);
    }
  };

  return (
    <Card className="rounded-xl border border-solid mx-20">
      <CardContent>
        <Box sx={defaultBoxStyles}>
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

        <Box sx={{ ...defaultBoxStyles, my: 2 }}>
          <Typography variant="h3" fontWeight="bold">52,000</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip label="+23%" style={{ backgroundColor: '#fbbf24', color: '#000' }} />
            <Typography variant="body2">vs last month</Typography>
          </Box>
        </Box>

        <LineChart
          height={300}
          series={chartData.series}
          xAxis={chartData.xAxis}
          sx={{
            '.MuiLineElement-root': { strokeWidth: 2 },
            '.MuiAreaElement-root': { fillOpacity: 0.2 },
          }}
        />
      </CardContent>
    </Card>
  );
}