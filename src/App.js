import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TodoApp from './components/App';

import store from './store';

// Sample
// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions/todoActions';

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// unsubscribe();

// end sample

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row>
            <Col xs md={{ span: 8, offset: 2 }}>
              <h1>redux react</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <TodoApp />
    </Provider>
  );
}

export default App;
