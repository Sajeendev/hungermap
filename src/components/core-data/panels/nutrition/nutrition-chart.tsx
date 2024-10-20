import { NutritionSummary } from '@/types';
import { BarChart } from '@mantine/charts';

interface Props {
  summary: Record<string, NutritionSummary>;
}

const NutritionChart = ({ summary }: Props) => {
  const chartData = Object.entries(summary).map(([year, stats]) => ({
    year,
    totalCountries: stats.totalCountries,
    acuteMalnutrition: stats.totalAcuteMalnutrition * 100,
    chronicMalnutrition: stats.totalChronicMalnutrition * 100
  }));

  return (
    <BarChart
      h={300}
      data={chartData}
      dataKey="year"
      series={[
        { name: 'totalCountries', color: 'green.6' },
        { name: 'acuteMalnutrition', color: 'violet.6' },
        { name: 'chronicMalnutrition', color: 'red.6' }
      ]}
    />
  );
};

export default NutritionChart;
