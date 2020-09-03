import React from "react";
import { ls_SET, ls_GET } from "../../localstorage";
import { TableHead, TableContainer, Table, TableHeaderItems } from "../styled";
import { tableHeaders } from "../../constants/tableHeaders";
import { LineItem } from "./LineItem";
export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsList: [],
      favoriteTeams: []
    };
  }

  async componentDidMount() {
    window.addEventListener("beforeunload", () => this.handleLocalStorage());
    await this.callForTeams();
  }

  callForTeams = async () => {
    let list = [];
    const liked = ls_GET();

    await fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then(res => res.json())
      .then(json => {
        json.teams.map(team => {
          let teamObject = {
            idTeam: team.idTeam,
            strTeam: team.strTeam,
            intFormedYear: team.intFormedYear,
            strTeamBadge: team.strTeamBadge,
          };
          list.push(teamObject);
          return list;
        });
      });
    this.setState({
      favoriteTeams: liked ? liked : [],
      teamsList: list
    });
  };

  handleClick = teamId => {
    let favorites = [...this.state.favoriteTeams];
    let addFavorite = true;

    favorites.map((item, i) => {
      if (item === teamId) {
        favorites.splice(i, 1);
        return (addFavorite = false);
      }
    });

    if (addFavorite) favorites.push(teamId);

    this.setState({
      favoriteTeams: [...favorites]
    });
  };

  componentWillUnmount() {
    window.removeEventListener("beforeunload", () => this.handleLocalStorage());
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    ls_SET(this.state.favoriteTeams);
  };

  render() {
    return (
      <TableContainer>
        {!this.state.teamsList ? (
          <div>loading</div>
        ) : (
          <Table>
            <TableHead>
            <tr>
              {tableHeaders.map(item => (
                <TableHeaderItems key={Math.random()}>{item}</TableHeaderItems>
              ))}
              </tr>
            </TableHead>
            <LineItem
              teamsList={this.state.teamsList}
              handleLiking={this.handleClick}
              favoriteTeams={this.state.favoriteTeams}
            />
          </Table>
        )}
      </TableContainer>
    );
  }
}
