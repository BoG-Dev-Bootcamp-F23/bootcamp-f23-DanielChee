
export default function Train(props) {
    const train = props;
    let delayMessage = "On Time";
    if (train.DELAY === "T0S") {
        delayMessage = "Delayed";
    }
    let displayValue = "Arrived";
    let displayMin = "";
    if (train.WAITING_TIME.substring(0, 1) !== "A") {
        displayValue = train.WAITING_TIME.substring(0, 2);
        displayMin = "min";
    }
    return (
      <div id="locations-time">
        <div  id="letter-location">
            <h1>M</h1>
            <div id="location-line">
                <div id="locations">{train.STATION} ⟶ {train.DESTINATION}</div>
                <div id="line-onTime">
                    <div className="line" id={train.LINE}>
                        {train.LINE}    
                    </div>
                    <div id="onTime">
                        {delayMessage}
                    </div>
                </div>
            </div>
        </div>
        <div id="time">
            <p id="num-time">{displayValue}</p>
            <p id="min-time">{displayMin}</p>
        </div>
        
      </div>
    );
  }