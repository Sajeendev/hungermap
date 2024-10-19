import { Box, Paper } from '@mantine/core';

const HeaderComponent = () => {
  return (
    <Paper
      shadow="md"
      p="md"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 600,
        margin: 'auto'
      }}>
      <Box>Logo</Box>
    </Paper>
  );
};

export default HeaderComponent;
