import FriendList from './FriendsList';
//import { styles } from './FriendsList/FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li key={friend.id}>
      <FriendList
        isOnline={friend.isOnline}
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
