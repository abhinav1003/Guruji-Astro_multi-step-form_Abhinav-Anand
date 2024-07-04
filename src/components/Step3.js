import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Step3 = ({ formData, prevStep, submitForm }) => {
  return (
    <Box sx={{ mt: 3}}>
      <Typography variant="h5" gutterBottom>
        Confirmation
      </Typography>
      <Box sx={{}}>
        <Typography variant="body1" sx={{ color: '#c2185b', marginBottom: '10px', fontWeight: 'bold' }}>
          Please review your entered information before submitting:
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }} >Name:</Typography>
          <Typography sx={{fontWeight: 'bold' }}>{formData.name}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>Email:</Typography>
          <Typography  sx={{fontWeight: 'bold' }}>{formData.email}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>Phone:</Typography>
          <Typography  sx={{fontWeight: 'bold' }}>{formData.phone}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>Address Line 1:</Typography>
          <Typography  sx={{fontWeight: 'bold' }}>{formData.address1}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>Address Line 2:</Typography>
          <Typography  sx={{fontWeight: 'bold' }}>{formData.address2}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>City:</Typography>
          <Typography sx={{fontWeight: 'bold' }}>{formData.city}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>State:</Typography>
          <Typography sx={{fontWeight: 'bold' }}>{formData.state}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>Zip Code:</Typography>
          <Typography sx={{fontWeight: 'bold' }}>{formData.zip}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" onClick={prevStep} sx={{ backgroundColor: '#ccc', color: '#333' }}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={submitForm}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;
