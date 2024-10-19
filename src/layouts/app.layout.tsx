import { MapComponent } from '@/components/map';
import { FoodSecurityComponent } from '@/components/metrics';
import { Country } from '@/types';
import { Box } from '@mantine/core';
import { useState } from 'react';
import FooterComponent from './footer.component';
import HeaderComponent from './header.component';

const AppLayout = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <Box style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <HeaderComponent />
      <FoodSecurityComponent
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <MapComponent />
      <FooterComponent />
    </Box>
  );
};

export default AppLayout;
