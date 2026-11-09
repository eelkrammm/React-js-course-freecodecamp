const { useState } = React;

export function Board() {

  const [isX, setIsX] = useState(true); 
  const [box, setBox] = useState(Array(9).fill(null));
  const [index, setIndex] = useState(null);
  const [arrayX, setArrayX] = useState("");
  const [arrayO, setArrayO] = useState("");
  const [winner, setWinner]  = useState(null);

  let winCombination  = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  winCombination = winCombination.map((item) => {
    return item.join("");
  })

  console.log(winCombination)

  const handleClick = (value) => {
    if (box[value] !== null || winner) return;
    const newBox = [...box];
    newBox[value] = isX ? 'X' : 'O';
    setBox(newBox);
    setIndex(value);
    let isWin = false;
    if(isX){
      const newArrayX = ([...arrayX.split(""), value]);
      newArrayX.sort((a, b) => a - b);
      const string = newArrayX.join("");
      setArrayX(string);
      isWin = string.length >= 3 && winCombination.some(item => 
        item.split("").every(num => string.includes(num))
      );
      if(isWin){
        setWinner("X");
      }
    }else{
      const newArrayO = [...arrayO.split(""), value];
      newArrayO.sort((a,b) => a - b);
      const string = newArrayO.join("");
      setArrayO(string);
      const isWin = string.length >= 3 && winCombination.some(item => 
        item.split("").every(num => string.includes(num))
      );
      if(isWin){
        setWinner("O");
      }     
      }
      setIsX(!isX);
  }

  const handleReset = () => {
    setBox(Array(9).fill(null));
    setWinner(null);
    setArrayX("");
    setArrayO("");    
    setIsX(true);     
    setIndex(null);
  }
  console.log(arrayX);

  return (
    <div className="container">
    <h1>Tic-Tac-Toe</h1>
    <p>
  {winner 
    ? `Winner: ${winner}` 
    : box.every(item => item !== null) 
      ? "Game is a draw"
      : `Next Player: ${isX ? "X" : "O"}`
  }
</p>

    <div className="game-container">
    {box.map((item, index) => (
      <button className="square" key={index} onClick={() => handleClick(index)}>{item}</button>
    ))}
    </div>
    <button id="reset" onClick={handleReset} >Reset Game</button>
    </div>
  )
}
