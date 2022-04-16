import React from 'react';

import Container from './components/Container';
import BackgroundProvider from './contexts/BackgroundContext';
import DataProvider from './contexts/DataContext';
import './scss/main.scss';

function App() {
  return (
    <BackgroundProvider>
      <DataProvider>
        <Container></Container>
      </DataProvider>
    </BackgroundProvider>
  );
}

export default App;
