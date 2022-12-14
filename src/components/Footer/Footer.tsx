import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h4>Nazwa firmy - wszystkie prawa zastrzeżone, 2022</h4>
      </div>
      <div className="footer-icons">
        <FaInstagram size={'2em'} />
        <AiOutlineFacebook size={'2em'} />
      </div>
    </div>
  );
};

export default Footer;
