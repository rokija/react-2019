import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PostCard from "./PostCard";

describe("PostCard component", () => {
  const component = shallow(<PostCard />);

  it("renders properly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
