import React from 'react';

function Weather({ data: { main, icon, temp, speed } }) {
  return (
    <div>
      <span>{main}</span>
      <span>
        <img src={icon} alt="icon" />
      </span>
      <span>{temp?.toFixed(1)}°C </span>
      <span>{speed}m/s</span>
    </div>
  );
}

export default Weather;
