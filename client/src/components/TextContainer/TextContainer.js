import React from 'react';
import ReactEmoji from 'react-emoji';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div></div>
    {users ? (
      <div>
        <h1>
          Usuários ativos na sala <span>{ReactEmoji.emojify(room)}</span>:
        </h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img
                  className="activeUser"
                  alt="Online Icon"
                  src={onlineIcon}
                />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
