import React, { useState } from 'react';
import '../App.css';

export const TableComponent = () => {
  
  const [array, setArray] = useState(Array(9).fill(null));
  const [counter, setCounter] = useState(0);
  
  const paintCell = (e) => {
    const id = Number(e.target.id)
    if (counter % 2 === 0 && array[id] === null) {
      e.target.innerHTML = "X";
      setArray(prevState => prevState.map((item, index) => id === index? 1: item));
    } else if (counter % 2 != 0 && array[id] === null) {
      e.target.innerHTML = "O";
      setArray((prevState) =>
        prevState.map((item, index) => (id === index ? -1 : item))
      );
    }
  }
  
  const clickCell = (e) => {
    
    paintCell(e);
    // checkWinner();
    setCounter(counter + 1);
  }
  
  return (
    <section className="table">
    {Array(9).fill(0).map((item, index) => {
      return (
        <article 
        className="table__cell" 
        key={index} 
        id={index}
        onClick={(e) => clickCell(e)}
        ></article>
        )
      })}
      </section>
      );
    }
    