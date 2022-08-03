import React, { useContext } from 'react';
import AuthContext from '../../Store/Auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {/* my modification isLoggenIn true to false to know whats its usage */}
        {ctx.isLoggedIn === false && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
