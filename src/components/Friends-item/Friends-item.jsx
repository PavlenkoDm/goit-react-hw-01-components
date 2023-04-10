import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './Friends-item.module.css';

export const FriendsItem = ({ friends }) => {
    return friends.map(item => {
        const { avatar, name, id, isOnline } = item;
        return (
            <li className={css.item} key={id}>
                <span className={clsx(css.status, { [css.online]: isOnline })}></span>
                <img
                    className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                    width="48"
                />
                <p className={css.name}>{name}</p>
            </li>
        );
    });
};

FriendsItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
