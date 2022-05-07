import React from 'react';
import { useI18n } from 'react-simple-i18n';
import './footer.scss';

const Footer = () => {
  const { t } = useI18n();

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
            <h6>@KOOK 2022</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
