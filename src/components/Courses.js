import React from 'react';

/**
 * Handles course component
 */
const Courses = props => {

  /**
   * Gets course item
   */
  const getCourses = props.coursesData.map(function(item, index) {
    return (
      <li key={index}>
        {item.date} - <strong>{item.title} </strong> <em> {item.authors} </em>, {item.info}
      </li>
    );
  });

  return (
    <section className="languages">
      <h2 className="text-uppercase"><i className="fa fa-bolt"></i> Courses</h2>
        <div>
          <ul>{getCourses}</ul>
        </div>
    </section>
  );
};

export default Courses;
