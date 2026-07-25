import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import TestUnitFirstTestGreeting from './01-writing-our-first-test/TestUnitFirstTest'
import TestUnitTestAsAsync from './02-testing-async-code/TestUnitTestAsync';
import TestUnitTestMocksAsync from './03-working-with-mocks/TestUnitTestMocks';

describe('Test component', () => {



test('greetings component renders Hello World as a text', () => {
  // Arrange
  render(<TestUnitFirstTestGreeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});


test('greetings component renders "Changed" if the button was clicked', () => {
  // Arrange
  render(<TestUnitFirstTestGreeting />);

  // Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement)

  // Assert

  
  const outputElement = screen.queryByText('It/s good to see you',{exact:false});
  expect(outputElement).toBeNull();
});


test('async component renders posts if request succeeds', async () => {
  render(<TestUnitTestAsAsync />)

  const listItemElements = await screen.findAllByRole('listitem');
  expect(listItemElements).not.toHaveLength(0);
});


test('mock component posts if request succeeds', async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => [{ id: 'p1', title: 'First post' }],
  });
  render(<TestUnitTestMocksAsync />);

  const listItemElements = await screen.findAllByRole('listitem');
  expect(listItemElements).not.toHaveLength(0);
});

});
