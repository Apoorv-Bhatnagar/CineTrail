import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-testid='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__copyright">
            Copyright &copy; 2023 All rights reserved
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
