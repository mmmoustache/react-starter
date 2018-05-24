import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Content from '../../components/ContentWrapper';
import Row from '../../components/Row';
import Column from '../../components/Column';

const Home = ({ title, content }) => (
  <Row>
    <Column small={12}>
      <Content>
        <Helmet defer={false}>
          <title>{title ? title : 'Homepage'}</title>
        </Helmet>

        { <h1>{title ? title : 'Homepage'}</h1> }

        {
          content ? 
            <p>{content}</p>
            : null
        }
      </Content>
    </Column>
  </Row>
);

Home.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

Home.defaultProps = {
  content: undefined,
  title: undefined,
};

export default Home;
