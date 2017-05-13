import React, { PropTypes } from 'react';
import '../styles/App.css';

import Profile from './Profile';
import About from './About';
import Work from './Work';

const App = props => {

  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;  

  return (
    <div className="container">      
      <div className="row">
        <aside className="col-md-4">
          <div className="inner">
            <Profile profileData={profileData} />
          </div>          
        </aside>
        <main className="col-md-8">
          <div className="inner">
            <About aboutData={aboutData}/>
          </div>          
          <br></br>
          <div className="inner">
            <Work workData={workData} />
          </div>          
        </main>
      </div>
    </div>
  )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
