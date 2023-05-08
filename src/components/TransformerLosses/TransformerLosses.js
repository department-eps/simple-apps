import { Container, Grid } from '@mui/material';
import ModifiedTransformerLossesScheme from './Scheme/ModifiedTransformerLossesScheme';
import Sliders from './Inputs/Sliders';
import RadioButtons from './Inputs/RadioButtons';
import TransformerLossesChart from './Charts/Chart';
import { TransformerLossesProvider } from '../../contexts/TransformerLossesContext';

export default function TransformerLosses() {

    return (
        <TransformerLossesProvider>
            <Container maxWidth={'md'} sx={{ paddingTop: '90px' }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                        <ModifiedTransformerLossesScheme />
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                        <RadioButtons />
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{ textAlign: 'center' }}>
                        <Sliders />
                    </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                            <TransformerLossesChart />
                        </Grid>
                </Grid>
            </Container>
        </TransformerLossesProvider>
    );
};