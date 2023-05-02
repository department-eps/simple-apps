import { Container, Grid } from '@mui/material';
import ModifiedTransformerLossesScheme from './ModifiedTransformerLossesScheme';

export default function TransformerLosses() {
    return (
        <Container maxWidth={'lg'} sx={{ paddingTop: '90px' }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>  
                        <ModifiedTransformerLossesScheme />
                </Grid>
            </Grid>
        </Container>
    );
};