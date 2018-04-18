import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animals from "./pages/Animals";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Start from "./pages/Start";
import EndangeredAnimals from "./pages/EndangeredAnimals";
import Charity from "./pages/Charity";


const App = () => 

<Router>

  <div>
  	<Nav />
  	<Switch>
		  <Route exact path="/" component={Start} />
		  <Route exact path="/animals" component={Animals} />
		  <Route exact path="/endangered" component={EndangeredAnimals} />
  		<Route exact path="/charity" component={Charity} />
      <Route component={NoMatch} />
  	</Switch>
  </div>
 </Router>;

export default App;