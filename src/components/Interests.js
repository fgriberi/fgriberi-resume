import React from 'react';

/**
 * Handles interest component
 */
const Interests = props => {

	/**
	 * Gets interest item
	 */
    const getItems = props.interestData.map(function(item, index) {
      return (
      	<li key={index}>
      		<span className="label label-info">{item}</span>
      	</li>)
    });

    return (
      <section className="skills">
        <h2 className="text-uppercase">
        	<i className="fa fa-lg fa-tags"></i> Interests
        </h2>
        <ul className="skills-list list-inline">{getItems}</ul>
      </section>
    )
};

export default Interests;
