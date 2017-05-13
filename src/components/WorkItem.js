import React from 'react';
import moment from 'moment';

/**
 * Represents a work experience items
 */
const WorkItem = props => {

  /**
   * Gets the work date period 
   */
  const getWorkDates = () => {
    const startDate = moment(props.workItemData.startDate).format('MMM, YYYY');
    let endDate = null;
    if (props.workItemData.endDate !== '') {
      endDate = moment(props.workItemData.endDate).format('MMM, YYYY');
    } else {
      endDate = 'Present';
    }
    return <span className='startdate'>{startDate} - {endDate}</span>
  }

  /**
   * Gets projects involved
   */
  const getHighlightProjects = props.workItemData.highlights.map(function(item, index) {
    var externalLink = "";
    if (item.link !== "") {
      externalLink = <a href={item.link}><i className="fa fa-external-link"></i></a>;
    }
    return (
      <li key={index}>
        <span className="label label-info">{item.title}</span>  {item.description}  {externalLink}
      </li>
    )
  });

  return (
    <div className="workItem">
      <h3>
        <i className="fa fa-arrow-circle-right"></i>{props.workItemData.position}, <span>{props.workItemData.company}</span>
      </h3>
      <p className="workDates">{getWorkDates()}</p>
      <p>{props.workItemData.summary}</p>
      <ul>{getHighlightProjects}</ul>
    </div>
  )
};

export default WorkItem;
