import PropTypes from 'prop-types';
import css from './Profile-stats.module.css';

export const ProfileStats = ({ stats }) => {
    const statsData = Object.entries(stats);
    return (
        <ul className={css.stats}>
            {statsData.map(([key, value]) => {
                return (
                    <li key={key}>
                        <span className={css.label}>{key}</span>
                        <span className={css.quantity}>{value}</span>
                    </li>
                );
            })}
        </ul>
    );
};

ProfileStats.propTypes = PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired


