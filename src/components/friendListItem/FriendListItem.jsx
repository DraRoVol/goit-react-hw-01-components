import PropTypes from 'prop-types';
import cssModule from './FriendListItem.module.css';

const FriendListItem = ({ avatar, userName, isOnline }) => {
  return (
    <li className={cssModule.item}>
      <span className={cssModule.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img
        className={cssModule.avatar}
        src={avatar}
        alt="User avatar"
        width="35"
      />
      <p className={cssModule.name}>{userName}</p>
    </li>
  );
};

FriendListItem.protoType = {
    avatar: PropTypes.node.isRequired,
    userName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
