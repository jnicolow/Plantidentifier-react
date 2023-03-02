import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



/* Icons */
import { Facebook, FilterRight } from 'react-bootstrap-icons';
import {Twitter} from 'react-bootstrap-icons';
import {Instagram} from 'react-bootstrap-icons';
import {People} from 'react-bootstrap-icons';
import {Search} from 'react-bootstrap-icons';
import {PeopleFill} from 'react-bootstrap-icons';
import {GeoAltFill} from 'react-bootstrap-icons';
import {ChatQuote} from 'react-bootstrap-icons';


import { ReactComponent as IconMenu } from './plantnet-logo.svg'

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <IconMenu width="10rem"></IconMenu>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><Search/>Identify</Nav.Link>
        <Container className="d-inline-flex">
          <Nav.Link className="mx-2"><FilterRight/>Explore</Nav.Link>
          <Nav.Link className="mx-2"><People/>Contributions</Nav.Link>
          <Nav.Link className="mx-2"><PeopleFill/>Groups</Nav.Link>
        </Container>
        <Nav.Link><GeoAltFill/>Geo<strong>Beta</strong></Nav.Link>


        <NavDropdown title={<><ChatQuote/>English</>}>
        </NavDropdown>
      </Nav>

      <Nav className="justify-content-end">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);


const MiddleSection = () => (
  <Container>
    <Row className="justify-content-center mx-5">
      <Col>
        <h1>Identify, explore and share your observations of wild plants</h1>
        <p>Pl@ntNet is a tool to help to identify plants with pictures. It is organized in different thematic and geographical floras. Choose the one that corresponds to your region or area of interest from the list below. If you don't know what to choose, select "World flora" which has the widest coverage but will give less accurate results than a more focused flora.</p>
      </Col>
      <Col>
        <Image src={require("./youtube_inbed.png")}/>
      </Col>
    </Row>
  </Container>
);

const Bottom = () => (
  <Container>
    <Row>
      <Col>
        <Image src={require("./latest-cont.png")}/>
      </Col>
      <Col>
        <div className="rounded gray-div shadow-sm p-3 mx-auto d-flex align-items-center justify-content-center flex-column">
          <h4 className="text-center mb-3">
            <Image src="./planet_logo_no_text.svg" width="37" alt=""/>
              "Try Pl@ntnet!"
          </h4>

          <div className="file-input shadow text-center">
            <h3>add / drop and image</h3>
          </div>

          <a href="https://identify.plantnet.org/" className="mt-3">or add an url</a>
        </div>
      </Col>
      <Col>
        <Image src={require("./latest-obs-spec.png")} />
      </Col>
    </Row>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container fluid>
    <TopMenu />
    <MiddleSection />
    <Bottom/>
  </Container>
);