import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from './styles';

function App() {
  return <MantineProvider theme={theme}>app works</MantineProvider>;
}

export default App;
