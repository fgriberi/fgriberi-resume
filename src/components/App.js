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

const ReactNative = require('react-native');
const {Button} = ReactNative;

class App extends React.Component {

  /**
   * Class constructor
   */
  constructor(props) {
    super(props);
    this.profileData = props.jsonObj.basics;
    this.aboutData = this.profileData.summary;
    this.workData = props.jsonObj.work;
    this.skillsData = props.jsonObj.skills;
    this.educationData = props.jsonObj.education;
    this.languagesData = props.jsonObj.languages;
    this.awardsScholarshipsData = props.jsonObj.awards;
    this.publicationsData = props.jsonObj.publications;
    this.coursesData = props.jsonObj.courses;
    this.otherData = props.jsonObj.others;
    this.interestData = props.jsonObj.interests;
    this.state = {brief: true, button: "Full Version"};
    this.toggleResumeVersion = this.toggleResumeVersion.bind(this);
  }

  /**
   * Sets button version
   */
  toggleResumeVersion = () => {
    const { brief } = this.state;
    this.setState({
      brief: !brief,
      button: !brief ? "Full version" : "Brief Version"
    });
  }

  render() {
    const briefVersion = this.state.brief;
    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <div className="inner">
              <Button
                onPress={this.toggleResumeVersion}
                title={this.state.button}
                color="#A9D0F5"
              />
              <Profile profileData={this.profileData} />
            </div>
            <div className="inner">
              <Education educationData={this.educationData} briefVersion={briefVersion} />
            </div>
            <div className="inner">
              <Skills skillsData={this.skillsData} />
            </div>
            <div className="inner">
              <Languages languageData={this.languagesData} />
            </div>
            {!briefVersion && (
              <div className="inner">
                <AwardsScholarships awardsData={this.awardsScholarshipsData}/>
              </div>
            )}
            {!briefVersion && (
              <div className="inner">
                <OtherInfo otherData={this.otherData}/>
              </div>
            )}
            {!briefVersion && (
              <div className="inner">
                <Interests interestData={this.interestData}/>
              </div>
            )}
            {!briefVersion && (
              <div className="inner">
                <section>
                  <h2 className="text-uppercase"><i className="fa fa-users"></i>References</h2>
                  <p><strong>Provided upon request.</strong></p>
                </section>
              </div>
            )}
          </aside>
          <main className="col-md-8">
            <div className="inner">
              <About aboutData={this.aboutData} briefVersion={briefVersion}/>
            </div>
            <div className="inner">
              <Work workData={this.workData} briefVersion={briefVersion}/>
            </div>
            <div className="inner">
              <Publications publicationsData={this.publicationsData} briefVersion={briefVersion}/>
            </div>
            {!briefVersion && (
              <div className="inner">
                <Courses coursesData={this.coursesData}/>
              </div>
            )}
          </main>
        </div>
      </div>
    )
  }
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
