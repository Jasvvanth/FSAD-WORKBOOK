import React, { useState } from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

const Dashboard = () => {
  const [active, setActive] = useState("home");

  const renderComponent = () => {
    if (active === "local") return <LocalUserList />;
    if (active === "users") return <UserList />;
    if (active === "fake") return <FakePostList />;
    return <h2>Welcome! Choose a component to view.</h2>;
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setActive("local")}>Local Users</button>
        <button onClick={() => setActive("users")}>Users API</button>
        <button onClick={() => setActive("fake")}>Fake API Posts</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default Dashboard;