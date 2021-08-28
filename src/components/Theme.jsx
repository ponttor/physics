import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default class Theme extends React.Component {

  render() {

    return (
      <div className="mt-4">
        <Card style={{ width: '530px' }}>
          <div className="d-flex justify-content-left">
            <img className="flex-grow-1" variant="left" src={this.props.image} style={{ height: "10rem", width: "15rem" }} />
            <Card.Body className="flex-grow-0" >
              <Card.Title className="align-middle">{this.props.text}</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>

      </div>
    )
  }

}