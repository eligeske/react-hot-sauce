import React from 'react';
import { Row, Col, Container, ContainerFluid } from '../../../components/bootstrap/layout';
import { Panel, PanelHeading, PanelBody } from '../../../components/bootstrap/panel';
import './index.less';

export default function Home() {
  return (
    <section className="home-page">
      <div className="jumbotron">
        <Container>
          <Col>
            <h1>React Hot Sauce</h1>
          </Col>
          <Col>
            <p>React, React&mdash;Router, Redux &amp; Bootstrap by example</p>
          </Col>
        </Container>
      </div>
      <ContainerFluid>
        <Row>
          <Col className="intro-blurb col-sm-6 col-md-3">
            <Panel>
              <PanelHeading><h2>react</h2></PanelHeading>
              <PanelBody>
                <p>The entire world knows who facebook is. Because of react right? Ok, maybe not.
                But that doesn&apos;t make it any less cooler! It is the shadow dom driven component
                library that&apos;ll blow your momma&apos;s socks off!</p>
                <p>The base of this entire site and most likely why YOU are here :)</p>
              </PanelBody>
            </Panel>
          </Col>
          <Col className="intro-blurb col-sm-6 col-md-3">
            <Panel>
              <PanelHeading><h2>react-router-dom v4</h2></PanelHeading>
              <PanelBody>
                <p>React Router provides an extremely easy way to create a single
                page application with nested routes.</p>
                <p>We will create our own wrappers to links, use its matching functions,
                and nest a bunch of routes!</p>
              </PanelBody>
            </Panel>
          </Col>
          <Col className="intro-blurb col-sm-6 col-md-3">
            <Panel>
              <PanelHeading><h2>redux</h2></PanelHeading>
              <PanelBody>
                <p>Using react along with react-redux managing application state
                has never been easier.</p>
              </PanelBody>
            </Panel>
          </Col>
          <Col className="intro-blurb col-sm-6 col-md-3">
            <Panel>
              <PanelHeading><h2>bootstrap 3.x</h2></PanelHeading>
              <PanelBody>
                <p>Dust off the ole bootstrap ui framework. Even with version 4 right
                around the corner and other options such as material-ui, bootstrap is
                still well maintained and highly effective.</p>
              <p>Check out the source and learn how to wrap it into reusable pure functions and components.</p>
              </PanelBody>
            </Panel>
          </Col>
        </Row>
        <Row>
          <section>
            <h2>Some Other Stuff</h2>
            <p>...add copy</p>
            <p>...add copy</p>
            <p>...add copy</p>
          </section>
        </Row>
      </ContainerFluid>
    </section>
  );
}
