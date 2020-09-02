export const getTeamsList =   () => {

    let list = [];
     fetch(
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
console.log('list 1', list)
        });

        console.log('list 2', list)
        return list

    })

    console.log('list 3', list)

    }