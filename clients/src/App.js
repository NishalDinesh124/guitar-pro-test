import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Auth/AdminLogin';
import LinksPage from './Pages/Admin/LinksPage';
import AdminUserAccess from './Pages/Admin/AdminUserAccessPage';
import ViewPages from './Pages/Admin/viewPages';
import UserLoginPage from './Auth/UserLogin';
import UserHome from './Pages/Home';
import Player from './Pages/Player';

import { ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';


function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/admin" element={<ViewPages toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/admin-login" element={<AuthPage toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route
              path="/admin/view-links"
              element={<LinksPage toggleTheme={toggleTheme} themeMode={themeMode} />}
            />
            <Route path="/admin/all-users/:pageId" element={<AdminUserAccess toggleTheme={toggleTheme} themeMode={themeMode} />} />
             <Route path="/" element={<UserHome toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/user-login" element={<UserLoginPage toggleTheme={toggleTheme} themeMode={themeMode} />} />
            <Route path="/player/:id" element={<Player toggleTheme={toggleTheme} themeMode={themeMode} />} />

          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100vw;
  min-height: 100vh;
  font-family: Inter;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding: 0em 0em;
  justify-content: center;
`;
const primary = '#9c27b0';   // Purple
const highlight = '#fcaf36'; // Orange-Yellow
const muted = '#ada360';     // Olive
const white = '#ffffff';
const black = '#000000';

const lightTheme = {
  background: white,
  text: black,
  loginBg: '#e8cfeb',
  cardBg: '#fff7ec',
  cardBorder: muted,
  inputBg: '#f9f9f9',
  placeholder: muted,
  heading: primary,
  buttonBg: primary,
  buttonText: white,
  buttonHover: '#ab47bc', // slightly lighter purple
  watermark: '#00000033',
};

const darkTheme = {
  background: '#121212',
  text: white,
  loginBg: '#1e1e1e',
  cardBg: '#1f1f1f',
  cardBorder: muted,
  inputBg: '#2a2a2a',
  placeholder: '#bbbbbb',
  heading: highlight,
  buttonBg: primary,
  buttonText: white,
  buttonHover: '#ab47bc',
  watermark: '#ffffff1f',
};
