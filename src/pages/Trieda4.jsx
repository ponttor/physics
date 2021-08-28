import React from 'react';
import { Container } from 'react-bootstrap';
import Head from '../components/Head.jsx';
import Theme from '../components/Theme.jsx';

import atom from '../images/themes/atom2.jpg'
import magnetic from '../images/themes/magnet.png'
import lenses from '../images/themes/lenses.png'
import emw from '../images/themes/emw2.jpg'


export default class Trieda4 extends React.Component {
  render() {
    return (
      <>
<div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
          <Head text="Темы" />
          <div className="d-flex flex-wrap justify-content-around">
<a className="d-block text-decoration-none text-dark" href="/electricity">


            <div role="button" href="/electricity" className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4 " style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={magnetic} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Электромагнетизм</div>
                  <div className="small text-muted mb-3">Понять принцип проявления электромагнитных явлений в природе.</div>
                </div>
              </div>
            </div></a>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={lenses} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Линзы</div>
                  <div className="small text-muted mb-3">Узнать основные законы преломления лучей света в линзах.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={emw} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Электромагнитные волны</div>
                  <div className="small text-muted mb-3">Разобраться в том, что из себя представляет свет и как он устроен.</div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm x-shadow-fade-in bg-white d-flex flex-row mb-4" style={{ width: '38rem' }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={atom} className="img-fluent" style={{ height: "11rem" }}></img>
              </div>
              <div className="col position-static">
                <div className="card-body d-flex flex-column h-100 pl-lg-2">
                  <div className="h4 mt-2">Атомная физика</div>
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