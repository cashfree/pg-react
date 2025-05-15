import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardNumber from '../components/CardNumber';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // or use your actual store if needed

const mockStore = configureStore([]);

describe('CardNumber Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      card: {
        theme: 'default', // mock initial state
      },
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CardNumber />
      </Provider>
    );
    expect(screen.getByTestId('cardNumber')).toBeInTheDocument();
  });

  it('mounts the Cashfree cardNumber field', () => {
    render(
      <Provider store={store}>
        <CardNumber />
      </Provider>
    );
    const cardField = screen.getByTestId('cardNumber');
    expect(cardField).toBeInTheDocument();
  });
});

