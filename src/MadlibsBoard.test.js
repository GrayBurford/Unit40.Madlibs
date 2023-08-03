import React from "react";
import { render } from "@testing-library/react";
import MadlibsBoard from "./MadlibsBoard";

// smoke test
test('Renders without crashing', () => {
    render(<MadlibsBoard />);
})


// snapshot test
test('Matches snapshot', () => {
    const { asFragment } = render(<MadlibsBoard />);
    expect(asFragment()).toMatchSnapshot();
})