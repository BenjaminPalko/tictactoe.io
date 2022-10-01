import Board from "./board";

interface GameProps {

}

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