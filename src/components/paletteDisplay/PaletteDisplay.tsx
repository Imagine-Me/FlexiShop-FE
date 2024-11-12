/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';

interface ColorCardProps {
  name: string;
  color: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, color }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 2,
      border: '1px solid #ddd',
      borderRadius: 1,
      boxShadow: 1,
    }}
  >
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: color,
        borderRadius: 1,
      }}
    />
    <Typography variant="body2" mt={1}>
      {name}
    </Typography>
    <Typography variant="caption" color="textSecondary">
      {color}
    </Typography>
  </Box>
);

interface PaletteDisplayProps {
  palette: PaletteOptions;
}

const isValidColor = (color: any): color is string => {
  const testDiv = document.createElement('div');
  testDiv.style.color = color;
  return testDiv.style.color !== '';
};

export const PaletteDisplay: React.FC<PaletteDisplayProps> = ({ palette }) => {

  const colorEntries = Object.entries(palette).flatMap(([key, value]) =>
    typeof value === 'object'
      ? Object.entries(value)
        .map(([variant, color]) => ({ key, variant, color }))
        .filter(({ color }) => isValidColor(color))
      : isValidColor(value) ? [{ key, variant: 'default', color: value }] : []
  );

  const reversedColorEntries = [...colorEntries].reverse();

  return (
    <Grid container spacing={2}>
      {reversedColorEntries.map(({ key, variant, color }) => (
        <Grid item xs={6} sm={4} md={2} key={`${key}-${variant}`}>
          <ColorCard name={`${key} ${variant}`} color={color as string} />
        </Grid>
      ))}
    </Grid>
  );
};
