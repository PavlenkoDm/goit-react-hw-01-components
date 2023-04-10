import PropTypes from 'prop-types';
import css from './Profile-stats.module.css'

export const ProfileStats = props => {
    const { followers = 0, views = 0, likes = 0 } = props;
    return (
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    );
};

ProfileStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
