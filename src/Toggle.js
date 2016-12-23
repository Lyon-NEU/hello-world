import React,{ Component } from 'react';
class Toggle extends Component{
	constructor(props){
		super(props);
		this.state={isToggleOn:true};

		//This binding is necessary to make `this` work
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(preState =>({
			isToggleOn: !preState.isToggleOn
		}));
	}
	render(){
		return(
		  <button onClick={this.handleClick}>
		  	{this.state.isToggleOn ? 'ON':"OFF"}
		  </button>
		);
	}
}
export default Toggle;