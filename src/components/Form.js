import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Paper, Typography, Box } from '@mui/material';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone is required';
      } else if (formData.phone.length < 10 || formData.phone.length > 13) {
        newErrors.phone = 'Phone number is invalid';
      }
    }
    if (step === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) {
        newErrors.zip = 'Zip Code is required'
    } else if (formData.zip.length !== 6 ) {
        newErrors.zip = 'Zip Code is invalid';
      };
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    if (validateStep()) {
      setSubmittedData(formData);
      console.log('Form submitted:', formData);
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setErrors({});
      setSubmittedData(null);

      localStorage.removeItem('formData');

      alert('Form submitted successfully!');

    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            errors={errors}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        )}
      </Paper>

      {submittedData && (
        <Paper className="submitted-data" sx={{ mt: 3, p: 3 }}>
          <Typography variant="h6">Submitted Data</Typography>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Paper>
      )}
    </Box>
  );
};

export default Form;
