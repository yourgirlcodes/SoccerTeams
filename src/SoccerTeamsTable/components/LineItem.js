import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Crest, TableRow, TableBody, TD } from "../styled";

export const LineItem = ({ handleLiking, favoriteTeams, teamsList }) => {
  const handleClick = teamId => {
    handleLiking(teamId);
  };

  return (
    <TableBody>
      {teamsList.map(team => {
        return (
          <TableRow
            key={team.id}
            onClick={() => {
              handleClick(team.id);
            }}
          >
            <TD>{team.name} </TD>
            <TD>{team.founded}</TD>
            <TD>
              <Crest src={team.crest} alt="crest" />
            </TD>
            <TD>
              {favoriteTeams && favoriteTeams.includes(team.id) ? (
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
