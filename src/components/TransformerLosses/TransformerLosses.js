import { Container, Grid } from '@mui/material';
import ModifiedTransformerLossesScheme from './ModifiedTransformerLossesScheme';
import Sliders from './Sliders';
import RadioButtons from './RadioButtons';

export default function TransformerLosses() {
    return (
        <Container maxWidth={'lg'} sx={{ paddingTop: '90px' }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <ModifiedTransformerLossesScheme />
                </Grid>
                <Grid item xs={6} md={3} lg={3} sx={{ textAlign: 'center' }}>

                    <RadioButtons />
                </Grid>
                <Grid item xs={6} md={3} lg={3} sx={{ textAlign: 'center' }}>

                    <Sliders></Sliders>
                </Grid>
            </Grid>
        </Container>
    );
};