
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Card, Button } from 'react-bootstrap';

import Head from '../components/Head.jsx';
import elec from '../images/themes/elec.jpg'
import molecul from '../images/themes/molecul.jpg'
import magnetic from '../images/themes/magnet.png'
import waves from '../images/themes/waves.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <>

<div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
          <Head text="Темы" />
          <div className="d-flex flex-wrap justify-content-around">
<a className="d-block text-decoration-none text-dark" href="/electricity">


            <div role="button" href="/electricity" className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4 " style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={elec} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Электричество</div>
                  <div className="small text-muted mb-3">Разобраться в том, что такое электрическое взаимодействие и как оно проявляется.</div>
                </div>
              </div>
            </div></a>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={molecul} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Молекулярная физика</div>
                  <div className="small text-muted mb-3">Узнать о молекулярном строении веществ и их свойствах.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={waves} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Колебания и Волны</div>
                  <div className="small text-muted mb-3">Научиться описывать колебательные движения и волны.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={magnetic} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Электромагнетизм</div>
                  <div className="small text-muted mb-3">Понять принцип проявления электромагнитных явлений в природе</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </>
    )
  }
}