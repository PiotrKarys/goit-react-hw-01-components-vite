import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className={'profile-description'}>
        <img src={avatar} alt="User avatar" className="profile-avatar" />
        <p className="profile-name">
          <span className="profile-tag">@{tag}</span>
          {username}
        </p>
        <p className="profile-location">{location}</p>
      </div>
      <ul className="profile-stats">
        <li>
          <p className="profile-label">Followers</p>
          <p className="profile-quantity">{stats.followers}</p>
        </li>
        <li>
          <p className="profile-label">Views</p>
          <p className="profile-quantity">{stats.views}</p>
        </li>
        <li>
          <p className="profile-label">Likes</p>
          <p className="profile-quantity">{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
