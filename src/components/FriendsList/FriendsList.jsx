import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import styles from '../FriendsList/FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.listFriends}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
