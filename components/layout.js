import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = props => (
  <div className="cover-container">
    <Header />
    <main role="main" className="inner cover">
      {props.children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
