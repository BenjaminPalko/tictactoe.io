import type {NextPage} from 'next'
import Game from "../components/game";
import {Container, CssBaseline, Paper, ThemeProvider, Typography} from "@mui/material";
import {lightTheme} from "../constants/themes";

const Home: NextPage = () => {

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Container maxWidth={"md"} sx={{mt: {xs: "auto", md: 4}}}>
                <Paper sx={{p: 16}}>
                    <Typography
                        variant={"h2"}
                        sx={{textAlign: "center"}}
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
