import React from 'react';

/**
 * Handles publication component
 */
const Publications = props => {

  /**
   * Gets publication items
   */
  const briefVersion = props.briefVersion;

  const getPublications = props.publicationsData.map(function(item, index) {
    var liElem = null;
    if (!briefVersion || (briefVersion && item.relevant === 'yes')) {
      liElem = <li key={index}>
                {item.date} - <strong>{item.title} </strong>, <em> {item.authors} </em>, {item.place}
               </li>;
    }
    return liElem;
  });

  return (
    <section className="languages">
      <h2 className="text-uppercase"><i className="fa fa-book"></i> Publications</h2>
        <div>
          <ul>{getPublications}</ul>
        </div>
    </section>
  );
};

export default Publications;
