import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
	render() {
		const {value, onChange} = this.props
		return (
			<input type="text" onChange={onChange} defaultValue={value}/>
		)
	}
}

export default Input;
