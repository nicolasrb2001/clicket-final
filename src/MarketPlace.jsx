import React from "react";
import Clubs from "./components/clubs"



export const MarketPlace = (props) => {
  return (
    <div > 
      
      <Clubs setProfile = {props.setProfile} profile = {props.profiles}></Clubs>
    </div>
  );
};
