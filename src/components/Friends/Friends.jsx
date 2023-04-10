import PropTypes from 'prop-types';
import { FriendsItem } from 'components/index';
import css from './Friends.module.css'

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            <FriendsItem
                friends={friends}
            />
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
