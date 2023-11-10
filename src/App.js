import React from 'react';
import axios from 'axios';
import MapContainerComponent from './components/map/map-container.js';
import Menu from './components/menu';
import Header from './components/header';
import { AppUI, InnerWrapper } from './App-styled.js';
import { useQuery } from 'react-query';

const App = () => {
  const { data, isFetching } = useQuery('location', async () => {
    const response = await axios.get('http://localhost:1500/location/get-location');

    return response.data;
  }, {
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <p>carregando...</p>;
  }

  return (
    <AppUI>
      <Menu {...data} /> 
      <InnerWrapper>
        <Header />
        <MapContainerComponent />
      </InnerWrapper>
    </AppUI>
  );
}

export default App;
