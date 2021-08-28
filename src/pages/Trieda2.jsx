import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Head from '../components/Head.jsx';
import Theme from '../components/Theme.jsx';

import kinematic from '../images/themes/kinematic.jpg'
import dynamics from '../images/themes/dynamics.jpg'
import energy from '../images/themes/energy2.jpg'
import elec from '../images/themes/elec.jpg'


export default class Trieda2 extends React.Component {
  render() {
    return (
      <>

        <div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
          <Head text="Темы" />
          <div className="d-flex flex-wrap justify-content-around">

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4 " style={{ width: '35rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={kinematic} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Кинематика</div>
                  <div className="small text-muted mb-3">Научиться описывать движение тела в пространстве.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '35rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={dynamics} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Динамика</div>
                  <div className="small text-muted mb-3">Определять силы, действующие на тело.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '35rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={energy} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Законы сохранения</div>
                  <div className="small text-muted mb-3">Узнать о законах сохранения импульса и энергии.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '35rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={elec} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Электричество</div>
                  <div className="small text-muted mb-3">Разобраться в том, что такое электрическое взаимодействие.</div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </>
    )
  }

}