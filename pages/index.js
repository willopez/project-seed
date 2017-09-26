import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';

import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <Row>
      <Col md="9" xs="12">
        <h1>Welcome</h1>
        <p className="lead">Make something awesome!</p>
      </Col>
    </Row>
  </Layout>
);

export default Index;
