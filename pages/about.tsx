import React from 'react';

interface IProps {}

const About: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
    </div>
  );
};

export default About;
