import { useState } from "react";
import logo from './logo.svg'
import { useNavigate } from "react-router-dom";
import M from './M.png';
import git from './git.png'
import linkedIn from './linkedIn.png'
import mart from "./mart-modified.png"
import train from "./train-stations-map-2020.jpg"



export default function Home({setPropColor}) {
    const navigate = useNavigate();
    return (
        <div id="aboutBody">

            {/* Heading */}
            <div id="aboutHeading">
                <div id="homeIcon">
                    <img id="M" src={M} /> 
                    <div id="homeMartaTracker">MARTA Tracker</div>
                    <div id="homeAboutMe"><p onClick={() => {navigate("/");}}>Back Home</p>
                    </div>
                </div>
                <div id="homeLinks">
                    <a href="https://github.com/DanielChee" target="none"><img id="git" src={git} /> </a>
                    <a href="https://www.linkedin.com/in/daniel-ayoung-chee/" target="none"><img id="linkedIn" src={linkedIn} /> </a>
                </div>
            </div>

            <h1>About MARTA</h1>

            <div id="aboutContent">
                <div id="aboutImage">
                    <img id="aboutTrain" src={train} />
                </div>
                <div id="aboutText">
                    MARTA (Metropolitan Atlanta Rapid Transit Authority) is the nation’s ninth largest transit system and the largest of its kind 
                    in the Southeast that provides bus, rail, and paratransit service.Their mission 
                    is to advocate and provide safe, multi-modal transit
                    services that advance prosperity, connectivity and equity for a more livable 
                    region. MARTA's train system has four distinct lines, with gold and red 
                    spanning north to south, and blue and green spanning east to west.
                </div>
            </div>
        </div>
      );
}

            