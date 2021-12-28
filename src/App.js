import React from 'react';
import Navigation from './Navigation';
import MarvelProvider from './Context/MarvelProvider';
import ThemeProvider from './Context/ThemeContext/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <MarvelProvider>
        <Navigation />
      </MarvelProvider>
    </ThemeProvider>
  );
}
