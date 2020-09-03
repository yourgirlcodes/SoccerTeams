import React from 'react'
import { render } from '@testing-library/react'
import { FetchMock } from '@react-mock/fetch'
import {LineItem} from '../SoccerTeamsTable/components/LineItem'
import "node-fetch";

const teams = [
  {
    idTeam: 133604,
    strTeam: 'Arsenal',
    intFormedYear: 1892,
    strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/a1af2i1557005128.png"
  },
  {
    idTeam: 133601,
    strTeam: 'Ervin Howell',
    intFormedYear: 'Aston Villa',
    strTeamBadge:"https://www.thesportsdb.com/images/media/team/badge/aofmzk1565427581.png"
  },
]

const renderTeams = () => {
    return render(

        <LineItem teamsList={teams} />
    )
  }

  test(`should render the teams list`, async () => {
    const { findAllByTestId} = renderTeams()
    let teamsList = await findAllByTestId('teams-row')
    console.log(teamsList)
    expect(teamsList.length).toEqual(teams.length)
  })