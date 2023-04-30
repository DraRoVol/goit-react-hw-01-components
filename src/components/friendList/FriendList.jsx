import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          userName={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    })
  ),
}

export default FriendList;
