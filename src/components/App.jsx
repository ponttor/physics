import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Grade from './Grade.jsx';
// import Head from './Head.jsx';
import Trieda2 from '../pages/Trieda2.jsx';
import Trieda3 from '../pages/Trieda3.jsx';
import Trieda4 from '../pages/Trieda4.jsx';
import Electricity1 from '../pages/Electricity/Electricity1.jsx';
import Electricity2 from '../pages/Electricity/Electricity2.jsx';
import Electricity3 from '../pages/Electricity/Electricity3.jsx';
import Electricity4 from '../pages/Electricity/Electricity4.jsx';
import Electricity5 from '../pages/Electricity/Electricity5.jsx';
import Magnet1 from '../pages/Magnet/Magnet1.jsx';
import Magnet2 from '../pages/Magnet/Magnet2.jsx';
import Magnet3 from '../pages/Magnet/Magnet3.jsx';
import Magnet4 from '../pages/Magnet/Magnet4.jsx';
import Magnet5 from '../pages/Magnet/Magnet5.jsx';
import ElectricityLessonsPreview from '../pages/Electricity/ElectricityLessonsPreview.jsx';
import MagnetLessonsPreview from '../pages//Magnet/MagnetLessonsPreview.jsx';
import SapiensLessonsPreview from '../pages/Sapiens/SapiensLessonsPreview.jsx';
import Sapiens1 from '../pages/Sapiens/Sapiens1.jsx';
import Sapiens2 from '../pages/Sapiens/Sapiens2.jsx';
import Home from '../pages/Home.jsx';
// import { Container } from 'react-bootstrap';
// import logo1 from '../images/lines3.gif'
// import logo2 from '../images/electro2.gif'
// import logo3 from '../images/7.gif'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trieda-2" component={Trieda2} />
            <Route exact path="/trieda-3" component={Trieda3} />
            <Route exact path="/trieda-4" component={Trieda4} />
            <Route exact path="/electricity" component={ElectricityLessonsPreview} />
            <Route exact path="/magnet" component={MagnetLessonsPreview} />
            <Route exact path="/electricity-1" component={Electricity1} />
            <Route exact path="/electricity-2" component={Electricity2} />
            <Route exact path="/electricity-3" component={Electricity3} />
            <Route exact path="/electricity-4" component={Electricity4} />
            <Route exact path="/electricity-5" component={Electricity5} />
            <Route exact path="/magnet-1" component={Magnet1} />
            <Route exact path="/magnet-2" component={Magnet2} />
            <Route exact path="/magnet-3" component={Magnet3} />
            <Route exact path="/magnet-4" component={Magnet4} />
            <Route exact path="/magnet-5" component={Magnet5} />
            <Route exact path="/sapiens" component={SapiensLessonsPreview} />
            <Route exact path="/sapiens-1" component={Sapiens1} />
            <Route exact path="/sapiens-2" component={Sapiens2} />
          </Switch>
        </Router>
      </>
    )
  }

}

