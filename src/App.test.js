import React from 'react';
import { render} from '@testing-library/react';
import App from './App';


// smoke test
test('Renders without crashing', () => {
    render(<App />);
})


// snapshot test
test('Matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
})