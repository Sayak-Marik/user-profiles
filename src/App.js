import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const users = [
  { id: 1, name: "Alice", role: "Frontend Developer", location: "Delhi" },
  { id: 2, name: "Bob", role: "Backend Developer", location: "Mumbai" },
  { id: 3, name: "Carol", role: "Full Stack Developer", location: "Remote" }
];

function App() {
  const [searchValue, setSearchaValue] = useState("");
  const filteredUsers = [];
  const searchLowerCase = searchValue.toLowerCase();
  
  for(let i = 0; i < users.length; i++) {
    if(users[i].name.toLowerCase().indexOf(searchLowerCase) !== -1 || 
       users[i].role.toLowerCase().indexOf(searchLowerCase) !== -1) {
      filteredUsers.push(users[i]);
    }
  }

  return (
    <div className="app">
      <h1> Team Members </h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or role "
          onChange={(e) => setSearchaValue(e.target.value)}
        />{" "}
      </div>
      <div className="users-container">
        {" "}
        {filteredUsers.length === 0 ? (
          <p className="no-users"> No users to display. </p>
        ) : (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
