import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_LINKS } from '../helpers/constants';

const Header = () => {
  return (
    <header className="header">
      <ul className="nav__menu">
        {MENU_LINKS.map(({ path, linkName }) => (
          <li key={linkName}>
            <Link to={path}>{linkName}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
