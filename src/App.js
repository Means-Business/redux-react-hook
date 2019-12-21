import React from 'react';
import './App.css';

import store from './store';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions/todoActions';

import { Container, Row, Col } from 'react-bootstrap';

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs md={{ span: 8, offset: 2 }}>
            <h1>redux react</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
