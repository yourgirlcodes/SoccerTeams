import React, { useState, useEffect } from "react";
import { getTeamsList } from "../api";
import { ls } from "../localstorage";
import Table from "./components/Table";
import { FavouritesList } from "./components/FavouritesList";

export class SoccerTeamsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        English Premier League Soccer Teams
        <Table />
        {/* <FavouritesList /> */}
      </div>
    );
  }
}
