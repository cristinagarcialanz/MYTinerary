import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer';
import { Provider } from 'react-redux';
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa100',
    },
    secundary: {
      main: '#ffffff',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = configureStore({ reducer: mainReducer })
root.render(

  <ThemeProvider theme={theme}>
    <Provider store={reduxStore} >
    <BrowserRouter>    
      <App />
    </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
