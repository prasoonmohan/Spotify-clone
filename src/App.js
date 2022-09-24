
import React from "react";
import Main from "./Components/Spotify/Main/Main";
import { DataLayer } from "./Components/Spotify/DataLayer";
import reducer,{ initialState } from "./Components/Spotify/reducer";

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <DataLayer initialState={initialState} reducer={reducer}>
                    <Main />
                </DataLayer>
            </React.StrictMode>
        </div>
    );
}

export default App;
