import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import AddUser from './AddComponent'

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <AddUser />
        </Nav>
      </Navbar>
    </>
  );
}