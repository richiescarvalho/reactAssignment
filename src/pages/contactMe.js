import React, { Component } from 'react';



class ContactMe extends Component {
  render() {
    return (
    	<div id="mainDiv" className="container" >
	    	<form >
				<div className="disp-in-block width-eq-50per">
					<label for="fname">First Name</label>
					<input type="text" id="fname" name="firstname" placeholder="Your name.." />
				</div>
				<div className="disp-in-block width-eq-50per">
					<label for="lname">Last Name</label>
					<input type="text" id="lname" name="lastname" placeholder="Your last name.." />
				</div>
				<div className="disp-in-block width-eq-50per">
					<label for="country">Country</label>
					<select id="country" name="country">
					  <option value="australia">Australia</option>
					  <option value="canada">Canada</option>
					  <option value="china">CHINA</option>
					  <option value="india">INDIA</option>
					  <option value="usa">USA</option>
					</select>
				</div>
				<div className="disp-in-block width-eq-50per">
					<label for="lname">Email Address</label>
					<input type="text" id="lname" name="lastname" placeholder="Enter Email" />
				</div>
				<div>
					<label for="fname">Subject</label>
					<input type="text" id="subject" name="subject" placeholder="Your Subject.." />
				</div>
				<div>
					<label for="description">Description</label>
					<textarea id="description" name="description" placeholder="Write something.." className="cnct-me-descptn"></textarea>
				</div>
				<input type="submit" value="Submit" />
				<img class="cnct-me-logo" src="./../Assets/img/outlookimage.png"  alt="Outlook Email" />
			</form>
		</div>
	)
   }
}


export default ContactMe;