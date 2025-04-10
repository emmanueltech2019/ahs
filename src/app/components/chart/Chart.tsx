import * as React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { SxProps, Theme } from '@mui/material/styles';

const defaultBoxStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const rawChartData = [
  { date: 'Feb 1', value: 48000 },
  { date: 'Feb 10', value: 47000 },
  { date: 'Feb 20', value: 80720 },
  { date: 'Mar 1', value: 52000 },
  { date: 'Mar 10', value: 51000 },
  { date: 'Mar 20', value: 52000 },
];

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
          <Typography variant="h6" fontWeight="bold">
            Hernia Patients
          </Typography>
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
          <Typography variant="h3" fontWeight="bold">
            52,000
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip label="+23%" style={{ backgroundColor: '#fbbf24', color: '#000' }} />
            <Typography variant="body2">vs last month</Typography>
          </Box>
        </Box>

        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={rawChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
