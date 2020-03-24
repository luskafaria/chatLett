import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [appearJoin, setAppearJoin] = useState(false);

  useEffect(() => {
    return setAppearJoin(true);
  }, []);

  return (
    <CSSTransition in={appearJoin} timeout={150} classNames="appear">
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Lett Chat</h1>
          <div>
            <input
              type="text"
              placeholder="nome"
              className="joinInput"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="sala"
              className="joinInput mt-20"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20 ripple" type="submit">
              Acessar
            </button>
          </Link>

          <div className="howToContainer">
            <h3>Sobre:</h3>
            <p>
              Este projeto foi contruído com as tecnologias: React e Socket.io e
              trata-se de um protótipo de sala de bate papo
            </p>

            <h3>Utilização:</h3>
            <p>
              Escolha um nome de usuário e crie um nome para a sua sala. Em
              seguida, clique em Acessar.
            </p>
            <p>
              Caso queira acessar uma sala já existente, informe exatamente o
              nome da sala.
            </p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Join;
