import React from 'react';
import { Helmet } from "react-helmet";
import Content from '../../components/ContentWrapper';
import { Row, Column } from 'react-foundation';

const PageNotFound = () => (
  <Row>
    <Column small={12}>
      <Content>
        <Helmet defer={false}>
          <title>404 - Page Not Found!</title>
        </Helmet>
        <h1>404</h1>
        <p>Sorry, the page you were looking for could not be found!</p>
      </Content>
    </Column>
  </Row>
);

export default PageNotFound;
