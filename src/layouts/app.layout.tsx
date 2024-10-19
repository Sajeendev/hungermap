import { MapComponent } from '@/components/map';
import FoodSecurityComponent from '@/components/metrics/food-security.component';
import { Box } from '@mantine/core';
import FooterComponent from './footer.component';
import HeaderComponent from './header.component';

const AppLayout = () => {
  return (
    <Box style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <HeaderComponent />
      <FoodSecurityComponent />
      <MapComponent />
      <FooterComponent />
    </Box>
  );
};

export default AppLayout;
