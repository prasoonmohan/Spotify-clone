import React from "react";
import "./Main.css";
// login
import Login from "../Log in/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify";
// spotify api
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";
import { useDataLayerValue } from "../DataLayer";

const spotify = new SpotifyWebApi();

function Main() {
    // const [token, setToken] = useState(null);
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = " ";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });
            // setToken(_token);

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
                console.log("user :", user);
               
            });
            spotify.getUserPlaylists().then((playlists)=>{
                dispatch({
                    type : "SET_PLAYLISTS",
                    playlists : playlists,
                });
            });
        }
    }, []);
    

    return <div>{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default Main;
