import PropTypes from 'prop-types';
import styles from '../FriendsList/FriendsList.module.css';
export default function FriendList({ isOnline, avatar, name }) {
  return (
    <ul className={styles.listFriends}>
      <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}>
          {/* {isOnline ? 'Online' : 'Offline'} */}
        </span>
        {/* <span className={styles.status}>{status ? 'Online' : 'Offline'}</span> */}
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    </ul>
  );
}

FriendList.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
