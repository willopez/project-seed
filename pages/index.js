import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';

import Layout from '../components/layout';

export default class index extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: 'Home' };
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <Layout>
        <Helmet title={title} />
        <Row>
          <Col md="9" xs="12">
            <h1>Welcome</h1>
            <p className="lead">Make something awesome!</p>
          </Col>
        </Row>
      </Layout>
    );
  }
}
