import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    setFahrenheit(celsiusValue ? celsiusToFahrenheit(celsiusValue) : '');
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(fahrenheitValue ? fahrenheitToCelsius(fahrenheitValue) : '');
  };

  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(2);
  const fahrenheitToCelsius = (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(2);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        marginTop: 5
      }}
    >
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Фаренгейта"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </Box>
  );
};
export default TemperatureConverter;