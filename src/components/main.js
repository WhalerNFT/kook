import React from 'react';
import './main.scss';

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main__head d-flex justify-content-center position-relative">
            <img className="main__head-img" src="head.png" alt="Head" />
            <img className="main__hands-glasses-img position-absolute w-100" src="hands-glasses.png" alt="Head" />
          </div>
          <div className="position-relative">
            <div className="main__yellowboard-content">
              <h1>KOOK</h1>
              <p>A collection of</p>
              <p>
                <span className="main__yellowboard-content-count">10,000</span> kooks
              </p>
              <p>
                Look for fellows <br /> to make a unique metaverse
              </p>
            </div>
            <img className="main__yellowboard top-0 w-100 position-absolute" src="yellowboard.png" alt="Yellow Board" />
            <img className="main__mint position-absolute" src="mint-button.png" alt="Mint button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
