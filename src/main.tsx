// keep the order of imports
// prettier-ignore
import '@mantine/core/styles.layer.css';
// prettier-ignore
import '@mantine/charts/styles.css';

import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
