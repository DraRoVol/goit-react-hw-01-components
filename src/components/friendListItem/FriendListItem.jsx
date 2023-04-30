import PropTypes from 'prop-types';
import cssModule from './FriendListItem.module.css';

const FriendListItem = ({ avatar, userName, isOnline }) => {
  return (
    <li className={cssModule.item}>
      <span className={cssModule.status} style={{ backgroundColor: isOnline ? 'rgb(61 207 61)' : 'rgb(231 52 130)' }}></span>
      <img
        className={cssModule.avatar}
        src={avatar}
        alt="User avatar"
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
