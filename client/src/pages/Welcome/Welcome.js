import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { CardPanel } from "react-materialize";


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
  	let postData;
    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
      console.log(postData);
      this.setState({redirect: true});
  }


}

	render() {
		const { redirect } = this.state

		if(redirect) {
			return (<Redirect to={'/home'}/>)
		}
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
