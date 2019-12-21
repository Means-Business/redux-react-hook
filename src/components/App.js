import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <Row>
      <Col xs md={{ span: 8, offset: 2 }}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Col>
    </Row>
  </Container>
);

export default App;
