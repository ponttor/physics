import React from 'react';
import { Container } from 'react-bootstrap';

export default class Head extends React.Component {

  render() {
    return (
      <>
      <Container className="mt-5, mb-5 d-flex justify-content-center"> 
      <h1 className="text-dark">{this.props.text}</h1>
      </Container>
      </>
    )
  }

}