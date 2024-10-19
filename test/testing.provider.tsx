import { MantineProvider } from '@mantine/core';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const TestingProviders = ({ children }: Props) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default TestingProviders;
