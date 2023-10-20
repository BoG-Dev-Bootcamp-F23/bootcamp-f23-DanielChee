import React, { useState } from 'react';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
const trainDataURL = "http://13.59.196.129:3001/";




export default function LinesPage() {
  const [filters, setFilters] = useState([]);
  const [currColor, setCurrColor] = useState("GOLD");
  const [loading, setLoading] = useState(true);
  const [stations, setStations] = useState("");

  const toggleFilters = (filter) => {
    const updatedList = filters.includes(filter) 
    ? filters.filter(item => item !== filter)
    : [filter, ...filters];

    setFilters(updatedList);
  }

  return (
    <div className="LinesPage">

      <h1>🚈Marta Navigator🚈</h1>

        <div id="buttons">
          <button onClick={() => {
              if (currColor != "GOLD") {
                setCurrColor("GOLD");
                setLoading(true);
                setStations("all");
                setFilters([]);
              }}}>Gold</button>

          <button onClick={() => {
              if (currColor != "RED") {
                setCurrColor("RED");
                setLoading(true);
                setStations("all");
                setFilters([]);
              }}}>Red</button>

          <button onClick={() => {
              if (currColor != "BLUE") {
                setCurrColor("BLUE");
                setLoading(true);
                setStations("all");
                setFilters([]);
              }}}>Blue</button>

          <button onClick={() => {
              if (currColor != "GREEN") {
                setCurrColor("GREEN");
                setLoading(true);
                setStations("all");
                setFilters([]);
              }}}>Green</button>
        </div>

        <div id="heading-content">
            <h1 id="heading">
                {currColor}
            </h1>
            <div id="leftNav-trains">
                <div id="leftNav">
                    <NavBar color={currColor} stations={stations} setStations={setStations}/>
                </div>
                <div id="trains">
                    <div id="filters">
                      
                        <p id="arriving" onClick={() => {toggleFilters("arriving");}}
                        style={{background: filters.includes("arriving") ? 'rgb(154, 154, 154)' : 'white'}}
                        >Arriving</p>

                        <p id="scheduled" onClick={() => {toggleFilters("scheduled");}}
                        style={{background: filters.includes("scheduled") ? 'rgb(154, 154, 154)' : 'white'}}
                        >Scheduled</p>


                        <p id="east-north" onClick={() => {toggleFilters("east-north");}}
                        style={{background: filters.includes("east-north") ? 'rgb(154, 154, 154)' : 'white'}}
                        >{currColor === "GREEN" || currColor=== "BLUE" ? <div id="east">Eastbound</div> : <div>Northbound</div> }</p>

                        <p id="west-south" onClick={() => {toggleFilters("west-south");}}
                        style={{background: filters.includes("west-south") ? 'rgb(154, 154, 154)' : 'white'}}
                        >{currColor === "GREEN" || currColor=== "BLUE" ? <div id="west">Westbound</div> : <div>Southbound</div> }</p>

                        {/* <p id="east-north">{currColor === "GREEN" || currColor=== "BLUE" ? <div id="east">Eastbound</div> : <div>Northbound</div> }</p>
                        <p id="west-south">{currColor === "GREEN" || currColor=== "BLUE" ? <div id="west">Westbound</div> : <div>Southbound</div> }</p> */}
                    </div>
                    <TrainList color={currColor} loading={loading} setLoading={setLoading} stations={stations} filters={filters}/>
                </div>
            </div>
        </div>
    </div>
  );
}


