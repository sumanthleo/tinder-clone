import React from "react";
import "./Buttons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/StarRate";
import FavIcon from "@mui/icons-material/Favorite";
import FlashIcon from "@mui/icons-material/FlashOn";



function Bottons() {
  return (
    <div  className="icons">
      <IconButton style={{color:'red'}}>
        <ReplayIcon fontSize="large"/>
      </IconButton>

      <IconButton style={{color:'Blue'}}>
        <CloseIcon fontSize="large"/>
      </IconButton>

      <IconButton style={{color:'green'}}>
        <StarIcon fontSize="large"/>
      </IconButton>

      <IconButton style={{color:'black'}}>
        <FavIcon fontSize="large"/>
      </IconButton>

      <IconButton style={{color:'orange'}}>
        <FlashIcon fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default Bottons;
