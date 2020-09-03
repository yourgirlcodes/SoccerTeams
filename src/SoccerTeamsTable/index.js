import React from "react";
import DataTable from "./components/Table";
import { SoccerTeamHeading } from "./styled";

export const SoccerTeamsTable = () => {
  return (
    <>
      <SoccerTeamHeading>English Premier League Soccer Teams</SoccerTeamHeading>
      <DataTable />
    </>
  );
};
