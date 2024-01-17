import React from 'react';

function Area({ data: { name, lat, lon } }) {
  return (
    <h2>
      {name} / {lat} / {lon}
    </h2>
  );
}

export default Area;
