import { useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon';

export default function Navbar() {
  const [widthSideBar, setWidthSideBar] = useState('0px');
  return (
    <div id="navbar">
      <div className="menu-btn" onClick={() => setWidthSideBar('300px')}>
        <i className="fas fa-bars"></i>
      </div>

      <div
        className="sidebar"
        style={{ width: widthSideBar }}
        onClick={() => setWidthSideBar('0px')}
      >
        <div onClick={() => setWidthSideBar('0px')}>
          <Icon src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1595285525/icons/close_btn_r7ji6z.png" />
        </div>

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
