import React from 'react';
import Navigation from './Navigation';
import MarvelProvider from './Context/MarvelProvider';
import TranslationProvider from './Context/TranslationContext/TranslationProvider';

export default function App() {
  return (
      <TranslationProvider>
        <MarvelProvider>
          <Navigation />
        </MarvelProvider>
      </TranslationProvider>
  );
}
