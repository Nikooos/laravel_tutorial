import React from 'react';
import PostForm from './PostForm'; // Import the PostForm component

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <PostForm /> {/* Use the PostForm component */}
    </div>
  );
};

export default App;
