import { useState } from "react";
import Card from '../Card/Card'
import './grid.css'
import isWinner from '../../Helper/iswinner';
function Grid({ numberOfCards }) {
    const [board, SetBoard] = useState(Array(numberOfCards).fill(''));
    const [winner, setWinner] = useState(null)
    const [turn, setTurn] = useState(true)
    function play(index) {
        if (turn == true) {
            board[index] = 'O'
        } else {
            board[index] = 'X'
        }
        const win = isWinner(board, turn ? 'O' : 'X');
        if (win) {
            setWinner(win);
        }
        SetBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        SetBoard(Array(numberOfCards).fill(''))
    
    }
    return (
        <div className="grid-Wrapper">
            
                {
                    winner && (
                        <>
                        <h1 className="Turn-Highlight">The WINNER Is :🏅 {winner} 🏅</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                        </>
                    )
                }
         
            <h1 className="Turn-Highlight">Current turn :-  {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card    key={idx}  onPlay={play} players={el} index={idx} />)}
            </div>
        </div>
    )
}
export default Grid;