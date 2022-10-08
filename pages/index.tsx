import type {NextPage} from 'next';
import Game from "../components/game";
import {Box, Container, CssBaseline, Paper, ThemeProvider, Typography} from "@mui/material";
import {lightTheme} from "../constants/themes";

const Home: NextPage = () => {

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Container maxWidth={"md"} sx={{mt: {xs: "auto", md: 4}}}>
                <Box component={Paper} sx={{p: 16}}>
                    <Typography
                        variant={"h2"}
                        sx={{textAlign: "center"}}
                        gutterBottom
                    >
                        Tic-Tac-Toe
                    </Typography>
                    <Game/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Home
