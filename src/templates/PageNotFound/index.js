import React from 'react';
import { Helmet } from "react-helmet";
import Content from '../../components/ContentWrapper';

const PageNotFound = () => (
  <div className="row">
    <div className="column small-12">
      <Content>
        <Helmet defer={false}>
          <title>404 - Page Not Found!</title>
        </Helmet>
        <h1>404</h1>
        <p>Sorry, the page you were looking for could not be found!</p>
      </Content>
    </div>
  </div>
);

export default PageNotFound;
