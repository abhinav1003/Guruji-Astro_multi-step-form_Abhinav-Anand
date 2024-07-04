import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step1 = ({ formData, setFormData, nextStep, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography component="h1" variant="h5">
        Personal Information
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        inputProps={{ pattern: "[A-Za-z ]+" }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        type="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        type="number"
        inputProps={{ pattern: "[0-9]+", minLength: 10, maxLength: 13 }}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={nextStep}
      >
        Next
      </Button>
    </Box>
  );
};

export default Step1;
