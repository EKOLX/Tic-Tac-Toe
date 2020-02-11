import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

test("Contains the GameSizer", () => {
  expect(wrapper.find("GameSizer")).toHaveLength(1);
});
