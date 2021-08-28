import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default class LessonPreview extends React.Component {

  render() {

    return (

      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">{this.props.number}</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <h5>{this.props.lesson}</h5>
            <div className="text-muted">{this.props.description}</div>
          </div>
          <div >
            <div><a href="/electricity-1" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/2TuxXao5zWgGZ4Hj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >
    )
  }

}