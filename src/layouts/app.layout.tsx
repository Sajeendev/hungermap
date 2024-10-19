import { MapComponent } from '@/components/map';
import { Box } from '@mantine/core';
import FooterComponent from './footer.component';
import HeaderComponent from './header.component';

const AppLayout = () => {
  return (
    <Box style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <HeaderComponent />
      <MapComponent />
      <FooterComponent />
    </Box>
  );
};

export default AppLayout;
