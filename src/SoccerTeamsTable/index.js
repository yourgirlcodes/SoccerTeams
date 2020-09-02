import React from "react";
import Table from "./components/Table";

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
