import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<nav>
					<ul>
						<li>
							<Link to={'/trade'}>Trade</Link>
						</li>
						<li>
							<Link to={'/portfolio'}>Portfolio</Link>
						</li>
						<li>
							<Link to={'/somewhere'}>nav3</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;
