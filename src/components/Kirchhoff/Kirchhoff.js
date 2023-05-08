import {  Container, Typography, Grid } from '@mui/material'
import ModifiedKirchhoffScheme from './Scheme/ModifiedKirchhoffScheme';

export default function Kirchhoff() {
    return (
        <Container maxWidth={'lg'} sx={{ paddingTop: '90px' }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <Typography variant='h3'>Изчисляване на просто потокоразпределение в мрежата в мрежа ниско напрежение (без отчитане на загубите в линиите)</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'left', paddingTop: '15px' }}>
                    <Typography variant='h5'>&emsp;Въведете мощностите на товарите във всеки възел. При това ще видите как се променят мощностите във всеки клон на мрежата съгласно |-ви закон на Кирхоф.</Typography>
                    <Typography variant='h5' sx={{ paddingTop: '15px' }}>&emsp;Примерът е за потокоразпределение на активните мощности, но същият принцип се прилага и за разпределение на реактивните мощности.</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <ModifiedKirchhoffScheme />
                </Grid>
            </Grid>
        </Container >
    );
};