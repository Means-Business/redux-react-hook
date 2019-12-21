import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions/todoActions';

import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => (
  <Container style={{ marginTop: '20px' }}>
    <Row>
      <Col>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </Col>
    </Row>
  </Container>
);

export default Footer;
