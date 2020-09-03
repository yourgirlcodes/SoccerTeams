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
            <TD data-testid="heart-icon">
              {favoriteTeams && favoriteTeams.includes(team.idTeam) ? (
                <FontAwesomeIcon icon={faHeart} color="blue" id="blue" data-testid="heart-icon-blue"/>
              ) : (
                <FontAwesomeIcon icon={faHeart} color="lightgrey"  id="grey" data-testid="heart-icon-grey"/>
              )}
            </TD>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
