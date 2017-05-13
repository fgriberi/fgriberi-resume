import React from 'react';
import WorkItem from './WorkItem';

/**
 * Handles work experiencie component
 */
const Work = props => {

  /**
   * Gets work experiencie items
   */
  const getWorkExperience = () => {
    const workItems = [];
    props.workData.forEach((val, index) => {
      workItems.push(<WorkItem key={index} workItemData={val} briefVersion={props.briefVersion}/>);
    });
    return workItems;
  };

  return (
    <section className="work">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
      {getWorkExperience()}
    </section>
  );
};

export default Work;
