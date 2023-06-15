import { Grid, Typography, Container, Box, StyledEngineProvider } from "@mui/material";
import Inputs from "./Inputs/Inputs";
import styles from './RotorAngle.module.css'
import { useState } from "react";
import Plot from "./Charts/Chart";
import { ReactComponent as RotorAngleScheme } from './Scheme/RotorAngleScheme.svg'
import { TableResult } from "./TableResult/TableResult";
import { InlineMath } from "react-katex";
export default function RotorAngle() {
    const [result, setResult] = useState({});
    const [dataTable, setDataTable] = useState([])
    return (
        <StyledEngineProvider injectFirst>
            <Container maxWidth={'lg'} className={styles['container']}>
                <Grid
                    container
                    spacing={2}
                    className={styles['wrapper']}
                >
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                        <Typography variant="h3">Устойчивост по роторен ъгъл при малки смущения</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Box className={styles['text']}>
                            <Typography variant='h5'>Задават се:</Typography>
                            <ul>
                                <li>Активното съпротивление на генераторния клон - <InlineMath math={'R'} /> [pu]</li>
                                <li>Реактивното съпротивление на генераторния клон - <InlineMath math={'X'} /> [pu]</li>
                                <li>Съпротивлението на статора - <InlineMath math={'R_a'} /> [pu]</li>
                                <li>Преходния реaктанс по ос d <InlineMath math={'X^\\prime_d'} /> [pu]</li>
                                <li>Напрежението във възел 1 - <InlineMath math={'U_1'} /> [pu]</li>
                                <li>Инерционната константа - <InlineMath math={'H'} /> [MW.s/MVA]</li>
                                <li>Напрежението във възел 2 - <InlineMath math={'U_2'} /> [pu]</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                        <svg width="450" height="100" style={{ width: "100%", height: "auto", maxWidth: "100%", fontFamily: 'Times New Roman' }} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
                            <RotorAngleScheme />
                        </svg>
                    </Grid>
                    <Inputs setResult={setResult} setDataTable={setDataTable} />
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                        <Box sx={{ paddingTop: '10px' }}>
                            <Typography variant="h5">Собствени стойности</Typography>
                            {result?.scatterDataPlus &&
                                <Plot result={result}></Plot>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                        <TableResult dataTable={dataTable} />
                    </Grid>
                </Grid>
            </Container>
        </StyledEngineProvider>
    );
};