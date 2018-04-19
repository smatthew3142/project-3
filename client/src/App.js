import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animals from "./pages/Animals";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome/Welcome"
import EndangeredAnimals from "./pages/EndangeredAnimals";
import Charity from "./pages/Charity";



const App = () => 

<Router>

  <div>
  	<Nav />
  	<Switch>
		  <Route exact path="/" component={Home} />
		  <Route exact path="/animals" component={Animals} />
		  <Route exact path="/endangered" component={EndangeredAnimals} />
  		<Route exact path="/charity" component={Charity} />
  		<Route exact path="/login" component={Welcome} />
      <Route component={NoMatch} />

  	</Switch>
  </div>
 </Router>;

export default App;