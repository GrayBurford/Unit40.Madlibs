import React from "react";
import { render } from "@testing-library/react";
import MadlibsForm from "./MadlibsForm";

// smoke test
test('Renders without crashing', () => {
    render(<MadlibsForm />);
})


// snapshot test
test('Matches snapshot', () => {
    const { asFragment } = render(<MadlibsForm />);
    expect(asFragment()).toMatchSnapshot();
})