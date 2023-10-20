import Train from './Train.js';
import { useState, useEffect } from "react";


const TRAIN_API = "http://13.59.196.129:3001/arrivals/";

export default function TrainList({ color, loading, setLoading, stations, filters }) {
    const [data, setData] = useState(null);
    async function getData() {
        const res = await fetch(TRAIN_API + color.toLowerCase());
        const newData = await res.json();
        setData(newData);
        setLoading(false);
    }
    
    useEffect(() => {
        getData();
    }, [color]);
      

      let filteredTrainList = stations === "all" ? (data) : 
      (data?.filter(function(APIdata) {
        return stations.toUpperCase() + " STATION" === APIdata.STATION;
      }))

    if (filters.includes("arriving")) {
        filteredTrainList = filteredTrainList?.filter(APIdata => APIdata.WAITING_TIME === "Arriving");
    } 
    if (filters.includes("scheduled")) {
        filteredTrainList = filteredTrainList?.filter(APIdata => APIdata.WAITING_TIME !== "Arriving");
    }
    if (filters.includes("east-north")) {
        filteredTrainList = filteredTrainList?.filter(APIdata => APIdata.DIRECTION === "E" || APIdata.DIRECTION === "N");
    }
    if (filters.includes("west-south")) {
        filteredTrainList = filteredTrainList?.filter(APIdata => APIdata.DIRECTION === "W" || APIdata.DIRECTION === "S");
    }

    return (
        <div>
            {loading ? <div id="loading">Loading...</div> : <div><div id="allTrains">
            {filteredTrainList?.map((train) => {
                return <Train {...train} />;
            })}
        </div> </div>}
        </div>
        
    );}