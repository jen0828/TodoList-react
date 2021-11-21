import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

describe("TodoFooter", ()=> {
  it ('should render the correct amount of incomplete tasks', async () => {
    render(<TodoFooter numberOfIncompleteTasks={5}/>);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it ('should render "task" when the number of incomplete taks is one', async () => {
    render(<TodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByText(/ task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

