import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Profile from './components/Profile/Profile';
import user from './user.json';
import FriendListItem from './components/FriendsList/FriendsListItem';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} />; */}
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
