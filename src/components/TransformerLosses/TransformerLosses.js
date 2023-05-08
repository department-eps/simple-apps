import { Container, Grid } from '@mui/material';
import ModifiedTransformerLossesScheme from './Scheme/ModifiedTransformerLossesScheme';
import Sliders from './Inputs/Sliders';
import RadioButtons from './Inputs/RadioButtons';
import { useState, useCallback } from 'react';
import TransformerLossesChart from './Charts/Chart';

export default function TransformerLosses() {
    const [value, setValue] = useState('all');
    const [losses, setLosses] = useState([]);
    const [baseDot, setBaseDot] = useState();
    const [hasRun, setHasRun] = useState(false);

    const handleSetValue = useCallback((newValue) => {
        setValue(newValue);
    }, []);

    const handleSetLosses = useCallback((newLosses) => {
        setLosses(newLosses);
    }, []);

    return (
        <Container maxWidth={'md'} sx={{ paddingTop: '90px' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <ModifiedTransformerLossesScheme />
                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                    <RadioButtons setValue={handleSetValue} value={value} setHasRun={setHasRun} />
                </Grid>
                <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                    <Sliders value={value} losses={losses} setLosses={handleSetLosses} setBaseDot={setBaseDot} hasRun={hasRun} setHasRun={setHasRun} />
                </Grid>
                {value !== 'all' && (
                    <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                        <TransformerLossesChart losses={losses} baseDot={baseDot} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};