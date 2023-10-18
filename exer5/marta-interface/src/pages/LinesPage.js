import React, { useState } from 'react';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import stationData from '../server/stationData';
import trainData from '../server/trainData';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("GOLD");

  return (
    
    <div class="LinesPage">
        <div id="buttons">
        <button
        onClick={() => {
          setCurrColor("BLUE");
        }}
      >Blue</button>
      <button
        onClick={() => {
          setCurrColor("GOLD");
        }}
      >Gold</button>
      <button
        onClick={() => {
          setCurrColor("RED");
        }}
      >Red</button>
      <button
        onClick={() => {
          setCurrColor("GREEN");
        }}
      >Green</button>
      </div>
        <div id="heading-content">
            <h1 id="heading">
                {currColor}
            </h1>
            <div id="leftNav-trains">
                <div id="leftNav">
                    <NavBar color={currColor} data={stationData} />
                </div>
                <div id="trains">
                    <div id="buttons">
                        <p>Arriving</p>
                        <p>Scheduled</p>
                        <p>Northbound</p>
                        <p>Southbound</p>
                    </div>
                    <TrainList color={currColor} data={trainData} />
                </div>
            </div>
        </div>
      
    </div>
  );
}


