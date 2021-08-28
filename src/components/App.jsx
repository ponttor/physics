import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Grade from './Grade.jsx';
// import Head from './Head.jsx';
import Trieda2 from '../pages/Trieda2.jsx';
import Trieda3 from '../pages/Trieda3.jsx';
import Trieda4 from '../pages/Trieda4.jsx';
import Electricity1 from '../pages/Electricity1.jsx';
import Electricity2 from '../pages/Electricity2.jsx';
import Electricity3 from '../pages/Electricity3.jsx';
import Electricity4 from '../pages/Electricity4.jsx';
import Electricity5 from '../pages/Electricity5.jsx';
import ElectricityLessonsPreview from '../pages/ElectricityLessonsPreview.jsx';
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
            <Route exact path="/electricity-1" component={Electricity1} />
            <Route exact path="/electricity-2" component={Electricity2} />
            <Route exact path="/electricity-3" component={Electricity3} />
            <Route exact path="/electricity-4" component={Electricity4} />
            <Route exact path="/electricity-5" component={Electricity5} />
          </Switch>
        </Router>
      </>
    )
  }

}

