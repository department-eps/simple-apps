import { Grid, Container, StyledEngineProvider, Typography, Box } from "@mui/material";
import styles from "./PowerAngle.module.css"
import { useState } from "react";
import { Chart } from "./Charts/Chart";
import Inputs from "./Inputs/Inputs";
import { InlineMath } from "react-katex";
import { ReactComponent as PowerAngleScheme } from './Scheme/PowerAngleScheme.svg'

export default function PowerAngle() {
    const [result, setResult] = useState([]);
    return (
        <StyledEngineProvider injectFirst>
            <Container maxWidth={'lg'} className={styles['container']}>
                <Grid
                    container
                    spacing={2}
                    className={styles['wrapper']}
                >
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                        <Typography variant="h3">Ъглови характеристики на активна и реактивна мощност на клоновете на генератора</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Box className={styles['text']}>
                            <Typography variant='h5'>Задават се:</Typography>
                            <ul className={styles['list-items']}>
                                <li>Изпратено напрежение - <InlineMath math={'U_s'} /> [pu]</li>
                                <li>Получено напрежение - <InlineMath math={'U_r'} /> [pu]</li>
                                <li>Активното съпротивление <InlineMath math={'R'} /> [pu]</li>
                                <li>Реактивното съпротивление - <InlineMath math={'X'} /> [pu]</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <svg width="450" height="100" style={{ width: "100%", height: "auto", maxWidth: "100%", fontFamily: 'Times New Roman' }} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
                            <PowerAngleScheme />
                        </svg>
                    </Grid>
                    <Inputs setResult={setResult} />
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']} sx={{marginTop: '20px'}}>
                        <Typography variant="h5" sx={{paddingLeft: '40px'}}>Ъглова характеристика</Typography>
                        <Chart result={result} />
                    </Grid>
                </Grid>
            </Container>
        </StyledEngineProvider>
    );
};