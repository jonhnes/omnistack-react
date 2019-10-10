import React from 'react';
import './Main.css'

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return(
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="dev"/>
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like"/>
            </button>
            <button type="button">
              <img src={dislike} alt="dislike"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="dev"/>
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like"/>
            </button>
            <button type="button">
              <img src={dislike} alt="dislike"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="dev"/>
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like"/>
            </button>
            <button type="button">
              <img src={dislike} alt="dislike"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="dev"/>
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like"/>
            </button>
            <button type="button">
              <img src={dislike} alt="dislike"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}