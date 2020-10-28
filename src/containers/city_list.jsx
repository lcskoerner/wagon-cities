import React from 'react';
import City from '../containers/city';

const CityList = ({ cities }) => {
  return (
    <ul className="cities">
      {cities.map(city => <City city={city} />)}
    </ul>
  );
};

export default CityList;
