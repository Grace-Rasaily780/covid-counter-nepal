import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
	<nav className="navbar navbar-expand-lg navbar-custom">
		<div className="container-fluid">
			<NavLink  className="navbar-brand" to="/">Nepal  Covid-19  Count</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<i className="fa fa-bars"></i>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink activeClassName="active-link" className="nav-link active" aria-current="page" to="/">Total</NavLink>
					</li>
					
					<li className="nav-item">
						<NavLink activeClassName="active-link" className="nav-link active" to="/province">Details By Province</NavLink>
					</li>

					<li className="nav-item">
						<NavLink activeClassName="active-link" className="nav-link active" to="/gender">Details By Gender</NavLink>
					</li>

					<li className="nav-item">
						<NavLink activeClassName="active-link" className="nav-link active" to="/map">Map</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    );
};

export default Navbar;
