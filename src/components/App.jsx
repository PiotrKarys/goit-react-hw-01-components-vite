import React from "react";
import Profile from "./profile/profile";
import Statistics from "./stats/statistics";
import FriendList from "./friendlist/friendlist";
import TransactionHistory from "./transactions/transactionh";
import transactions from "./transactions/transactions.json";
import user from "./profile/user.json";
import data from "./stats/data.json";
import friends from "./friendlist/friends.json";
const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
        gap: 20,
      }}>
      React homework template
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
