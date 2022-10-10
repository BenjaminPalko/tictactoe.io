import Board from "./board";

interface GameProps {

}

interface GameState {
    player: {
        symbol: 'X'|'O';
        play: boolean;
    }
}
/**
export class Game extends React.Component<GameProps, GameState>{

    constructor(props: GameProps) {
        super(props);
        this.state = {
             player: {

             }
        }
    }

}**/

export default function Game(props: GameProps) {
    return (
        <div className={"game"}>
            <div className={"game-board"}>
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}
