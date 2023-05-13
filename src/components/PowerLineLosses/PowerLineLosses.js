import { Container, Grid, Typography } from "@mui/material";
import { ActivePower, ActiveResistance, LongitudinalReactiveResistance, LongitudinalActiveResistance, NominalVoltage, PowerLineLossEquation, ReactivePower, ReactiveResistance, ActiveResistanceForKm, ReactiveResistanceForKm, LengthLine } from "./Equations";

export default function PowerLineLosses() {
    return (
        <Container maxWidth={'lg'} sx={{ paddingTop: '90px' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" fontFamily={"sans-serif"}>Изчисляване на загуби на напрежение в надлъжен елемент (електропровод)</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <PowerLineLossEquation />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'left' }}>
                    <ActivePower />
                    <ReactivePower />
                    <ActiveResistance />
                    <ReactiveResistance />
                    <NominalVoltage />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'left' }}>
                    <LongitudinalActiveResistance />
                    <LongitudinalReactiveResistance />
                    <ActiveResistanceForKm />
                    <ReactiveResistanceForKm />
                    <LengthLine />
                </Grid>
            </Grid>
        </Container>
    );
};