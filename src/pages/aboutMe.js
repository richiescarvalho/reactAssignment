import React, { Component } from 'react';



class AboutMe extends Component {
  render() {
    return (
    	<div id="mainDiv" className="container" >
	    	<form action="/action_page.php">
				<div className="disp-in-block"><img className="abt-me-img"   alt="About Me" />
				</div>
				<div className="disp-in-block"><img className="abt-me-img-two" alt="About Me" />
				</div>
				<div className="abt-details-div">				
					<h1 className="abt-details-h1">Richie Carvalho</h1>
					<p className="abt-details-p font-family-times font-size-20">
						My name is Richie Carvalho. I have completed my Bachelor's degree in Computer Science from India and currently pursuing Master's degree in Computer Science from PACE University.
					</p>
					<p className="abt-details-p  font-family-times font-size-20">
						I have a 4 years of experience working in IT industry. I was an employed in JUSTDIAL Ltd Mumbai. I have an experience in PHP, HTML, CSS, JavaScript,JQuery, MySQL etc.
					</p>
					<h3 className="abt-details-p font-family-times font-size-30">Hobbies</h3>
					<div className="disp-in-block width-eq-50per"><ul className="font-family-times font-size-20">
							<li>Watching Movies</li>
							<li>Coding</li>
							<li>Learning New Stuff</li>
							<li>Music</li>
						</ul>
					</div>
						<div class="width-eq-50per abt-details-p float-right"><img  className="abt-me-img-three" alt="About Me" />
						</div>
				</div>
				
				
				
			</form>	
		</div>
    );
  }
}

export default AboutMe;
