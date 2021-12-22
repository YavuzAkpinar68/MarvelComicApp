import React from 'react';
import Navigation from './Navigation';
import MarvelProvider from './Context/MarvelProvider';

export default function App() {
  return (
    <MarvelProvider>
      <Navigation />
    </MarvelProvider>
  );
}
