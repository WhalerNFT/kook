import React from 'react';
import { useI18n } from 'react-simple-i18n';
import './roadmap.scss';

const Roadmap = () => {
  const { t } = useI18n();

  return (
    <div id="roadmap" className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-9 mb-7 text-center">{t('roadmap_title')}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="roadmap__container position-relative d-flex flex-column align-items-center">
            <div className="roadmap__top">
              <img className="roadmap__bg" src="roadmap-top.png" alt="" />
            </div>
            <div className="roadmap__mid d-flex align-items-center flex-column">
              <img className="roadmap__img" src="序号1.png" alt="" />
              <div className="roadmap__content mt-4 mb-7">
                <h3 className="text-center">{t('chapter1')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('chapter1_content') }} />
              </div>
              <img className="roadmap__img" src="序号2.png" alt="" />
              <div className="roadmap__content mt-4 mb-7">
                <h3 className="text-center">{t('chapter2')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('chapter2_content') }} />
              </div>
              <img className="roadmap__img" src="序号3.png" alt="" />
              <div className="roadmap__content mt-4 mb-7">
                <h3 className="text-center">{t('chapter3')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('chapter3_content') }} />
              </div>
            </div>
            <div className="roadmap__bottom">
              <img className="roadmap__bg" src="roadmap-bottom.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
