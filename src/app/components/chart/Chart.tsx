import * as React from 'react';
import {
  Card,
  CardContent,
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

// const rawChartData = [
//   { date: 'Feb 1', value: 48000 },
//   { date: 'Feb 10', value: 47000 },
//   { date: 'Feb 20', value: 80720 },
//   { date: 'Mar 1', value: 52000 },
//   { date: 'Mar 10', value: 51000 },
//   { date: 'Mar 20', value: 52000 },
// ];
const rawChartData = [
  { date: '2015', value: 11400 },
  { date: '2016', value: 18000 },
  { date: '2017', value: 26800 },
  { date: '2018', value: 32600 },
  { date: '2019', value: 38900 },
  { date: '2020', value: 47400 },
  { date: '2021', value: 89000 },
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
    <Card className="rounded-xl border border-solid mx-2">
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">
          da Vinci procedures in each year since 2015
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
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0' }}>
          {/* <Typography variant="h3" fontWeight="bold">
            52,000
          </Typography> */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Chip label="+23%" style={{ backgroundColor: '#fbbf24', color: '#000' }} />
            <Typography variant="body2">vs last month</Typography>
          </div>
        </div>

        <div style={{ height: 300 }}>
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
        </div>
      </CardContent>
    </Card>
  );
}
