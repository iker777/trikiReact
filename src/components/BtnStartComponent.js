import React from 'react';
import '../App.css';

export const BtnStartComponent = ({startGame}) => {



   return (
         <button className="btn_start" id="btn_resume" onClick={startGame}>Iniciar juego</button>
      )
   }
   