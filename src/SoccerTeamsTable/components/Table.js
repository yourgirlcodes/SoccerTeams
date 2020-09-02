import React, { useState, useEffect } from "react";
import { ls } from "../../localstorage";

export const Table = () => {
  const [teamsList, setTeamsList] = useState([]);

  useEffect(() => {
    let list = [];
    async function fetchData() {
      await fetch(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Israel"
      )
        .then(res => res.json())
        .then(json => {
          json.teams.map(team => {
            let teamObject = {
              id: team.idTeam,
              name: team.strTeam,
              founded: team.intFormedYear,
              crest: team.strTeamBadge
            };
            list.push(teamObject);
          });
        });
      return setTeamsList(list);
    }
    fetchData();
  }, []);

  const markToFavourites = teamId => {
    console.log(teamId, "favoourited!");
    ls(teamId);
  };

  return (
    <div>
      <div>
        {!teamsList ? (
          <div>loading</div>
        ) : (
          teamsList.map(team => {
            return (
              <div
                key={team.id}
                onClick={() => {
                  markToFavourites(team.id);
                }}
              >
                {team.name} {team.founded}
              </div>
            );
          })
        )}{" "}
      </div>
    </div>
  );
};
