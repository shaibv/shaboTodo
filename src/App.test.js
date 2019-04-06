import React from 'react';
import ReactDOM from 'react-dom';
import { List } from "./components/List";
import App from './App';
import {render, fireEvent, cleanup} from 'react-testing-library'

const setup = () => {
  const utils = render(<List />)
  const addBtn = utils.getByText('Add')
  const input = utils.getByTestId('todo-text')
  return {
    addBtn,
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
  const {addBtn, input, utils} = setup();
  fireEvent.change(input, {target: {value: 'newItem'}});
  expect(input.value).toBe('newItem');
  fireEvent.click(addBtn);
  const item = utils.getByText('newItem')
  expect(!!item).toBeTruthy();
});


test('remove an item', async() => {
  const {addBtn, input, utils} = setup();
  fireEvent.change(input, {target: {value: 'test'}});
  // expect(input.value).toBe('newItem');
  fireEvent.click(addBtn);
  const removeBtn = utils.getByText('Remove')
  
  fireEvent.click(removeBtn);
  await new Promise((resolve)=> setTimeout(() => {
    resolve();
  }, 1000));
  const item = utils.getByText('test');
  
  expect(!!item).toBeFalsy();
});

