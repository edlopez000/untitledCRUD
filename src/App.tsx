import React, { useEffect, useState } from 'react';

function App() {
  const [projectName, setProjectName] = useState('');
  const [apiVersion, setAPIVersion] = useState('');

  useEffect(() => {
    fetch('/api/v1')
      .then((res) => res.json())
      .then((data) => {
        setProjectName(data.project);
        setAPIVersion(data.version);
      });
  });
  return (
    <div>
      <h1>Barebones starting page</h1>
      <p>Project name is {projectName}</p>
      <p>Project API version is {apiVersion}</p>
    </div>
  );
}

export default App;
