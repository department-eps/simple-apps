import { Box, Container, Grid, StyledEngineProvider, Typography } from "@mui/material";
import { ActivePower, ActiveResistance, LongitudinalReactiveResistance, LongitudinalActiveResistance, NominalVoltage, PowerLineLossEquation, ReactivePower, ReactiveResistance, ActiveResistanceForKm, ReactiveResistanceForKm, LengthLine, DeltaULabel } from "./Equations/Equations";
import RadioButtons from "./Inputs/RadioButtons";
import Sliders from "./Inputs/Sliders";
import Chart from "./Charts/Chart";
import ModifiedPowerLineLossesScheme from "./Scheme/ModifiedPowerLineLossesScheme";
import { PowerLineLossesProvider } from "../../contexts/PowerLineLossesContext";
import styles from "./PowerLineLosses.module.css";

export default function PowerLineLosses() {
    return (
        <StyledEngineProvider injectFirst>
            <PowerLineLossesProvider>
                <Container maxWidth={'lg'} className={styles['container']}>
                    <Grid container spacing={2} className={styles['wrapper']}>
                        <Grid item xs={12} md={12} lg={12} className={styles['item-center']}>
                            <Typography variant="h3">Изчисляване на загуби на напрежение в надлъжен елемент (електропровод)</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} className={styles['item-center']}>
                            <PowerLineLossEquation />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={styles['grid']}>
                            <Box>
                                <ActivePower />
                                <ReactivePower />
                                <ActiveResistance />
                                <ReactiveResistance />
                                <NominalVoltage />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} className={styles['grid']}>
                            <Box>
                                <LongitudinalActiveResistance />
                                <LongitudinalReactiveResistance />
                                <ActiveResistanceForKm />
                                <ReactiveResistanceForKm />
                                <LengthLine />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box paddingTop={5} className={styles['text']}>
                                <div>Положителни <span className={styles['katex-label']}>P, Q</span> означават консумация на мощност.</div>
                                <div>Отрицателни <span className={styles['katex-label']}>P, Q</span> означават генерация на мощност (например PV централа).</div>
                                <div style={{ paddingTop: '50px' }}>Изследвайте как загубите на напрежение се влияят от:</div>
                                <ul style={{ fontSize: '20px' }}>
                                    <li>Активна мощност на товара</li>
                                    <li>Реактивна мощност на товара</li>
                                    <li>Дължината (т.е импеданса) на товара</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} className={styles['item-ceneter']}>
                            <ModifiedPowerLineLossesScheme />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} className={styles['item-center']}>
                            <RadioButtons />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} className={styles['item-center']}>
                            <Sliders />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                            <Typography className={styles['chart-label']}>
                                <DeltaULabel />
                            </Typography>
                            <Chart />
                        </Grid>
                    </Grid>
                </Container>
            </PowerLineLossesProvider>
        </StyledEngineProvider>
    );
};