import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';
import cssModule from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cssModule.list}>
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
