import './App.css';
import { TableComponent } from './components/TableComponent';
import { BtnStartComponent } from './components/BtnStartComponent';

function App() {
  
const dissapearBtn = () => document.querySelector(".btn_start").classList.add("disappear");

const ableCells = () => {
  const cells = document.querySelectorAll(".table__cell");
  cells.forEach((cell) => cell.classList.add("add_click"));
}

const startGame = () => {
  dissapearBtn();
  ableCells();
};
 
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__h1">3 en raya</h1>
      </header>
      <main className="main">
        <TableComponent />
        <BtnStartComponent startGame={startGame}/>
      </main>
    </div>
  );
}

export default App;
