import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardCvv from '../components/CardCvv';

// Mock the Cashfree load and create functions
jest.mock('@cashfreepayments/cashfree-js', () => ({
  load: jest.fn(() => Promise.resolve({
    create: jest.fn(() => ({
      mount: jest.fn(),
      on: jest.fn(),
    })),
  })),
}));

const mockStore = configureStore([]);
const store = mockStore({
  card: {
    theme: 'default',  // mock theme or whatever you use
    // add other needed state fields if your selector uses them
  },
});

describe('CardCvv Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CardCvv />
      </Provider>
    );

    expect(screen.getByTestId('cardCvv')).toBeInTheDocument();
  });
});
