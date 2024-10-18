import { MapComponent } from '@/components/map';
import { AppShell, MantineProvider } from '@mantine/core';

import { theme } from './styles';

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="md"
        styles={() => ({
          main: { height: '100vh', padding: 0 }
        })}>
        <MapComponent />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
