'use client';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [complexity, setComplexity] = React.useState('simple');

  const handleChange = (event, newComplexity) => {
    setComplexity(newComplexity);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={complexity}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="simple">Simple</ToggleButton>
      <ToggleButton value="complex">Complex</ToggleButton>
    </ToggleButtonGroup>
  );
}
