import React, {Component } from 'react';

function UserGreeting(props){
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
	return <h1>Please sign up.</h1>;
}
function Greeting(props){
	const isLoggedIn=props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}
function LoginButton(props){
	return(
		<button onClick={props.onClick}>
		Login
		</button>
	);
}
function LogoutButton(props){
	return(
		<button onClick={props.onClick}>
		Logout
		</button>
	);
}
class LoginControl extends Component{
	constructor(props){
		super(props);
		this.handleLoginClick=this.handleLoginClick.bind(this);
		this.handleLogoutClock=this.handleLogoutClock.bind(this);
		this.state={isLoggedIn:false};
	}
	handleLoginClick(){
		this.setState({isLoggedIn:true});
	}
	handleLogoutClock(){
		this.setState({isLoggedIn:false});
	}
	render(){
		const isLoggedIn=this.state.isLoggedIn;
		let button=null;
		if(isLoggedIn){
			button=<LogoutButton onClick={this.handleLogoutClock} />;
		}
		else{
			button=<LoginButton onClick={this.handleLoginClick} />;
		}
		return(
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

export default LoginControl;