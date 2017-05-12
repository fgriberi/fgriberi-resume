import React, { PropTypes } from 'react';
import '../styles/App.css';

import Profile from './Profile';
import About from './About';

const App = props => {

  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;

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
        </main>
      </div>
    </div>
  )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
