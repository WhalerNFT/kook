import React from 'react';
import './distribution.scss';

const Distribution = () => {
  return (
    <div className="container mt-7">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-7">Distribution</h1>
          <div className="distribution__chart-container d-flex justify-content-center">
            <div className="distribution__chart-wrapper position-relative">
              <img className="distribution__chart" src="/distribution.png" alt="distribution" />
              <p className="position-absolute distrubution__perc5">5%</p>
              <p className="position-absolute distrubution__perc60">60%</p>
              <p className="position-absolute distrubution__perc35">35%</p>
              <div className="position-absolute distrubution__desc text-center">
                <p className="distrubution__line">PUBLIC SALE</p>
                <p className="distrubution__line">WHILELIST & COMMUNITIES</p>
                <p className="distrubution__line">TEAM AND ARTIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
