import './App.css';
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect } from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      }
    })
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;