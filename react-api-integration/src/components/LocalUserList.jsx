import React, { useEffect, useState } from "react";

const LocalUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Local Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> | {user.email} | {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalUserList;