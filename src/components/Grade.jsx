import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default class Grade extends React.Component {

  render() {

    return (
      <>

      <div className="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
      <h4 className="text-dark text-center">{this.props.text}</h4>
      <img href="/2" className="h-350" variant="left" src={this.props.image} style={{ height: "20rem" }} />
      </div>


        {/* <container className="d-flex row no-gutters shadow-sm x-shadow-fade-in" style={{ width: '350px', height: "350" }}>
          <div className="flex-grow-1">
            <h4 className="text-dark text-center">{this.props.text}</h4>
          </div>
          <div>
            <img href="/2" className="h-350" variant="left" src={this.props.image} style={{ height: "20rem" }} />
          </div>
        </container> */}

        {/* <Container className="d-flex"> 
      <img 
      src={logo} 
      height="30"
      weight="30"
      alt="logo"
      />
      <a href="/" className="container-xl pt-5">This is some text within a card body.</a>
      </Container> */}
      </>
    )
  }

}