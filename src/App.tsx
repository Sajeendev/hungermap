import { MapComponent } from '@/components/map';
import { AppShell } from '@mantine/core';

import { Slide, ToastContainer } from 'react-toastify';
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

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={3}
        transition={Slide}
        style={{ fontSize: '14px' }}
        theme="dark"
      />
    </AppProvider>
  );
}

export default App;
