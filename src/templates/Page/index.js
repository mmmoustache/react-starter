import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Content from '../../components/ContentWrapper';

const Page = ({ title, content }) => (
  <div className="row">
    <div className="column small-12">
      <Content>
        <Helmet>
          <title>{title ? title : 'Untitled Page'}</title>
        </Helmet>
        
        { title ? <h1>{title}</h1> : null }
        
        {
          content ? 
            <p>{content}</p>
            : null
        }
      </Content>
    </div>
  </div>
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
