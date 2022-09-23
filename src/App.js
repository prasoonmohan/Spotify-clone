
import React from "react";
import Main from "./Components/Spotify/Main/Main";
import { DataLayer } from "./Components/Spotify/DataLayer";

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <DataLayer initialState reducer>
                    <Main />
                </DataLayer>
            </React.StrictMode>
        </div>
    );
}

export default App;

