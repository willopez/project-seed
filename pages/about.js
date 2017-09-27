import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';

import Layout from '../components/layout';

export default class About extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return { title: 'About' };
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <Layout>
        <Helmet title={title} />
        <style jsx>{`
          .component-scoped-css {
            border: 2px solid aqua;
            padding: 5px;
          }
        `}</style>
        <Row>
          <Col md="9" xs="12">
            <h1>About</h1>
            <p className="component-scoped-css">Example of scoped CSS.</p>
          </Col>
        </Row>
      </Layout>
    );
  }
}
