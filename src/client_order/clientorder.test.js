import React from 'react';
import ReactDOM from 'react-dom';
import Clientorder from './clientorder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clientorder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
