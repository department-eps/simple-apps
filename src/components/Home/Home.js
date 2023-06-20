import { Container, Grid, Paper, StyledEngineProvider, Typography } from "@mui/material";
import machtovtrafo from '../../static/matchtovtrafo.jpg'
import powerline from '../../static/power.jpg'
import trafo from '../../static/trafo.jpg';
import rotor from '../../static/rotorangle.webp'
import substation from '../../static/substation.jpg'
import styles from './Home.module.css'
import { Link } from "react-router-dom";

const EMS = [
    { id: 1, discipline: 'ЕМС', name: 'Изчисляване на просто потокоразпределение', image: machtovtrafo, url: '/kirchhoff' },
    { id: 2, discipline: 'ЕМС', name: 'Загуби на напрежение в надлъжен елемент', image: powerline, url: '/power-line-losses' },
    { id: 3, discipline: 'ЕМС', name: 'Загуби на мощност в силов трансформатор', image: trafo, url: '/transformer-losses' }];

const UEES = [
    { id: 1, discipline: 'УЕЕС', name: 'Ъглова характеристика на акт. и реакт. мощност', image: substation, url: '/power-angle' },
    { id: 2, discipline: 'УЕЕС', name: 'Устойчивост по роторен ъгъл при малки смущения', image: rotor, url: '/rotor-angle' }];
const ECHECP = [
    { id: 1, discipline: 'ЕЧЕЦП', name: 'Електромагнитна сила и напрежение на огъване на правоъгълни шини', image: '', url: '/em-force' }
];

export default function Home() {
    return (
        <StyledEngineProvider injectFirst>
            <Container maxWidth={'lg'} className={styles['container']}>
                <Grid container columnSpacing={4} rowSpacing={4} className={styles['wrapper']}>
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Typography variant="h2" className={styles['discipline-title']}>Изберете задача...</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Typography variant="h4" className={styles['discipline-title']}>Електрически мрежи и системи</Typography>
                    </Grid>
                    {EMS && EMS.map(task => {
                        return (
                            <Grid item xs={12} md={6} lg={4} sm={12} key={task.id} className={`${styles['item']} ${styles['card-container']}`}>
                                <Link to={task.url} className={styles['card-link']}>
                                    <Paper elevation={12} className={styles['card-wrapper']}>
                                        <img src={task.image} className={styles['card-image']} alt=""></img>
                                        <span>Дисциплина: {task.discipline}</span>
                                        <div className={styles['card-name']}>{task.name}</div>
                                    </Paper>
                                </Link>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Typography variant="h4" className={styles['discipline-title']}>Устойчивост на електроенергийните системи</Typography>
                    </Grid>
                    {UEES && UEES.map(task => {
                        return (
                            <Grid item xs={12} md={6} lg={4} sm={12} key={task.id} className={`${styles['item']} ${styles['card-container']}`}>
                                <Link to={task.url} className={styles['card-link']}>
                                    <Paper elevation={12} className={styles['card-wrapper']}>
                                        <img src={task.image} className={styles['card-image']} alt=""></img>
                                        <span>Дисциплина: {task.discipline}</span>
                                        <div className={styles['card-name']}>{task.name}</div>
                                    </Paper>
                                </Link>
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Typography variant="h4" className={styles['discipline-title']}>Електрическа част на електрически централи и подстанции</Typography>
                    </Grid>
                    {ECHECP && ECHECP.map(task => {
                        return (
                            <Grid item xs={12} md={6} lg={4} sm={12} key={task.id} className={`${styles['item']} ${styles['card-container']}`}>
                                <Link to={task.url} className={styles['card-link']}>
                                    <Paper elevation={12} className={styles['card-wrapper']}>
                                        <img src={task.image} className={styles['card-image']} alt=""></img>
                                        <span>Дисциплина: {task.discipline}</span>
                                        <div className={styles['card-name']}>{task.name}</div>
                                    </Paper>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </StyledEngineProvider >
    );
};