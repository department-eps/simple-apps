import { Container, Grid, StyledEngineProvider, Typography, Box } from '@mui/material';
import ModifiedTransformerLossesScheme from './Scheme/ModifiedTransformerLossesScheme';
import Sliders from './Inputs/Sliders';
import RadioButtons from './Inputs/RadioButtons';
import TransformerLossesChart from './Charts/Chart';
import { TransformerLossesProvider } from '../../contexts/TransformerLossesContext';
import LossesDisplay from './LossesDisplay/LossesDisplay';
import { InlineMath } from 'react-katex';
import styles from './TransformerLosses.module.css'

export default function TransformerLosses() {

    return (
        <StyledEngineProvider injectFirst>
            <TransformerLossesProvider>
                <Container maxWidth={'lg'} className={styles['container']}>
                    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                            <Typography variant='h3'>Изчисляване на загубите на мощност в силов трансформатор, при известни данни в началото</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Box className={styles['text']}>
                                <Typography variant='h5'>Задават се:</Typography>
                                <ul className={styles['list-items']}>
                                    <li>Захранващо напрежение - <InlineMath math={'U_1'} /> [kV]</li>
                                    <li>Пълна мощност - <InlineMath math={'S_1'} /> [kVA]</li>
                                    <li>Фактор на мощността - <InlineMath math={'\\cosφ'} /> [ind]</li>
                                </ul>
                                <Typography variant='h5' sx={{ paddingTop: '15px' }}>Като резултат се изчисляват:</Typography>
                                <ul className={styles['list-items']}>
                                    <li>Загубите на активна и реактивна мощност на празен ход (в магн.) и късо (в нам.)</li>
                                    <li>Напрежението на ниската страна на трансформатора</li>
                                    <li>Графично изобразяване на компонентите на загуба</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Box sx={{ paddingTop: '27px' }}>
                            <LossesDisplay />
                        </Box>
                        <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                            <ModifiedTransformerLossesScheme />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3} className={styles['item']}>
                            <RadioButtons />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3} className={styles['item']}>
                            <Sliders />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                            <TransformerLossesChart />
                        </Grid>
                    </Grid>
                </Container>
            </TransformerLossesProvider>
        </StyledEngineProvider>
    );
};