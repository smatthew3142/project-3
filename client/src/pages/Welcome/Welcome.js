import React, { Component } from 'react';
//import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';


class Welcome extends Component {
	render() {
		const responseGoogle = (response) => {
			console.log(response);
		}

		return ( 
			<div>
				<GoogleLogin
				clientId="671498025717-e6e16ts71e3448u0pf3moahhg2g0ngpa.apps.googleusercontent.com"
				buttonText="Login"
              	onSuccess={responseGoogle}
              	onFailure={responseGoogle}/>
			</div>
		);
	}
}


export default Welcome;