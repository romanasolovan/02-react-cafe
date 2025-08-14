import css from "../VoteOptions/VoteOptions.module.css";
import  type {VoteType } from "../../types/votes";
interface VoteOptionsProps {
    onVote: (value: VoteType) => void,
    onReset: () => void,
    canReset: boolean;
};


const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => { onVote('good') }} >Good</button>
            <button className={css.button} onClick={() => { onVote('neutral') }} >Neutral</button>
            <button className={css.button} onClick={() => { onVote('bad') }} >Bad</button>
            {canReset && (<button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>)}
        </div>
    )
};

export default VoteOptions;