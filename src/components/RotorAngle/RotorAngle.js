import { Grid, Typography, Container, Box, StyledEngineProvider } from "@mui/material";
import Inputs from "./Inputs/Inputs";
import styles from './RotorAngle.module.css'
import { useState } from "react";
import Plot from "./Charts/Chart";
import { TableResult } from "./TableResult/TableResult";

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
    )
}