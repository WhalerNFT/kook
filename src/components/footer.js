import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <>
      <div className="row">
        <img className="mt-5 footer__decoration w-100 d-lg-none" src="footer-decoration.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img className="footer__logo" src="logo.png" alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <h5>@KOOK 2022</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
