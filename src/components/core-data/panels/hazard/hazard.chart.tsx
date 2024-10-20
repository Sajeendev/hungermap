import { PieChart } from '@mantine/charts';
import { Group, useMantineTheme } from '@mantine/core';

interface Props {
  data: Record<string, number>;
}

const HazardChart = ({ data }: Props) => {
  const theme = useMantineTheme();

  const colors = [
    theme.colors.blue[6],
    theme.colors.green[6],
    theme.colors.red[6],
    theme.colors.yellow[6],
    theme.colors.orange[6],
    theme.colors.pink[6]
  ];

  const pieData = Object.entries(data).map(([type, count], index) => ({
    name: type,
    value: count,
    color: colors[index % colors.length]
  }));

  return (
    <Group justify="center">
      <PieChart
        data={pieData}
        size={200}
        withLabelsLine
        labelsPosition="outside"
        labelsType="value"
        withLabels
      />
    </Group>
  );
};

export default HazardChart;
