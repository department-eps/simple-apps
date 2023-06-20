import { TextField, Slider, Grid, Box, Typography, StyledEngineProvider } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { ReactComponent as DiagramBusbars } from './diagrams/busbars.svg'
import { XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer, Label } from 'recharts';
import { ElectromagneticForceOptions } from '../../utils/constants';
import { InlineMath } from 'react-katex';
import styles from './ElectromagneticForce.module.css'

export default function ElectromagneticForce() {

    // useState is used to maintain the values of the variable and initialize them
    // in the begging. The syntax is the folowing:
    // const [varname, setterFunction] = useState(initialValue)

    const [data, setData] = useState([])
    const [Isec, setIsec] = useState(10)
    const [Ta, setTa] = useState(0.05)
    const [busWidth, setBusWidth] = useState(5)
    const [busHeight, setBusHeight] = useState(100)
    const [busDistance, setBusDistance] = useState(250)
    const [busLength, setBusLength] = useState(1000)
    const [tension, setTension] = useState(0)

    // useEffect executes statements upon changing a list of variables
    // The syntax is the following:
    //
    // useEffect(() => {
    //    statements;
    // },[list of variables that will trigger the function call])
    //
    // !!! WARNING !!! If a list of variables is not defined, the app enters an infinite loop

    useEffect(() => {
        let iy = (1 + Math.exp(0.01 / Ta)) * Math.sqrt(2) * Isec;
        let datatemp = [];
        let t = 0.0;
        while (t < 5 * Ta) {
            datatemp.push({ 'time': t, 'ik': Math.sqrt(2) * Isec * (Math.exp(-t / Ta) + Math.cos(2 * Math.PI * 50 * t)) });
            t += 0.002;
        }
        setData(datatemp);

        let sigma = 0.1038 * 1e-6 * (busLength / 1000) ** 2 * iy ** 2 / (busDistance / 1000 * (busWidth / 1000) ** 2 * busHeight / 1000);
        setTension(sigma);

    }, [Isec, Ta, busWidth, busHeight, busDistance, busLength,])

    return (
        <StyledEngineProvider injectFirst>
            <Container maxWidth={'lg'} className={styles['container']}>
                <Grid container className={styles['wrapper']} spacing={3}>
                <Grid item xs={12} sm={12} lg={12} md={12} className={styles['item']}>
                    <Typography variant="h3">Електромагнитна сила и напрежение на огъване на правоъгълни шини</Typography>
                </Grid>
                    <Grid item xs={12} md={4} lg={2} className={styles['item']}>
                        <Box>
                            <TextField
                                variant="standard"
                                name='Isec'
                                label={<span><InlineMath math={`I"`}></InlineMath> [kA]</span>}
                                autoComplete="off"
                                onChange={(e) => setIsec(e.target.value)}
                                value={Isec}
                                className={styles['input-field']}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2} className={styles['item']}>
                        <Box>
                            <TextField
                                variant="standard"
                                name='Ta'
                                label={<span><InlineMath math={`T_a`}></InlineMath> [s]</span>}
                                autoComplete="off"
                                onChange={(e) => setTa(e.target.value)}
                                value={Ta}
                                className={styles['input-field']}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                        <ResponsiveContainer width={"100%"} height={400}>
                            <LineChart data={data}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis name='time' dataKey='time' type='number' height={55} fill='black'>
                                    <Label position='insideBottom' fill="black" value={'Време [s]'} style={{fill: 'black', fontSize: '20px' }}>
                                    </Label>
                                </XAxis>
                                <YAxis width={55}>
                                <Label position={'insideLeft'} angle={-90} fill="black" value={'Ik [kA]'} style={{ textAnchor: 'middle', fill: 'black', fontSize: '20px' }}>
                                </Label>
                                </YAxis>
                                <Line type="monotonic" dataKey='ik' name='ik' stroke="#8884d8" dot={false}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Grid>

                    <Grid item xs={12} md={4} lg={2} className={styles['item']}>
                        <Box>
                            <TextField
                                variant="standard"
                                name='busWidth'
                                label='b [mm]'
                                autoComplete="off"
                                onChange={(e) => setBusWidth(e.target.value)}
                                value={busWidth}
                                className={styles['input-field']}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2} className={styles['item']}>
                        <Box>
                            <TextField
                                variant="standard"
                                name='busHeight'
                                label='h [mm]'
                                autoComplete="off"
                                onChange={(e) => setBusHeight(e.target.value)}
                                value={busHeight}
                                className={styles['input-field']}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                        <div id="slider-busDist" style={{ textAlign: 'center' }}>Разстояние между шините [mm]</div>
                        <Slider
                            name='busDistance'
                            autoComplete="off"
                            onChange={(e) => setBusDistance(e.target.value)}
                            value={busDistance}
                            min={10}
                            max={2000}
                            marks={ElectromagneticForceOptions}
                            valueLabelDisplay="on"
                            step={1}
                            aria-labelledby="slider-busDist"
                            className={styles['slider']}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                        <div id="slider-busLength" style={{ textAlign: 'center' }}>Дължина на шините [mm]</div>
                        <Slider
                            name='busLength'
                            autoComplete="off"
                            onChange={(e) => setBusLength(e.target.value)}
                            value={busLength}
                            min={10}
                            max={2000}
                            marks={ElectromagneticForceOptions}
                            valueLabelDisplay="on"
                            step={1}
                            aria-labelledby="slider-busLength"
                            className={styles['slider']}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: 'red' }}>
                            <span><strong>Напрежение на огъване {tension.toFixed(1)} MPa</strong></span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={styles['item']}>
                        <svg style={{ fontFamily: 'Times New Roman' }} viewBox="-100 0 600 300">
                            <svg>
                                <DiagramBusbars />
                                <foreignObject x="-8" y="15" width="150px" height="40">
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <span>{busWidth} mm</span>
                                    </div>
                                </foreignObject>
                                <foreignObject x="-102" y="67" width="250px" height="200px">
                                    <div style={{ transform: 'rotate(-90deg)', textAlign: 'left', width: '100%' }} xmlns="http://www.w3.org/1999/xhtml">
                                        <span>{`${busHeight} mm`}</span>
                                    </div>
                                </foreignObject>

                                <foreignObject x="267" y="100" width="180px" height="120px">
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{ transform: 'rotate(-75deg)', textAlign: 'left', width: '100%' }}>
                                        <span>{busLength} mm</span>
                                    </div>
                                </foreignObject>

                                <foreignObject x="90" y="248" width="150px" height="40">
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <span>{busDistance} mm</span>
                                    </div>
                                </foreignObject>
                            </svg>
                        </svg>
                    </Grid>
                </Grid>
            </Container>
        </StyledEngineProvider>
    );
};