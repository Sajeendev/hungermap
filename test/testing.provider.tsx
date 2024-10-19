import React from 'react';
import { AppProvider } from '../src/providers';

interface Props {
  children: React.ReactNode;
}

const TestingProviders = ({ children }: Props) => {
  return <AppProvider>{children}</AppProvider>;
};

export default TestingProviders;
