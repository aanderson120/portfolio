import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PorfolioPage from './Pages/PortfolioPage';
import Home from './Pages/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
render() {
  return (
    <Router>
      <div className="App">

        <NavBar /> 

          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={PorfolioPage}/>
          <Route exact path="/about" component={About}/>

        <Footer />

      </div>
    </Router>
    );
  }
}

export default App;