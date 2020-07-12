import { useState } from 'react';

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
        <p>Element 1</p>
      </div>
    </div>
  );
}
