import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/index';
import { Statistics } from 'components/index';
import { FriendsList } from 'components/index';
import { TransactionHistory } from 'components/index';
import css from './App.module.css';

export const App = () => {
    return (
        <div className={css.decoration}>

            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics data={data} title="Upload stats" />

            <FriendsList friends={friends} />

            <TransactionHistory transactions={transactions} />
        </div>
    );
};
