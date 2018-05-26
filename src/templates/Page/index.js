import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Content from '../../components/ContentWrapper';
import { Row, Column } from 'react-foundation';

const Page = ({ title, content }) => (
  <Row>
    <Column small={12}>
      <Content>
        <Helmet defer={false}>
          <title>{title ? title : 'Untitled Page'}</title>
        </Helmet>
        
        { title ? <h1>{title}</h1> : null }
        
        {
          content ? 
            <p>{content}</p>
            : null
        }
      </Content>
    </Column>
  </Row>
);

Page.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

Page.defaultProps = {
  content: undefined,
  title: undefined,
};

export default Page;
