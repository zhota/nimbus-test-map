import React from 'react';
import MapContainerComponent from './components/map/map-container.js';
import Menu from './components/menu';
import Header from './components/header';
import { AppUI, InnerWrapper } from './App-styled.js';

const App = () => {
  return (
    <AppUI>
      <Menu /> 
      <InnerWrapper>
        <Header />
        <MapContainerComponent />
      </InnerWrapper>
    </AppUI>
  );
}

export default App;
