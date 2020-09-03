### React project using RESTful API

This is a react project using a RESTful API which:
1. pulls a list of soccer teams and shows their: name, founding year, and crest
2. allows the user to favorite and unfavorite the teams

The project uses local storage to remember the user's favorited teams

## Architecture:
- App
- constants
- localstorage
- SoccerTeamsTable
        - components
            - LineItem
            - Table
- tests

## Technologies/Stack
- React.js
- styled-components
- @testing-library/react and react-dom/test-utils for some tests
- RESTful API


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the following API:
"https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"

## To run: npm start
## To run tests: npm run test
