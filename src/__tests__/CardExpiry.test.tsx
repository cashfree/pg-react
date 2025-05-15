import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardExpiry from '../components/CardExpiry';

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
    theme: 'default',  // adjust based on your actual initial state
  },
});

describe('CardExpiry Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CardExpiry />
      </Provider>
    );
    expect(screen.getByTestId('cardExpiry')).toBeInTheDocument();
  });
});
