import React, { useContext } from "react";
import CardProfile from "./CardProfile";
import { DataContext } from "../App"; // import DataContext from App.js

const List = () => {
  const profiles = useContext(DataContext); // useContext to access DataContext
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {profiles.map((profile) => (
        <CardProfile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default List;
