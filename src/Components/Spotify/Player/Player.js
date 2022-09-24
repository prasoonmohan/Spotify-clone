import React from "react";
import Body from "../Body/Body";
import Sidebar from "../Side bar/Sidebar";
import "./Player.css"
import Footer from './../Footer/Footer';

function Player( {spotify} ) {
    return (
        <div className="player">
        <div className="player_body">
            <Sidebar />
            <Body />
        </div>
           <Footer />
        </div>
    );
}

export default Player;
