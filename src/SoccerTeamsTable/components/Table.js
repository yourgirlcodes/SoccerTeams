import React from "react";
import { ls_SET, ls_GET } from "../../localstorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {Crest, TableHeader, TableContainer} from '../styled'
import {tableHeaders} from '../../constants/tableHeaders';
import { Table } from '@material-ui/core';
import '../table.css'
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
    // saves if component has a chance to unmount
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    ls_SET(this.state.favoriteTeams);
  };

  render() {
    return (
      <div style={{height: "20vh"}}>
        {!this.state.teamsList ? (
          <div>loading</div>
        ) : (
          <table style={{height: "20vh"}}>
            <thead>
              <tr className="table-headers">
                {tableHeaders.map(item => <TableHeader>{item}</TableHeader>)}
              </tr>
            </thead>
            <tbody style={{height: "20vh"}}>
              {this.state.teamsList.map(team => {
                return (
                  <tr key={team.id}>
                    <td>{team.name} </td>
                    <td>{team.founded}</td>
                    <td>
                      <Crest src={team.crest} alt="crest" />
                    </td>
                    <td
                      onClick={() => {
                        this.handleClick(team.id);
                      }}
                    >
                      {this.state.favoriteTeams &&
                      this.state.favoriteTeams.includes(team.id) ? (
                        <FontAwesomeIcon icon={faHeart} onClick={() => {
                        this.handleClick(team.id);
                      }} color="red"/>
                      ) : (
                        <FontAwesomeIcon icon={faHeart} onClick={() => {
                        this.handleClick(team.id);
                      }} />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
