import React from 'react';
import { useI18n } from 'react-simple-i18n';
import './distribution.scss';

const Distribution = () => {
  const { t, i18n } = useI18n();

  return (
    <div className="container mt-7">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-7">{t('distribution_title')}</h1>
          <div className="distribution__chart-container d-flex justify-content-center">
            <div className="distribution__chart-wrapper position-relative">
              <img className="distribution__chart" src="distribution.png" alt="distribution" />
              <p className="position-absolute distrubution__perc5">5%</p>
              <p className="position-absolute distrubution__perc60">60%</p>
              <p className="position-absolute distrubution__perc35">35%</p>
              <div
                className={`position-absolute distrubution__desc text-center d-none d-md-block ${
                  i18n.getLang() === 'zh_CN' ? 'distrubution__desc--cn-offset' : ''
                }`}
              >
                <p className="distrubution__line" dangerouslySetInnerHTML={{ __html: t('public_sale') }}></p>
                <p className="distrubution__line">{t('whitelist_community')}</p>
                <p className="distrubution__line">{t('team_artist')}</p>
              </div>
              <p className="distrubution__blue-line position-absolute d-md-none">
                <img className="position-absolute" src="blue-line.png" alt="" />
                {t('public_sale')}
              </p>
              <p className="distrubution__yellow-line position-absolute d-md-none">
                <img className="position-absolute" src="yellow-line.png" alt="" />
                {t('whitelist_community')}
              </p>
              <p className="distrubution__red-line position-absolute d-md-none">
                <img className="position-absolute" src="red-line.png" alt="" />
                {t('team_artist')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
