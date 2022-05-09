import React from 'react';
import { useI18n } from 'react-simple-i18n';
import './team.scss';

const members = [
  {
    name: 'member1',
    role: 'member1_role',
    image: 'member1.png',
  },
  {
    name: 'member2',
    role: 'member2_role',
    image: 'member2.png',
    isReverse: true,
  },
  {
    name: 'member3',
    role: 'member3_role',
    image: 'member3.png',
  },
  {
    name: 'member4',
    role: 'member4_role',
    image: 'member4.png',
    isReverse: true,
  },
  {
    name: 'member5',
    role: 'member5_role',
    image: 'member5.png',
  },
];

const Member = ({ name, role, image, t }) => {
  return (
    <div className="text-center mt-5">
      <img className="team__image mb-3" src={image} alt={t(name)} />
      <h4>{t(name)}</h4>
      <p>{t(role)}</p>
    </div>
  );
};

const MemberMobile = ({ name, role, image, isReverse, t }) => {
  return (
    <div className={`position-relative mt-5 ${isReverse ? 'team__image-mobile-reserve' : ''}`}>
      <img className="team__glasses-bg" src="member-glasses.png" alt="member glasses" />
      <img className={'team__image-mobile position-absolute mb-3'} src={image} alt={t(name)} />
      <div className="team__member-info position-absolute text-center">
        <h4>{t(name)}</h4>
        <p>{t(role)}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const { t } = useI18n();
  return (
    <div id="team" className="container">
      <h1 className="text-center mt-9 mb-3">{t('team_title')}</h1>
      <div className="row d-none d-lg-block">
        <div className="col">
          <div className="position-relative mb-3">
            <div className="team__container d-flex justify-content-evenly">
              {members.map((props) => (
                <Member key={props.image} {...props} t={t} />
              ))}
            </div>
            <img className="team__bus top-0 position-absolute" src="bus.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row d-lg-none">
        <div className="col">
          {members.map((props) => (
            <MemberMobile key={props.image} {...props} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
