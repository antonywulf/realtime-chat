import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, name }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="onlineIcon" />
      <h3>{room}</h3>
    </div>

    <div className="rightInnerContainer">
      <a href={`/rooms?name=${name}`}>
        <img src={closeIcon} alt="closeIcon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
