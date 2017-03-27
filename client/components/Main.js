import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
	
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<h1>
					<Link to="/">Reduxtagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
				
			</div>
		)
	}
}

export default Main;