import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my portfolio. Explore the links below to learn more about me and my work.</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
