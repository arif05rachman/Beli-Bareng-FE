import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import Swal from "sweetalert2";

import Detail from './DetailComponent'
import Edit from "./EditComponent";
import { deleteUser } from '../store/actions'
import { useDispatch  } from 'react-redux'

export default function CardComponent(props) {
  const dispatch = useDispatch()
  const { id, name, username, email, phone, website, company } = props.user;

  const handleDelete = () => {
    // setShow(true);
    Swal.fire({
      title: `Are you sure to delete "${name}"?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteUser(id));
        Swal.fire("Deleted!",  `"${name}" has been deleted.`, "success");
      }
    })

  };
  return (
    <>
      <div className="col my-2 d-flex justify-content-center">
        <Card className="mb-3 shadow-sm w-100">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Username</td>
                    <td>{username}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td>{website}</td>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td>{company.name}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <div className="d-flex justify-content-around">
              <Detail id={id} />
              <Edit user={props.user} />
              <Button variant="danger" onClick={() => handleDelete()}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}