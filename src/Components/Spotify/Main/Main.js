import React from "react";
import "./Main.css";
// login
import Login from "../Log in/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../spotify";
// spotify api
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";

const spotify = new SpotifyWebApi();

function Main() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = " ";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                console.log("user :", user);
            });
        }

        console.log("token :", token);
    }, []);

    return <div>{token ? <Player /> : <Login />}</div>;
}

export default Main;
