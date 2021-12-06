import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";


function Header() {
  return (
    <div className="Header-Icons">
      <IconButton>
        <PersonIcon fontSize="large" />
      </IconButton>

      <img
        className="tinder-logo"
        src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
        alt=""
      />

      {/* <Link to="/chat"> */}
      
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      {/* </Link> */}
    </div>
  );
}

export default Header;
