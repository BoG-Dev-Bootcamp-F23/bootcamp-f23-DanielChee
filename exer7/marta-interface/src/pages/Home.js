import { useState } from "react";
import logo from './logo.svg'
import { generatePath, useNavigate } from "react-router-dom";
import M from './M.png';
import git from './git.png'
import linkedIn from './linkedIn.png'
import mart from "./mart-modified.png"
import reaction from "./reaction-modified.png"


export default function Home({setPropColor}) {
    const navigate = useNavigate();
    return (
        <div id="homeBody">

            {/* Heading */}
            <div id="homeHeading">
                <div id="homeIcon">
                    <img id="M" src={M} /> 
                    <div id="homeMartaTracker">MARTA Tracker</div>
                    <div id="homeAboutMe"><p onClick={() => {navigate("/about");}}>About MARTA</p>
                    </div>
                </div>
                <div id="homeLinks">
                    <a href="https://github.com/DanielChee" target="none"><img id="git" src={git} /> </a>
                    <a href="https://www.linkedin.com/in/daniel-ayoung-chee/" target="none"><img id="linkedIn" src={linkedIn} /> </a>
                </div>
            </div>


            {/* Main body */}
            <div id="homeText">
                <div id="homeTitle">
                    <div id="toprow">Track <div id="MARTA" onClick={() => {window.location.href = 'https://www.itsmarta.com/';}}
                    >MARTA</div></div> trains in real time.
                </div>
                <div id="homeContent">
                    Choose your destination and find a <br/>line that fits your schedule.
                </div>
                <div id="homeColorButtons">
                    <div id="buttons">
                        <p id="goldButton" onClick={() => {setPropColor("GOLD");navigate("/linespage");}}>Gold</p>
                        <p id="redButton" onClick={() => {setPropColor("RED");navigate("/linespage");}}>Red</p>
                        <p id="blueButton" onClick={() => {setPropColor("BLUE");navigate("/linespage");}}>Blue</p>
                        <p id="greenButton" onClick={() => {setPropColor("GREEN");navigate("/linespage");}}>Green</p>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div id="homeFooter">
                <div id="homeFooterComponents">
                    <div id="homeReact">
                        <div id="topreact">Powered By</div> <div id="bottomreact"><img id="logo" src={logo} /><img id="reaction" src={reaction} /></div>
                    </div>
                    <div id="homeMarta">
                        <div id="topmarta">Backed By</div> <div id="bottomreact"><img id="mart" src={mart} /></div>
                    </div>
                </div>
            </div>
            <p id="madeBy">Made By Daniel Ayoung-Chee 2023</p>
        </div>
      );
}

            