import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step2 = ({ formData, setFormData, nextStep, prevStep, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography component="h1" variant="h5">
       Address Information
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="address1"
        label="Address Line 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        margin="normal"
        fullWidth
        id="address2"
        label="Address Line 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="city"
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="state"
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="zip"
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={!!errors.zip}
        helperText={errors.zip}
        type="number"
        inputProps={{ pattern: "[0-9]+",minLength: 6, maxLength: 6 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={nextStep}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
