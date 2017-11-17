import React, { Component } from 'react';
import{
	Link
} from 'react-router-dom';

class LinkPannelDiv extends Component {
  render() {
    return (
    	<div className="container main-div-link" >
			<nav className="navbar navbar-light bg-faded" >
				<div className="btn btn-default btn-lg main-nav-link-div"  >
					<Link  className="navbar-brand" to="/">Home Page</Link>
				</div>
				<div className="btn btn-default btn-lg  main-nav-link-div" >
					<Link className="navbar-brand" to="/AboutMe">About Me</Link>
				</div>
				<div className="btn btn-default btn-lg  main-nav-link-div"  onclick="redirectClick('contactus')">
					<Link className="navbar-brand" to="/ContactMe">Contact Me</Link>
				</div>
				<div className="btn btn-default btn-lg  main-nav-link-div" data-toggle="modal" data-target="#myModal" >
					<a className="navbar-brand">View Video</a>
				</div>
			</nav>
		</div>
	)
  }
}

export default LinkPannelDiv;