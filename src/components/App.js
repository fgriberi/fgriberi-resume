import React, { PropTypes } from 'react';
import '../styles/App.css';

import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Languages from './Languages';
import AwardsScholarships from './AwardsScholarships';
import Publications from './Publications';
import Courses from './Courses';
import OtherInfo from './OtherInfo';
import Interests from './Interests';

const App = props => {

  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  const languagesData = props.jsonObj.languages;
  const awardsScholarshipsData = props.jsonObj.awards;
  const publicationsData = props.jsonObj.publications;
  const coursesData = props.jsonObj.courses;
  const otherData = props.jsonObj.others;
  const interestData = props.jsonObj.interests;

  return (
    <div className="container">
      <div className="row">
        <aside className="col-md-4">
          <div className="inner">
            <Profile profileData={profileData} />
          </div>
          <br></br>
          <div className="inner">
            <Education educationData={educationData} />
          </div>
          <br></br>
          <div className="inner">
            <Skills skillsData={skillsData} />
          </div>
          <br></br>
          <div className="inner">
            <Languages languageData={languagesData} />
          </div>
          <br></br>
          <div className="inner">
            <AwardsScholarships awardsData={awardsScholarshipsData} />
          </div>
          <br></br>
          <div className="inner">
            <OtherInfo otherData={otherData}/>
          </div>
          <br></br>
          <div className="inner">
            <Interests interestData={interestData}/>
          </div>
          <br></br>
          <div className="inner">
            <section>
              <h2 className="text-uppercase"><i className="fa fa-users"></i>References</h2>
              <p><strong>Provided upon request.</strong></p>
            </section>
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
          <br></br>
          <div className="inner">
            <Publications publicationsData={publicationsData} />
          </div>
          <br></br>
          <div className="inner">
            <Courses coursesData={coursesData}/>
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
