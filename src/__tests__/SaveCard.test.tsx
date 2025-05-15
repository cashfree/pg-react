import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SaveCard from '../components/SaveCard';

jest.mock('@cashfreepayments/cashfree-js', () => ({
  load: jest.fn(() => Promise.resolve({
    create: jest.fn(() => ({
      mount: jest.fn(),
    })),
  })),
}));

const mockStore = configureStore([]);
const store = mockStore({
  card: {
    theme: 'default',
  },
});

describe('SaveCard Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <SaveCard />
      </Provider>
    );
    expect(screen.getByTestId('save')).toBeInTheDocument();
  });
});
