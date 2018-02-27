import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
      <Link to="/trade">Trade</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
