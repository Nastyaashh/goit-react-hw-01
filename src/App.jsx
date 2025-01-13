import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import userData from './userData.json';

const App = () => {
  return (
    <div>
      <h1>Social Media Profile</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
