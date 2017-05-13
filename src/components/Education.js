import React from 'react';
import moment from 'moment';

/**
 * Handles education component
 */
const Education = props => {

  /**
   * Gets education items
   */
  const getEducation = props.educationData.map(function(item, index) {
		const startDate = moment(item.startDate).format('MMM, YYYY');
		const endDate = moment(item.endDate).format('MMM, YYYY');

    return (
      <div key={index}>
        <h3>{item.studyType} {item.area}</h3>
        <h4>{item.institution}</h4>
        <p>Studied: {startDate} - {endDate}</p>
        {!props.briefVersion && <strong><em>{item.thesis}</em></strong>}
        {!props.briefVersion && <p>Supervisors: {item.supervisors}</p> }
      </div>
    )

	});

	return (
	  <section className="education">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
      {getEducation}
    </section>
	)
};

export default Education;

