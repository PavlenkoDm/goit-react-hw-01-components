import PropTypes from 'prop-types';
import { ProfileStats } from 'components/index';
import css from './Profile.module.css'

export const Profile = props => {
    const { username, tag, location, avatar, stats } = props;
    const { followers, views, likes } = stats;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ProfileStats followers={followers} views={views} likes={likes} />
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
