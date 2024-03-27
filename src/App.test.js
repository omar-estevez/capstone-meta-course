import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/main components/BookingForm';
import Main, { initializeTimes, updateTimes } from './components/Main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("BookingForm");
  expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm Time', () => {
  render(<Main />);
  const expectedInitialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const actualInitialTimes = initializeTimes();
  expect(actualInitialTimes).toEqual(expectedInitialTimes);
})

test('Renders the BookingForm Update Time', () => {
  render(<Main />);
  const selectedDate = '20:00'; // Example selected date
    const actualUpdatedTimes = updateTimes(selectedDate);
    expect(actualUpdatedTimes).toBe(selectedDate);
})