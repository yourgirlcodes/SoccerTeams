import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Crest, TableRow, TableBody, TD } from "../styled";

export const LineItem = ({ handleLiking, favoriteTeams, teamsList }) => {
  const handleClick = teamId => {
    handleLiking(teamId);
  };

  return (
    <TableBody >
      {teamsList.map(team => {
        return (
          <TableRow data-testid="teams-row"
            key={team.idTeam}
            onClick={() => {
              handleClick(team.idTeam);
            }}
          >
            <TD>{team.strTeam} </TD>
            <TD>{team.intFormedYear}</TD>
            <TD>
              <Crest src={team.strTeamBadge} alt="crest" />
            </TD>
            <TD>
              {favoriteTeams && favoriteTeams.includes(team.idTeam) ? (
                <FontAwesomeIcon icon={faHeart} color="blue" />
              ) : (
                <FontAwesomeIcon icon={faHeart} color="lightgrey" />
              )}
            </TD>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
