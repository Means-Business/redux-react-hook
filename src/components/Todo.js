import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';

const Todo = ({ onClick, completed, text }) => (
  <ListGroup.Item
    variant="primary"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListGroup.Item>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
