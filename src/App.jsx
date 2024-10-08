import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import transaction from "./transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  );
}

export default App;
