import React from 'react';
import Navigation from './Navigation';
import MarvelProvider from './Context/MarvelProvider';
import TranslationProvider from './Context/TranslationContext/TranslationProvider';
import ThemeProvider from './Context/ThemeContext/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <MarvelProvider>
          <Navigation />
        </MarvelProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
}
