import { FoodSecurity } from '@/types';
import { SimpleGrid } from '@mantine/core';
import FoodSecurityStatItem from './food-security-stat.item';

interface Props {
  data: FoodSecurity;
}

const FoodSecurityFragment = ({ data }: Props) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <FoodSecurityStatItem
        title="Food Consumption Score"
        people={data?.metrics.fcs.people}
        prevalence={data?.metrics.fcs.prevalence}
      />
      <FoodSecurityStatItem
        title="Reduced Coping Strategy Index"
        people={data?.metrics.rcsi.people}
        prevalence={data?.metrics.rcsi.prevalence}
      />
      <FoodSecurityStatItem
        title="Health Access"
        people={data?.metrics.healthAccess.people}
        prevalence={data?.metrics.healthAccess.prevalence}
      />
      <FoodSecurityStatItem
        title="Market Access"
        people={data?.metrics.marketAccess.people}
        prevalence={data?.metrics.marketAccess.prevalence}
      />
    </SimpleGrid>
  );
};

export default FoodSecurityFragment;
