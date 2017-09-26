import Head from 'next/head';
import React from 'react';
import { Row, Col } from 'reactstrap';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
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

export default About;
