import React, { useState, useEffect } from "react";
import { ls_SET, ls_GET, ls_CHECK } from "../../localstorage";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons";
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsList: [],
      favoriteTeams: []
    };
  }

  async componentDidMount() {
    let list = [];
    const liked = ls_GET();

    await fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then(res => res.json())
      .then(json => {
        json.teams.map(team => {
          let teamObject = {
            id: team.idTeam,
            name: team.strTeam,
            founded: team.intFormedYear,
            crest: team.strTeamBadge,
            liked: "hidden"
          };
          list.push(teamObject);
          return list;
        });
      });
    this.setState(
      {
        favoriteTeams: liked ? liked : [],
        teamsList: list
      },
      () => console.log("state CDM", this.state)
    );
  }


  handleClick = teamId => {
    let favorites = [...this.state.favoriteTeams];
    let addFavorite = true;

    favorites.map((item, i) => {
      if (item === teamId) {
        favorites.splice(i, 1);
        addFavorite = false;
      }
    });

    if (addFavorite) favorites.push(teamId);

    this.setState(
      {
        favoriteTeams: [...favorites]
      },
      () => console.log("favorites", favorites)
    );
  };


  render() {
    console.log("this.state on render", this.state);
    return (
      <div>
        {!this.state.teamsList ? (
          <div>loading</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Founding Year</th>
                <th>Crest</th>
                <th>Favorited?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamsList.map(team => {
                return (
                  <tr key={team.id}>
                    <td>{team.name} </td>
                    <td>{team.founded}</td>
                    <td></td>
                    <td
                      onClick={() => {
                        this.handleClick(team.id);
                      }}
                    >
                      {this.state.favoriteTeams &&
                      this.state.favoriteTeams.includes(team.id) ? (
                        <p>Favorite</p>
                      ) : (
                        <p>Unfavorite</p>
                      )}
                      {!this.state.favoriteTeams && <div>no</div>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        )
      </div>
    );
  }
}
