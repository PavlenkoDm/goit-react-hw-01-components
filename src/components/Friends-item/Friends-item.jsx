import PropTypes from 'prop-types';
import css from './Friends-item.module.css';

export const FriendsItem = ({avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span
                className={isOnline ? css.online : css.offline}
            ></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
