import { MapComponent } from '@/components/map';
import { AppShell } from '@mantine/core';

import { ToastContainer } from 'react-toastify';
import { AppProvider } from './providers';

function App() {
  return (
    <AppProvider>
      <AppShell
        padding="md"
        styles={() => ({
          main: { height: '100vh', padding: 0 }
        })}>
        <MapComponent />
      </AppShell>
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
