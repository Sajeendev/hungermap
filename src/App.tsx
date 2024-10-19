import { ToastifyComponent } from './components/misc/notify';
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
