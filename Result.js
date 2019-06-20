import React from 'react';
import ReactDOM from 'react-dom';

class Result extends React.Component {
	render() {
		const {res} = this.props;
		const x = res.reduce(function(a,b) {return a + Number(b) }, 0)
		return (
			<div>
				{x}
				</div>
		)
	}
}

export default Result;
