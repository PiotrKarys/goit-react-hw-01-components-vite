import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <div className="details">
      <p className="name">{name}</p>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    </div>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
