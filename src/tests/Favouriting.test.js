import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {LineItem} from "../SoccerTeamsTable/components/LineItem";

const teams = [ {
    idTeam: 133604,
    strTeam: 'Arsenal',
    intFormedYear: 1892,
    strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/a1af2i1557005128.png"
  }]
  

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes color when clicked", () => {
  const handleClick = jest.fn();
  act(() => {
    render(<LineItem handleLiking={handleClick} teamsList={teams}/>, container);
  });

  const td = document.querySelector("[data-testid='heart-icon']");
  const iconGrey = document.querySelector("[data-testid='heart-icon-grey']");
  const iconBlue = document.querySelector("[data-testid='heart-icon-blue']");

  expect(iconGrey).toBeInTheDocument();


  act(() => {
    td.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(iconGrey).toBeInTheDocument();
  //expect(iconBlue).toBeInTheDocument();


  act(() => {
    for (let i = 0; i < 5; i++) {
        td.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(handleClick).toHaveBeenCalledTimes(6);
  expect(iconGrey).toBeInTheDocument();
});