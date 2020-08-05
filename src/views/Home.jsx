import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser } from '../store/actions'

import { Container, Col, Spinner } from 'react-bootstrap'
import Navbar from "../components/NavbarComponent";
import Card from "../components/CardComponent";
import Footer from "../components/FooterComponent";

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListUser('https://jsonplaceholder.typicode.com/users'))
  }, [])
  const users = useSelector((state) => state.listUser.users);
  return (
    <>
      <Navbar />
      <Container fluid className="my-3">
          <div
            className="text-center mx-2 mt-5 row justify-content-center"
          >
          {users ? (
            users.map((user) => {
              return (
                  <Card user={user} />
                  );
                })
                ) : (
                  <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}