import type {NextPage} from 'next'
import Game from "../components/game";
import {Container, Paper, Typography} from "@mui/material";

const Home: NextPage = () => {
    return (
        <Container maxWidth={"sm"}>
            <Paper style={{padding: 16}}>
                <Typography
                    variant={"h2"}
                    style={{textAlign: "center"}}
                    gutterBottom
                >
                    Tic-Tac-Toe
                </Typography>
                <Game/>
            </Paper>
        </Container>
    )
}

export default Home
