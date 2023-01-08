import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavbarHeader(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          X
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li className='active'>Home</li>
              <li>About us</li>
              <li>Our Products</li>
              <li>Services</li>
              <li>News</li>
              <li>Sustainability</li>
              <li>Contact</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}