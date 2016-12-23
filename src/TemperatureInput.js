import React, {Component} from 'react';

const scaleNames={
	c:'Celsius',
	f:'Fahrenheit'
};

class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.state={value:''};
	}
	handleChange(e){
		this.setState({value:e.target.value});
	}
	render(){
		const value=this.state.value;
		const scale=this.props.scale;
		return(
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={value} onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class Calculator2 extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator2;