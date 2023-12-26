import './card.css';
import Icons from '../Icons/icon';
function Card({  gameEnd,players,onPlay,index }) {
    let icon = <Icons />
    if (players === 'X') {
        icon = <Icons name='cross' />
    } if (players ==='O') {
        icon = <Icons name='circle' />

    }
    return (

<div className='gopinath'>
<div className='card' onClick={()=>    !gameEnd && onPlay(index)}>
{icon}
        </div>

</div>
    )
}
export default Card;