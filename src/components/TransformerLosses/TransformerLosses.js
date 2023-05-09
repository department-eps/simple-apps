import { Container, Grid, StyledEngineProvider, Typography, Box } from '@mui/material';
import ModifiedTransformerLossesScheme from './Scheme/ModifiedTransformerLossesScheme';
import Sliders from './Inputs/Sliders';
import RadioButtons from './Inputs/RadioButtons';
import TransformerLossesChart from './Charts/Chart';
import { TransformerLossesProvider } from '../../contexts/TransformerLossesContext';
import LossesDisplay from './LossesDisplay/LossesDisplay';

export default function TransformerLosses() {

    return (
        <StyledEngineProvider injectFirst>
            <TransformerLossesProvider>
                <Container maxWidth={'lg'} sx={{ paddingTop: '90px' }}>
                    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                            <Typography variant='h3'>Изчисляване на загубите на мощност в силов трансформатор, при известни данни в началото</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box sx={{ maxWidth: '700px', margin: '0 auto',  textAlign: 'left' }}>
                                <Typography variant='h5'>Задават се:</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Захранващо напрежение - U1 [kV]</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Пълна мощност - S1 [kVA]</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Фактор на мощността - cosφ [ind]</Typography>
                                <Typography variant='h5' sx={{paddingTop: '15px'}}>Като резултат се изчисляват:</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Загубите на активна и реактивна мощност на празен ход (в магн.) и късо (в нам.)</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Напрежението на ниската страна на трансформатора</Typography>
                                <Typography sx={{ fontSize: '20px' }}>&emsp;- Графично изобразяване на компонентите на загуба</Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ paddingTop: '27px' }}>
                            <LossesDisplay />
                        </Box>
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
        </StyledEngineProvider>
    );
};