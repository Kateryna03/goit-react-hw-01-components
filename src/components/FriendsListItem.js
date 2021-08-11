import FriendList from './FriendsList';
import PropTypes from 'prop-types';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li key={friend.id}>
      <FriendList
        status={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendListItem;
