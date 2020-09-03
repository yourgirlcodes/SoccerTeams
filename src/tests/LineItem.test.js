import React from 'react'
import { render } from '@testing-library/react'
import {LineItem} from '../SoccerTeamsTable/components/LineItem'
import "node-fetch";
import {teams} from '../constants/teamsMock'

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