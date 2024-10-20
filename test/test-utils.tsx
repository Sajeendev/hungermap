import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import TestingProviders from './testing.provider';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: TestingProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
