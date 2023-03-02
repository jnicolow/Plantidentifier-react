import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
// import {Image} from 'react-bootstrap';


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
  <h1> Plant Identifier</h1>
  // <Navbar bg="light" expand="lg">
  //   <Container>
  //     <Nav className="me-auto">
  //       <IconMenu width="10rem"></IconMenu>
  //     </Nav>
  //     <Nav className="justify-content-end">
  //       <Nav.Link><Search/>Identify</Nav.Link>
  //       <Container className="d-inline-flex">
  //         <Nav.Link className="mx-2"><FilterRight/>Explore</Nav.Link>
  //         <Nav.Link className="mx-2"><People/>Contributions</Nav.Link>
  //         <Nav.Link className="mx-2"><PeopleFill/>Groups</Nav.Link>
  //       </Container>
  //       <Nav.Link><GeoAltFill/>Geo<strong>Beta</strong></Nav.Link>
  //
  //
  //       <NavDropdown title={<><ChatQuote/>English</>}>
  //       </NavDropdown>
  //     </Nav>
  //
  //     <Nav className="justify-content-end">
  //       <Nav.Link><Facebook/></Nav.Link>
  //       <Nav.Link><Twitter/></Nav.Link>
  //       <Nav.Link><Instagram/></Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TopMenu />);