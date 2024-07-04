import React from 'react';
import Form from './components/Form';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#071952',
    },
    secondary: {
      main: '#088395',
    },
    info: {
      main: '#37B7C3',
    },
    background: {
      default: '#EBF4F6',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          minHeight: '100vh', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.default,
          
        }}
      >
        <>
          <Form />
        </>
      </Container>
    </ThemeProvider>
  );
}

export default App;
