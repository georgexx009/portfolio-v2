import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [widthSideBar, setWidthSideBar] = useState('0px');
  return (
    <div id="navbar">
      <span className="menu-btn" onClick={() => setWidthSideBar('300px')}>
        <i className="fas fa-bars"></i>
      </span>

      <div
        className="sidebar"
        style={{ width: widthSideBar }}
        onClick={() => setWidthSideBar('0px')}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/YosaeTaedo">
          <a>Yosae Taedo</a>
        </Link>
        <Link href="/projects">
          <a>Portfolio</a>
        </Link>
      </div>
    </div>
  );
}
