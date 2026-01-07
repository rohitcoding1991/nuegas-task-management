import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Sliders() {
  return (
    <Box >
      <Slider
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        sx={{
          color: '#546FFF',
          height: 8,
          maxWidth:324
        }}
      />
    </Box>
  );
}
