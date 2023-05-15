import { Container, Grid, Typography } from "@mui/material";
import { ActivePower, ActiveResistance, LongitudinalReactiveResistance, LongitudinalActiveResistance, NominalVoltage, PowerLineLossEquation, ReactivePower, ReactiveResistance, ActiveResistanceForKm, ReactiveResistanceForKm, LengthLine } from "./Equations";
import RadioButtons from "./RadioButtons";
import { useState } from "react";
import Sliders from "./Sliders";

export default function PowerLineLosses() {
    const [radioValue, setRadioValue] = useState('all');

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
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'left', fontFamily: 'sans-serif' }}>
                    <Typography sx={{ fontSize: '20px' }}>Положителни <span className="katex mathnormal" style={{ fontStyle: 'italic' }}>P, Q</span> означават консумация на мощност.</Typography>
                    <Typography sx={{ fontSize: '20px' }}>Отрицателни <span className="katex mathnormal" style={{ fontStyle: 'italic' }}>P, Q</span> означават генерация на мощност (например PV централа).</Typography>
                    <Typography sx={{ fontSize: '20px', paddingTop: '20px' }}>Изследвайте как загубите на напрежение се влияят от:</Typography>
                    <ul style={{fontSize: '20px'}}>
                        <li>Активна мощност на товара</li>
                        <li>Реактивна мощност на товара</li>
                        <li>Дължината (т.е импеданса) на товара</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3} sx={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                    <RadioButtons radioValue={radioValue} setRadioValue={setRadioValue} />
                </Grid>
                <Grid item xs={12} md={6} lg={3} sx={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                    <Sliders radioValue={radioValue} />
                </Grid>
            </Grid>
        </Container>
    );
};