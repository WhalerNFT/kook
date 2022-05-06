import React from 'react';
import { useI18n } from 'react-simple-i18n';
import './nav.scss';

const Nav = () => {
  const { t, i18n } = useI18n();

  const handleChangeLanguage = () => {
    const currentLang = i18n.getLang();
    if (currentLang === 'en_US') {
      i18n.setLang('zh_CN');
    } else {
      i18n.setLang('en_US');
    }
  };

  return (
    <div className="container my-7">
      <div className="d-flex justify-content-center">
        <img className="nav__logo" src="logo.png" alt="Logo" />
      </div>
      <div className="row my-4">
        <div className="col-xs-12 col-md-6 offset-md-3 mb-3">
          <div className="nav__items d-flex justify-content-around align-items-center h-100">
            <div>
              <a href="#about">{t('about')}</a>
            </div>
            <div>
              <a href="#roadmap">{t('roadmap')}</a>
            </div>
            <div>
              <a href="#team">{t('team')}</a>
            </div>
          </div>
        </div>
        <div className="col-6 offset-6 col-md-3 offset-md-0">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <img className="nav__social" src="twitter.png" alt="Twitter" />
            </div>
            <div>
              <img className="nav__social" src="discord.png" alt="Discord" />
            </div>
            <div className="nav__language" tabIndex={0} role="button" onClick={handleChangeLanguage}>
              {t('language')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
