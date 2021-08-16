import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
