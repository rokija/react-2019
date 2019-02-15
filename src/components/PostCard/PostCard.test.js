import React from "react";
import { shallow } from "enzyme";
import PostCard from "./PostCard";

describe("PostCard component", () => {
  const component = shallow(<PostCard />);

  it("renders properly", () => {
    expect(component.length).toBe(1);
  });
});
