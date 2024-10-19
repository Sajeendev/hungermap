import { ToastifyComponent } from './components/custom';
import AppLayout from './layouts/app.layout';
import { AppProvider } from './providers';

function App() {
  return (
    <AppProvider>
      <AppLayout />

      <ToastifyComponent />
    </AppProvider>
  );
}

export default App;
