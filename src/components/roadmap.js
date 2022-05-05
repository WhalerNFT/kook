import React from 'react';
import './roadmap.scss';

const Roadmap = () => {
  return (
    <div id="roadmap" className="container">
      <div className="row">
        <div className="col">
          <h1 className="my-7 text-center">Roadmap</h1>
        </div>
      </div>
      <div className="row d-none d-lg-block">
        <div className="col">
          <div className="roadmap__container position-relative  ">
            <div className="roadmap__text-container d-flex">
              <div className="text-center">
                <div>
                  <p className="roadmap__text">
                    text text text text text text text text text text text text text text text text text text text text{' '}
                  </p>
                </div>
                <div>
                  <img className="roadmap__glasses-small" src="glasses-small.png" alt="small glasses" />
                </div>
                <p className="mt-2">Chapter 1</p>
              </div>
              <div className="text-center">
                <div>
                  <p className="roadmap__text">
                    text text text text text text text text text text text text text text text text text text text text{' '}
                  </p>
                </div>
                <div>
                  <img className="roadmap__glasses-small" src="glasses-small.png" alt="small glasses" />
                </div>
                <p className="mt-2">Chapter 2</p>
              </div>
              <div className="text-center">
                <div>
                  <p className="roadmap__text">
                    text text text text text text text text text text text text text text text text text text text text{' '}
                  </p>
                </div>
                <div>
                  <img className="roadmap__glasses-small" src="glasses-small.png" alt="small glasses" />
                </div>
                <p className="mt-2">Chapter 3</p>
              </div>
              <div className="text-center">
                <div>
                  <p className="roadmap__text">
                    text text text text text text text text text text text text text text text text text text text text{' '}
                  </p>
                </div>
                <div>
                  <img className="roadmap__glasses-small" src="glasses-small.png" alt="small glasses" />
                </div>
                <p className="mt-2">Chapter 4</p>
              </div>
            </div>

            <img src="roll.png" className="roadmap__roll top-0 w-100 position-absolute" alt="roll" />
            <img src="black-line.png" className="roadmap__line position-absolute" alt="roll" />
          </div>
        </div>
      </div>
      <div className="row d-lg-none">
        <div className="col position-relative">
          <img className="roadmap__mobile-bg" src="mobile-roll.jpg" alt="" />
          <div className="roadmap__chapter roadmap__c1 position-absolute">
            123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word
          </div>
          <div className="roadmap__chapter roadmap__c2 position-absolute">
            1234 123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123
          </div>
          <div className="roadmap__chapter roadmap__c3 position-absolute">
            123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word
          </div>
          <div className="roadmap__chapter roadmap__c4 position-absolute">
            1234 123 word123 word123 word123 word123 word123 word123 word123 word123 word123 word123
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
