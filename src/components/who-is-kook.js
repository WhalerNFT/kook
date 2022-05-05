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
    <div id="about" className="container mt-9">
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
          <h4 className="text-center mt-8">Vision and Value</h4>
          <p>
            We live in a physical world but we see another self in different ones. We switch in between back-and-forth
            as they blend together. We are ready for all the challenges to step out of the comfort zone and status quo.
            We are strong enough while we united as a whole and then make an impact on Web 3 era.
          </p>
        </div>
      </div>
      <div className="kooks-container d-flex justify-content-between mt-8">
        <div className="kook-img-container">
          <img className="kook-img" src="kook1.png" alt="kook1" />
        </div>
        <div className="kook-img-container">
          <img className="kook-img" src="kook2.png" alt="kook2" />
        </div>
        <div className="kook-img-container d-none d-lg-block">
          <img className="kook-img" src="kook3.png" alt="kook3" />
        </div>
        <div className="kook-img-container">
          <img className="kook-img" src="kook4.png" alt="kook4" />
        </div>
        <div className="kook-img-container d-none d-lg-block">
          <img className="kook-img" src="kook5.png" alt="kook5" />
        </div>
        <div className="kook-img-container d-none d-md-block">
          <img className="kook-img" src="kook6.png" alt="kook6" />
        </div>
        <div className="kook-img-container">
          <img className="kook-img" src="kook7.png" alt="kook7" />
        </div>
      </div>
      <div>
        <img className="kook-line" src="line.png" alt="line" />
      </div>
      <h1 className="kooks-all text-center">WE ARE ALL KOOKS!</h1>
      <div>
        <img className="kook-line" src="line.png" alt="line" />
      </div>
    </div>
  );
};

export default WhoIsKook;
