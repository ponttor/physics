import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from '../components/Head.jsx';
import logo1 from '../images/lines3.gif'
import logo2 from '../images/electro2.gif'
import logo3 from '../images/7.gif'

export default class Home extends React.Component {
  render() {
    return (
      <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
      <Head text="Физика"/>
      <div className="flex-wrap d-flex">

      <a className="d-block ms-3 text-decoration-none" href="/trieda-2"><h4 className="text-dark text-center">2 Trieda</h4>
      <img href="/2" className="h-350 w-350" variant="left" src={logo1} style={{ height: "19rem", width: "19rem"}} /></a>

      <a className="d-block ms-3 text-decoration-none" href="/trieda-3"><h4 className="text-dark text-center">{'3 Trieda'}</h4>
      <img href="/trieda-3" className="h-350 w-350" variant="left" src={logo2} style={{ height: "19rem", width: "19rem" }} /></a>

      <a className="d-block ms-3 text-decoration-none" href="/trieda-4"><h4 className="text-dark text-center">4 Trieda</h4>
      <img href="/triead-4" className="h-350 w-350" variant="left" src={logo3} style={{ height: "19rem", width: "19rem" }} /></a>
      </div>
      </div>
        </>
    )
  }
}