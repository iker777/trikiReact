import '../App.css';

export const TableComponent = ({restartGame, array, counter, setArray, setCounter}) => {

  const paintCell = (e) => {
    const id = Number(e.target.id)
    if (counter % 2 === 0 && array[id] === null) {
      e.target.innerHTML = "X";
      let newArrayState = array;
      newArrayState[id] = 1;
      setArray(newArrayState);
    } else if (counter % 2 != 0 && array[id] === null) {
      e.target.innerHTML = "O";
      let newArrayState = array;
      newArrayState[id] = -1;
      setArray(newArrayState);
    }
  }

  const isWinner = (winner) => {
    const winnerCombination1 = array[0] + array[1] + array[2];
    const winnerCombination2 = array[3] + array[4] + array[5];
    const winnerCombination3 = array[6] + array[7] + array[8];
    const winnerCombination4 = array[0] + array[3] + array[6];
    const winnerCombination5 = array[1] + array[4] + array[7];
    const winnerCombination6 = array[2] + array[5] + array[8];
    const winnerCombination7 = array[0] + array[4] + array[8];
    const winnerCombination8 = array[2] + array[4] + array[6];

    switch(winner){
      case winnerCombination1:
      case winnerCombination2:
      case winnerCombination3:
      case winnerCombination4:
      case winnerCombination5:
      case winnerCombination6:
      case winnerCombination7:
      case winnerCombination8:
        return true;
      default:
        return false;
    }
  }

  const checkWinner = () => {
    const playerX = { result: 3, winner: false, name: "Jugador1 - X" };
    const playerO = { result: -3, winner: false, name: "Jugador2 - O" };
    playerO.winner = isWinner(playerO.result);
    playerX.winner = isWinner(playerX.result);
    if (playerO.winner || playerX.winner) {
      if (playerO.winner) {
        alert(`${playerO.name} ha ganado!`);
      }
      if (playerX.winner) {
        alert(`${playerX.name} ha ganado!`);
      }
      restartGame();
    }
    if(playerO.winner || playerX.winner){
      setCounter(0)
    }else{
      setCounter(counter + 1);
    }
    if(counter >= 8){
      alert("Nadie ha ganado...");
      restartGame();
    }
  }
  
  const clickCell = (e) => {
    paintCell(e);
    checkWinner();
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
    