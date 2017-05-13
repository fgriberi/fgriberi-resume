import React from 'react';

/**
 * Handles profile component
 */
const Profile = props => {

  const profileObj = props.profileData;
  return (
    <div>
      <div className="profileImg"><img alt="" className="img-circle center-block" src={profileObj.picture} width="200"/></div>
      <h1 className="text-center">{profileObj.name}</h1>
      <h2 className="text-center profileLabel">{profileObj.label}</h2>
      <div className="divider"></div>
      <ul className="list-unstyled contact-links text-center">
        <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
        <li><i className="fa fa-lg fa-envelope"></i><a href="mailto:{profileObj.email}">{profileObj.email}</a></li>
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks list-inline text-center">
        <li><a className="fa fa-linkedin fa-2x" href={'https://www.linkedin.com/in/'+profileObj.profiles[0].username}></a></li>
        <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[1].username}></a></li>
        <li><a className="fa fa-free-code-camp fa-2x" href={'https://www.freecodecamp.com/'+profileObj.profiles[2].username}></a></li>
      </ul>
      <div className="divider"></div>
      <p><em>“Science is what we understand well enough to explain to a computer. Art is everything else we do.”</em> – <strong>Donald Knuth</strong></p>
    </div>
  )
};

export default Profile;
