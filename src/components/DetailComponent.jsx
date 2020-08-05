import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../store/actions'

export default function DetailComponent(props) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    dispatch(getUser(props.id))
  };
  const user = useSelector(
    (state) => state.listUser.user
  );
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detail
      </Button>
      {user.company ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{user.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    {user.address.suite}, St. {user.address.street},{" "}
                    {user.address.city} ({user.address.zipcode})
                  </td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>{user.website}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{user.company.name}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
