import { Grid, Container, StyledEngineProvider, Typography } from "@mui/material";
import styles from "./PowerAngle.module.css"
import { useState } from "react";
import { Chart } from "./Charts/Chart";
import Inputs from "./Inputs/Inputs";

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
                    <Typography variant="h3">Ъглови характеристики на активната и реактивната мощност на клоновете на генератора</Typography>
                 </Grid>
                    <Inputs setResult={setResult} />
                    <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                        <Typography variant="h5">Ъглова характеристика</Typography>
                        <Chart result={result} />
                    </Grid>
                </Grid>
            </Container>
        </StyledEngineProvider>
    );
};