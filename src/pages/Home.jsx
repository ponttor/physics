import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from '../components/Head.jsx';
import logo1 from '../images/lines3.gif'
import logo2 from '../images/electro2.gif'
import logo3 from '../images/7.gif'
import logo4 from '../images/logo4.jpeg'

export default class Home extends React.Component {
  render() {
    return (
      <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
      <Head text="GAE"/>
      <div className="d-flex justify-content-center flex-wrap">

     <a className="d-block m-3 text-decoration-none" href="/trieda-2"><h4 className="text-dark text-center">Fysika 2</h4>
      <img href="/2" className="h-350 w-350" variant="left" src={logo1} style={{ height: "22rem", width: "22rem"}} /></a>

      <a className="d-block m-3 text-decoration-none" href="/trieda-3"><h4 className="text-dark text-center">Fysika 3</h4>
      <img href="/trieda-3" className="h-350 w-350" variant="left" src={logo2} style={{ height: "22rem", width: "22rem" }} /></a>
      </div>
     
      <div className="flex-wrap d-flex justify-content-center">

      <a className="d-block m-3 text-decoration-none" href="/trieda-4"><h4 className="text-dark text-center">Fysika 4</h4>
      <img href="/triead-4" className="h-350 w-350" variant="left" src={logo3} style={{ height: "22rem", width: "22rem" }} /></a>

      <a className="d-block m-3 text-decoration-none" href="/sapiens"><h4 className="text-dark text-center">Sapiens</h4>
      <img href="/triead-4" className="h-350 w-350" variant="left" src={logo4} style={{ height: "22rem", width: "22rem" }} /></a>
      </div>
      </div>
        </>
    )
  }
}