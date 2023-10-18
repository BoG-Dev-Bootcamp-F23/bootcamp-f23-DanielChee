import React from 'react';

export default function NavBar({ color, data }) {
  const lineStations = data[color.toLowerCase()];

  return (
    <div id="navigation">
      <h2 id="selectYour">Select your starting station</h2>
      <ul id="stationList">
        <li id="all">All Stations</li>
        {lineStations.map((station, index) => (
          <li id={index}>{station}</li>
        ))}
      </ul>
    </div>
  );
}