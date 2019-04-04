import React from 'react';
import ReactDOM from 'react-dom';
import { List } from "./components/List";
import App from './App';
import {render, fireEvent, cleanup} from 'react-testing-library'

const setup = () => {
  const utils = render(<List />)
  const addBtn = utils.getByText('Add')
  const removeBtn = utils.getByText('Remove')
  const input = utils.getByTestId('todo-text')
  return {
    addBtn,
    removeBtn,
    input,
    utils,
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Adds an item', () => {
  const {addBtn, removeBtn, input, utils} = setup();
  fireEvent.change(input, {target: {value: 'newItem'}});
  expect(input.value).toBe('newItem');
  fireEvent.click(addBtn);
  const item = utils.getByText('newItem')
  expect(!!item).toBeTruthy();
});


test('remove an item', () => {
  const {addBtn, removeBtn, input, utils} = setup();
  fireEvent.change(input, {target: {value: 'newItem'}});
  expect(input.value).toBe('newItem');
  fireEvent.click(addBtn);
  fireEvent.click(removeBtn);
  const item = utils.getByText('newItem')
  expect(!!item).toBeFalsy();
});

