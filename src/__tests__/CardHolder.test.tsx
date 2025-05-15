import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardHolder from '../components/CardHolder';

// Mock Cashfree load and create functions
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
    theme: 'default',  // match your actual initial state here
  },
});

describe('CardHolder Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CardHolder />
      </Provider>
    );
    expect(screen.getByTestId('cardHolder')).toBeInTheDocument();
  });
});
