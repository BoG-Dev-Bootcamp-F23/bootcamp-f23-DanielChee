import { useState, useEffect } from "react";
const stationDataURL = "http://13.59.196.129:3001/stations/";

export default function NavBar({ color, stations, setStations }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function getData() {
    const res = await fetch(stationDataURL + color.toLowerCase());
    const newData = await res.json();
    setData(newData);
    setLoading(false);
  }

  const toggleStation = (station) => {
    setStations(station)
  };
  

  useEffect(() => {
    getData();
}, [color]);

  return (
    <div id="navigation">
      <h2 id="selectYour">Select your starting station</h2>
      {loading ? <div id="loading">Loading...</div> : 
      <ul id="stationList">
        <li id="all" className={stations === "all" ? "toggled" : "untoggled"} onClick={() => toggleStation("all")}>All Stations</li>
        {data.map((station, index) => (<li id={station} className={stations === station ? "toggled" : "untoggled"} onClick={() => toggleStation(station)}>{station}</li>))}
      </ul>
      }
      
    </div>
  );
}