import React, { useState } from 'react';
import { useI18n } from 'react-simple-i18n';
import './main.scss';

const Main = () => {
  const { t } = useI18n();
  const [handStyle, setHandStyle] = useState({});
  const handleMouseEnterMint = () => {
    setHandStyle({
      top: '31%',
    });
    setTimeout(() => {
      setHandStyle({
        top: '33%',
      });
    }, 200);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main__head d-flex justify-content-center position-relative">
            <img className="main__head-img position-relative" src="head.png" alt="Head" />
            <img
              className="main__hands-glasses-img position-absolute w-100"
              style={handStyle}
              src="hands-glasses.png"
              alt="hands"
            />
          </div>
          <div className="position-relative">
            <div className="main__yellowboard-content position-absolute">
              <h1 className="fw-bold">KOOK</h1>
              <p>{t('a_collection_of')}</p>
              <p>
                <span className="main__yellowboard-content-count fw-bold">10,000</span> {t('kooks')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('main_intro') }}></p>
            </div>
            <img className="main__yellowboard top-0 w-100" src="yellowboard.png" alt="Yellow Board" />
            <img
              onMouseEnter={handleMouseEnterMint}
              className="main__mint position-absolute"
              src="mint-button.png"
              alt="Mint button"
            />
            <img className="main__mini-logo position-absolute" src="logo-mini.png" alt="mini logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
