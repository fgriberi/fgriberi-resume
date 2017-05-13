import React from 'react';

/**
 * Handles about component
 */
const About = props => {

  return (
    <section className="about">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About Me</h2>
      {props.briefVersion ? <div>{props.aboutData.brief}</div> : <div>{props.aboutData.full}</div>}
    </section>
  );
};

export default About;
