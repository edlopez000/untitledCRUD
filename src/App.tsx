import React, { useEffect, useState } from 'react';
import User from './models/user';

function App() {
  const [projectName, setProjectName] = useState('');
  const [apiVersion, setAPIVersion] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/v1')
      .then((res) => res.json())
      .then((data) => {
        setProjectName(data.project);
        setAPIVersion(data.version);
      });
    fetch('api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <section>
        <h1>Barebones starting page</h1>
        <p>Project name is {projectName}</p>
        <p>Project API version is {apiVersion}</p>
      </section>
      <hr />
      <section>
        <h1>Let's pull all users</h1>
        <ul>
          <p>
            {users.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName} has the email address
                {user.email} and ID {user.id}.
              </li>
            ))}
          </p>
        </ul>
      </section>
    </div>
  );
}

export default App;
