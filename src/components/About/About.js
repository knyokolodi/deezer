import React from 'react';
import Search from '../Search/Search';

const About = () => {
  return (
    <div>
      <Search />
      <h3 style={{ marginTop: '30px' }}>Dvt React Assesment</h3>

      <h4>Tech stack used</h4>
      <ul>
        <li>React</li>
        <li>Hooks</li>
        <li>Functional components</li>
        <li>React Bootstrap</li>
      </ul>
    </div>
  );
};

export default About;
