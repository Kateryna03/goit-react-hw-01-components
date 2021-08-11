import PropTypes from 'prop-types';

export default function FriendList({ status, avatar, name }) {
  return (
    <ul>
      {/* class="friend-list"> */}
      <li>
        {/* class="item">
              class="status"
              class="avatar"
              class="name" */}
        <span>{status ? 'Online' : 'Offline'}</span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
    </ul>
  );
}

FriendList.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
