import React from 'react';
import ActiveCity from '../containers/active_city';
import CityList from '../containers/city_list';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
