import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "./../../DataLayer";
import "./Hamberger.css"

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
         {/* <button class="hamburger hamburger--spring" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button> */}
            <div className="header__left">
           
                <SearchIcon />
                <input type="text" placeholder="Search for Artists , Songs or podcasts" />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
