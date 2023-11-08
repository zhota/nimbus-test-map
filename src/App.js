import React from 'react';
import MapContainerComponent from './components/map/map-container.js';
import Menu from './components/menu';
import { AppUI } from './App-styled.js';

const App = () => {
  return (
    <AppUI>
      <Menu /> 
      <MapContainerComponent />
    </AppUI>
  );
}

export default App;
