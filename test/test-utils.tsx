import { render } from '@testing-library/react';
import React from 'react';
import TestingProviders from './testing.provider';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: TestingProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
