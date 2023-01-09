import './App.css';
import { TableComponent } from './components/TableComponent';
import { BtnStartComponent } from './components/BtnStartComponent';
import { useRef, useState } from 'react';

function App() {
  const [array, setArray] = useState(Array(9).fill(null));
  const [counter, setCounter] = useState(0);
  const btnStart = useRef(null);
  
  const dissapearOrAppearBtn = () => btnStart.current.classList.toggle("disappear");
  
  const ableOrDisableCells = () => {
    const cells = document.querySelectorAll(".table__cell");
    cells.forEach((cell) => cell.classList.toggle("add_click"));
  }

  const cleanTable = () => {
    const cells = document.querySelectorAll(".table__cell");
    cells.forEach((cell) => cell.innerHTML="");
  }

  const restartGame = () => {
    ableOrDisableCells();
    dissapearOrAppearBtn();
    cleanTable();
    setArray([null, null, null, null, null, null, null, null, null]);
    setCounter(0);
  }

  const startGame = () => {
    dissapearOrAppearBtn();
    ableOrDisableCells();
  };
 
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__h1">3 en raya</h1>
      </header>
      <main className="main">
        <TableComponent 
          restartGame={restartGame}
          array={array}
          setArray={setArray}
          counter={counter}
          setCounter={setCounter}
        />
        <BtnStartComponent startGame={startGame} btnStart={btnStart} />
      </main>
    </div>
  );
}

export default App;
