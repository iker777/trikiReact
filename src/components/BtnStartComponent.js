import React from 'react';
import '../App.css';

export const BtnStartComponent = ({startGame, btnStart}) => {

   return (
         <button className="btn_start" id="btn_resume" ref={btnStart} onClick={startGame}>Iniciar juego</button>
      )
   }
   