import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Dhanraj190503');
        if (!response.ok) throw new Error('Failed to load data');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means it runs only once when the component mounts

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div>Github Followers: {data.followers}</div>
      <img src={data.avatar_url} alt="GitHub Avatar" />
    </>
  );
}

export default Github;
