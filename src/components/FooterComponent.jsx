import React from 'react'
import { Container } from 'react-bootstrap'

export default function footerComponent() {
  
  return (
    <>
      <footer className="bg-primary">
        <Container className="text-center">
          <span className="text-white">
            Developed by Arif Rachman Husen,{" "}
            <a
              href="https://github.com/arif05rachman/Beli-Bareng-FE"
              target="_blank"
              className="text-light"
            >
              Source code
            </a>
          </span>
        </Container>
      </footer>
    </>
  );
}