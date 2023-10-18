import stationData from '../server/stationData';
import trainData from '../server/trainData';
import Train from './Train.js'
import React from 'react';


export default function TrainList({ color, data }) {
    const colorTrains = data.RailArrivals.filter((currTrain) => {
        return currTrain.LINE === color;
    });

  return (
    <div id="allTrains">
        {colorTrains.map((train) => {
            return <Train {...train} />;
        })}
    </div>
  );}