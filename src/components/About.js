import React from 'react';

/**
 * Handles about component
 */
const About = props => {

	return (
	  <section className="about">
	    <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About Me</h2>
	    <div>{props.aboutData}</div>
	  </section>
	);
};

export default About;
