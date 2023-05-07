import { Container, Grid } from '@mui/material';
import ModifiedTransformerLossesScheme from './ModifiedTransformerLossesScheme';
import Sliders from './Sliders';
import RadioButtons from './RadioButtons';
import { useState } from 'react';
import TransformerLossesChart from './Plot';

export default function TransformerLosses() {
    const [value, setValue] = useState('all');
    const [losses, setLosses] = useState([])
    return (
        <Container maxWidth={'md'} sx={{ paddingTop: '90px' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <ModifiedTransformerLossesScheme />
                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                    <RadioButtons setValue={setValue} value={value} />
                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                    <Sliders value={value} losses={losses} setLosses={setLosses} />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <TransformerLossesChart losses={losses} />
                </Grid>
            </Grid>
        </Container>
    );
};