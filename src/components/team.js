import React from 'react';
import './team.scss';

const members = [
  {
    name: 'BigYear (Kook)',
    role: 'Artist',
    image: '/member1.png',
  },
  {
    name: 'Eric',
    role: 'Strategy & Operation',
    image: '/member2.png',
    isReverse: true,
  },
  {
    name: 'Jamie',
    role: 'Marketing & Product',
    image: '/member3.png',
  },
  {
    name: 'Annie',
    role: 'Community & Social media',
    image: '/member4.png',
    isReverse: true,
  },
  {
    name: 'Master Cui',
    role: 'Web3 & Smart Contract',
    image: '/member5.png',
  },
];

const Member = ({ name, role, image }) => {
  return (
    <div className="text-center mt-5">
      <img className="team__image mb-3" src={image} alt={name} />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
};

const MemberMobile = ({ name, role, image, isReverse }) => {
  return (
    <div className={`position-relative mt-5 ${isReverse ? 'team__image-mobile-reserve' : ''}`}>
      <img className="team__glasses-bg" src="member-glasses.png" alt="member glasses" />
      <img className={'team__image-mobile position-absolute mb-3'} src={image} alt={name} />
      <div className="team__member-info position-absolute text-center">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="container">
      <h1 className="text-center my-7">Team</h1>
      <div className="row d-none d-lg-block">
        <div className="col">
          <div className="position-relative mb-3">
            <div className="team__container d-flex justify-content-evenly">
              {members.map((props) => (
                <Member key={props.image} {...props} />
              ))}
            </div>
            <img className="team__bus top-0 position-absolute" src="bus.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row d-lg-none">
        <div className="col">
          {members.map((props) => (
            <MemberMobile key={props.image} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
