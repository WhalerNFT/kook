import React from 'react';
import Slider from 'react-slick';
import { useI18n } from 'react-simple-i18n';
import './who-is-kook.scss';

const slideSettings = {
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const WhoIsKook = () => {
  const { t } = useI18n();

  return (
    <div id="about" className="container">
      <div className="row">
        <div className="col">
          <div className="who__title position-relative mb-8">
            <h1 className="text-center">{t('who_is_kook')}</h1>
            <span className="who__question-mark position-absolute">?</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="who__slides position-relative mb-8">
            <Slider {...slideSettings}>
              <div className="who__slides-item">
                <img className="who__slides-item-img" src="slides1.png" alt="1" />
              </div>
              <div className="who__slides-item">
                <img className="who__slides-item-img" src="slides2.png" alt="2" />
              </div>
              <div className="who__slides-item">
                <img className="who__slides-item-img" src="slides3.png" alt="3" />
              </div>
              <div className="who__slides-item">
                <img className="who__slides-item-img" src="slides4.png" alt="4" />
              </div>
            </Slider>
            <div className="who__slides who__slides-bg mt-5 position-absolute"></div>
            <img className="who__tape position-absolute" src="tape.png" alt="tape" />
          </div>
        </div>
        <div
          className="col-12 col-md-6 text-center who__intro"
          dangerouslySetInnerHTML={{ __html: t('who_is_kook_intro') }}
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 order-md-2">
          <div className="who__img-container mt-4 d-flex justify-content-center">
            <img className="who__img" src="who.png" alt="Who" />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-1">
          <h4 className="text-center mt-8">{t('vision_and_value')}</h4>
          <p className="lh-lg text-center" dangerouslySetInnerHTML={{ __html: t('vision_and_value_content') }} />
        </div>
      </div>
      <div className="kooks-container d-flex justify-content-between mt-8">
        <img src="0506.png" alt="kooks" />
      </div>
      <img className="kook-line" src="line.png" alt="line" />
      <h1 className="kooks-all text-center">WE ARE ALL KOOKS!</h1>
      <div>
        <img className="kook-line" src="line.png" alt="line" />
      </div>
    </div>
  );
};

export default WhoIsKook;
