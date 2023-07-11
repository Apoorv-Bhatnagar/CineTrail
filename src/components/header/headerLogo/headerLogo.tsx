import React from 'react';

import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  return (
    <div className="header__logo">
     <Link to="/">Cine<span>Trail</span></Link>
    </div>
  );
};

export default HeaderLogo;
