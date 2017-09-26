import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import Menu from './Menu';

const Layout = props => (
  <div>
    <Menu />
    <Container>{props.children}</Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
