import {  Container, Typography, Grid } from '@mui/material'
import ModifiedKirchhoffScheme from './Scheme/ModifiedKirchhoffScheme';
import styles from './Kirchhoff.module.css'
export default function Kirchhoff() {
    return (
        <Container maxWidth={'lg'} className={styles['container']}>
            <Grid container className={styles['wrapper']}>
                <Grid item xs={12} md={12} lg={12} className={styles['title']}>
                    <Typography variant='h3'>Изчисляване на просто потоко&shy;разпределение в мрежа НН. (без отчитане на загубите в линиите)</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} className={styles['text-wrapper']}>
                    <p>&emsp;Въведете мощностите на товарите във всеки възел. При това ще видите как се променят мощностите във всеки клон на мрежата съгласно I-ви закон на Кирхоф.</p>
                    <p>&emsp;Примерът е за потокоразпределение на активните мощности, но същият принцип се прилага и за разпределение на реактивните мощности.</p>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                    <ModifiedKirchhoffScheme />
                </Grid>
            </Grid>
        </Container >
    );
};