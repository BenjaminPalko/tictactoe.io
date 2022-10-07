import type {NextPage} from 'next'
import Game from "../components/game";
import {Container, Paper, ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/system";

const Home: NextPage = () => {

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default Home
