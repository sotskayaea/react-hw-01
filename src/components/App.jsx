import Profile from './Profile/Profile';
import user from '../data/profileUser.json';
import Statistics from './Statistics/Statistics';
import statistics from '../data/statistics.json';
import friendsData from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json'

function App() {
  const {username, tag, location, avatar, stats} = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        title = 'Upload stats'
        stats={statistics}
      />
      <FriendList
        friends = {friendsData}
      />
      <TransactionHistory
        items = {transactions}
        />
    </>
  );
}

export default App;
