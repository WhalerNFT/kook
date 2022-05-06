import React, { useState } from 'react';
import { useI18n } from 'react-simple-i18n';
import './main.scss';

const Main = () => {
  const { t } = useI18n();
  const [handStyle, setHandStyle] = useState({});
  const handleMouseEnterMint = () => {
    setHandStyle({
      top: '29.5%',
    });
    setTimeout(() => {
      setHandStyle({
        top: '30.5%',
      });
    }, 200);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main__head d-flex justify-content-center position-relative">
            <img className="main__head-img" src="head.png" alt="Head" />
            <img
              className="main__hands-glasses-img position-absolute w-100"
              style={handStyle}
              src="hands-glasses.png"
              alt="hands"
            />
          </div>
          <div className="position-relative">
            <div className="main__yellowboard-content">
              <h1 className="fw-light">KOOK</h1>
              <p>{t('a_collection_of')}</p>
              <p>
                <span className="main__yellowboard-content-count">10,000</span> {t('kooks')}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('main_intro') }}></p>
            </div>
            <img className="main__yellowboard top-0 w-100 position-absolute" src="yellowboard.png" alt="Yellow Board" />
            <img
              onMouseEnter={handleMouseEnterMint}
              className="main__mint position-absolute"
              src="mint-button.png"
              alt="Mint button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
