import React from "react";
import Square from "./square";
import { Box, Button, Grid, Stack } from "@mui/material";

interface BoardProps {

}

interface BoardState {
    squares: Array<string>;
    xIsNext: boolean;
}

export default function Board(props: BoardProps) {

    const [state, setState] = React.useState<BoardState>({
        squares: Array(9).fill(null),
        xIsNext: true,
    });

    function handleSquareClick(i: number) {
        const squares = state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            squares: squares,
            xIsNext: !state.xIsNext
        });
    }

    function handleResetClick() {
        setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        });
    }

    function renderSquare(i: number, value: string) {
        return (
            <Square onClick={() => handleSquareClick(i)} value={value} />
        );
    }

    const winner = calculateWinner(state.squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${state.xIsNext ? 'X' : 'O'}`
    }

    return (
        <Box>
            <Stack direction={"row"} justifyContent={"space-between"} sx={{mx: 1, mb: 1}}>
                <Box>
                    <div>{status}</div>
                </Box>
                <Box>
                    <Button variant={"contained"} onClick={() => handleResetClick()}>New Game</Button>
                </Box>
            </Stack>
            <Grid container spacing={1}>
                {
                    state.squares.map((value, index) => {
                        return (<Grid item key={index} xs={4}>
                            {renderSquare(index, value)}
                        </Grid>)
                    })
                }
            </Grid>
        </Box>
    )
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
