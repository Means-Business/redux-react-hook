import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

import { Container, Form, Button } from 'react-bootstrap';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <Container style={{ marginTop: '20px' }}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <Form.Group controlId="todo_input">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter todo task"
            ref={node => {
              input = node;
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>
    </Container>
  );
};

export default connect()(AddTodo);
