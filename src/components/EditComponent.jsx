import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, getUser } from "../store/actions";

export default function EditUserComponent(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(getUser(props.user.id))
    setShow(true)
  };
  // form
  const [name, setName] = useState(props.user.name);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);
  const [phone, setPhone] = useState(props.user.phone);
  const [website, setWebsite] = useState(props.user.website);
  const [addressStreet, setAddressStreet] = useState(props.user.address.street);
  const [addressSuite, setAddressSuite] = useState(props.user.address.suite);
  const [addressCity, setAddressCity] = useState(props.user.address.city);
  const [addressZipCode, setAddressZipCode] = useState(props.user.address.zipcode);
  const [company, setCompany] = useState(props.user.company.name);
  let user = {};
  useEffect(() => {
    user = {
      id: props.user.id,
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
      props.user,
      name,
      username,
      email,
      phone,
      website,
      addressStreet,
      addressSuite,
      addressCity,
      addressZipCode,
      company,
      editUser
  ]);
  const handleSubmit = () => {
    dispatch(editUser(user));
    handleClose();
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="website"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
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
                  value={addressStreet}
                />
                <Form.Label>
                  <em>Suite</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="suite"
                  onChange={(e) => setAddressSuite(e.target.value)}
                  value={addressSuite}
                />
                <Form.Label>
                  <em>City</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="city"
                  onChange={(e) => setAddressCity(e.target.value)}
                  value={addressCity}
                />
                <Form.Label>
                  <em>ZIP Code</em>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="zip code"
                  onChange={(e) => setAddressZipCode(e.target.value)}
                  value={addressZipCode}
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
                  value={company}
                />
              </Col>
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
