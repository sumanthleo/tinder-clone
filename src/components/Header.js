import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="Header-Icons">
      <Link to={'/login'}>
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link to={"/"}>
        <img
          className="tinder-logo"
          src="https://brandpalettes.com/wp-content/uploads/2018/10/TinderLogo.png"
          alt=""
        />
      </Link>

      <Link to={"/chat"}>
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
