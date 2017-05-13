import React from 'react';

/**
 * Handles language component
 */
const Languages = props => {

  /**
   * Gets language items
   */
  const getLanguages = props.languageData.map(function(item, index) {
    return (
      <li key={index}>
        <strong>{item.language} - </strong>{item.fluency}
      </li>);
  });

  return (
    <section className="languages">
      <h2 className="text-uppercase"><i className="fa fa-language"></i> Languages</h2>
        <div>
          <ul>{getLanguages}</ul>
        </div>
    </section>
  );
};

export default Languages;
