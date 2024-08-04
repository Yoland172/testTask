import {  render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import '@testing-library/jest-dom';
import Loader from '../Loader';

describe('Loader', () => {
  test('renders without crashing', () => {
    render(<Loader/>);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});