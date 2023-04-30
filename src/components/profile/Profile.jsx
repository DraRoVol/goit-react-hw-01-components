import PropTypes from 'prop-types';
import cssModule from './Profile.module.css';

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className={cssModule.profile}>
      <div className={cssModule.description}>
        <img className={cssModule.avatar} src={avatar} alt="User avatar" />
        <p className={cssModule.name}>{userName}</p>
        <p className={cssModule.tag}>{tag}</p>
        <p className={cssModule.location}>{location}</p>
      </div>

      <ul className={cssModule.stats}>
        <li>
          <span className={cssModule.label}>Followers</span>
          <span className={cssModule.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={cssModule.label}>Views</span>
          <span className={cssModule.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={cssModule.label}>Likes</span>
          <span className={cssModule.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.object.isRequired,
}

export default Profile;