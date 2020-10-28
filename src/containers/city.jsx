import React from 'react';

const City = ({ city }) => {
  return (
    <li className="list-group-item">
      {city.name}
    </li>
  );
};

export default City;
