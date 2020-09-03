import styled from "styled-components";

export const Crest = styled.img`
  height: 5vw;
  width: 5vw;
`;

export const TableHeaderItems = styled.th`
  @media (max-width: 768px) {
    background-color: transparent;
    border-bottom: 1px solid lightgray;
  }
  width: 30vw;
  border-bottom: 4px solid white;
  padding-bottom: 2%;
  padding-top: 2%;
  margin: 0;
  background-color: aliceblue;
`;

export const TableContainer = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  height: 60vh !important;
  padding-top: 5vw;
`;

export const TableRow = styled.tr`
  @media (max-width: 768px) {
    :nth-of-type(odd) {
      background-color: aliceblue;
    }
  }
  :hover {
    background-color: aliceblue;
  }
`;

export const Table = styled.table`
  @media (max-width: 768px) {
    height: 100% !important;
  }
  margin-left: auto;
  margin-right: auto;
  height: 80% !important;
  border-spacing: 0 !important;
`;

export const TableBody = styled.tbody`
  height: 100% !important;
  margin-top: 8vh !important;
  display: block;
  overflow: scroll;
`;

export const TableHead = styled.thead`
  position: fixed;
  width: 80vw;
`;

export const TD = styled.td`
  border-bottom: 0.1px solid lightgrey;
  text-align: center;
  width: 30vw;
  padding-bottom: 2%;
  padding-top: 2%;
`;

export const SoccerTeamHeading = styled.div`
  text-align: center;
  font-size: 4vw;
  font-weight: 400;
  margin-top: 10vw;
`;
