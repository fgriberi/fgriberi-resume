import React from 'react';

/**
 * Handles the awards-scholarships component
 */
const AwardsScholarships = props => {

  /**
   * Gets the awards items
   */
  const getAwards = props.awardsData.map(function(item, index) {
    return (
      <li key={index}>
        <strong>{item.title} </strong> - <emph> {item.institution} </emph> - {item.period}
      </li>
    );
  });

  return (
    <section className="languages">
      <h2 className="text-uppercase"><i className="fa fa-handshake-o"></i> Awards and Scholarships</h2>
        <div>
          <ul>{getAwards}</ul>
        </div>
    </section>
  );
};

export default AwardsScholarships;
