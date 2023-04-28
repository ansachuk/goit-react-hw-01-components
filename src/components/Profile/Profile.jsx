import PropTypes from 'prop-types';
import css from './Profile.module.css';
import StatsBlock from 'components/StatsBlock/StatsBlock';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props.data;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className="stats">
        <li>
          <StatsBlock></StatsBlock>
        </li>
        <li>
          <StatsBlock></StatsBlock>
        </li>
        <li>
          <StatsBlock></StatsBlock>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Profile;
