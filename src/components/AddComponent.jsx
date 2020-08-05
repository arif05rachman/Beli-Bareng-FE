import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../store/actions";


export default function AddUserComponent(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  // form
  const [name, setName] = useState('')
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressSuite, setAddressSuite] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [company, setCompany] = useState("");
  let user = {}
  useEffect(() => {
    user = {
      name: name,
      username: username,
      email: email,
      address: {
        street: addressStreet,
        suite: addressSuite,
        city: addressCity,
        zipcode: addressZipCode,
      },
      phone: phone,
      website: website,
      company: {
        name: company,
      },
    };
  }, [
    name,
    username,
    email,
    phone,
    website,
    addressStreet,
    addressSuite,
    addressCity,
    addressZipCode,
    company
  ]);
  const handleSubmit = () => {
    dispatch(addUser(user))
    handleClose()
  }
  return (
    <>
      <Nav.Link onClick={handleShow}> ADD USER</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="website"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrxidAddress">
              <Form.Label>Address</Form.Label>
              <Col>
                <Form.Label>
                  <em>Street</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="street"
                  onChange={(e) => setAddressStreet(e.target.value)}
                />
                <Form.Label>
                  <em>Suite</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="suite"
                  onChange={(e) => setAddressSuite(e.target.value)}
                />
                <Form.Label>
                  <em>City</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="city"
                  onChange={(e) => setAddressCity(e.target.value)}
                />
                <Form.Label>
                  <em>ZIP Code</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="zip code"
                  onChange={(e) => setAddressZipCode(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="company name"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
