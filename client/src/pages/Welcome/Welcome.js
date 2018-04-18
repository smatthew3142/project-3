import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { CardPanel } from "react-materialize";

class Welcome extends Component {




	render() {

		const responseGoogle = (response) => {
			console.log("google console");
			console.log(response);
			this.signup(response, 'google');
		}

		return ( 

			  <CardPanel className="grey lighten-3">

			  <div>
				<GoogleLogin
				clientId="671498025717-e6e16ts71e3448u0pf3moahhg2g0ngpa.apps.googleusercontent.com"
				buttonText="Login with Google"
              	onSuccess={responseGoogle}
              	onFailure={responseGoogle}/>
			</div>
			</CardPanel>

		);
	}
}


export default Welcome;
