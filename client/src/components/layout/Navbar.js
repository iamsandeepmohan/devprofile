import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i class="fas fa-laptop-code" /> DevProfile
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
