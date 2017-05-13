import React from 'react';

/**
 * Handles other info component
 */
const OtherInfo = props => {

  /**
   * Gets info item
   */
  const getData = props.otherData.map(function(item, index) {
    return (
      <li key={index}>
        <strong>{item.title} </strong> <em> {item.description} </em>
      </li>
    );
  });

  return (
    <section className="languages">
      <h2 className="text-uppercase"><i className="fa fa-star"></i> OtherInfo</h2>
        <div>
          <ul>{getData}</ul>
        </div>
    </section>
  );
};

export default OtherInfo;
