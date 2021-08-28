import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default class Lesson extends React.Component {

  render() {

    return (
      <>
        <div className="container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">{this.props.title}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text">{this.props.text}</p>

                </div>
              </div>

            </main>
          </div>
        </div>
      </>
    )
  }

}