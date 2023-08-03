import React from "react";
import { render } from "@testing-library/react";
import Story from "./Story";

// smoke test
test('Renders without crashing', () => {
    render(<Story />);
})


// snapshot test
test('Matches snapshot', () => {
    const { asFragment } = render(<Story />);
    expect(asFragment()).toMatchSnapshot();
})