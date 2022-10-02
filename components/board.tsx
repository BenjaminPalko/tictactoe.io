import React from "react";
import Square from "./square";
import {Box, Grid} from "@mui/material";

interface BoardProps {

}

interface BoardState {
    squares: Array<string>;
    xIsNext: boolean;
}

export default class Board extends React.Component<BoardProps, BoardState> {

    constructor(props: BoardProps) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i: number, value: string) {
        return (
            <Square onClick={() => this.handleClick(i)} value={value} />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
        }

        return (
            <Box>
                <div>{status}</div>
                <Grid container spacing={1}>
                    {
                        this.state.squares.map((value, index) => {
                            return (<Grid item key={index} xs={4}>
                                {this.renderSquare(index, value)}
                            </Grid>)
                        })
                    }
                </Grid>
            </Box>
        )
    }
}

function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
