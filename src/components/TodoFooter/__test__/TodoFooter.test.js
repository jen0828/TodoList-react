import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

it ('should render the correct amount of incomplete tasks', async () => {
  render(<TodoFooter numberOfIncompleteTasks={5}/>);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});