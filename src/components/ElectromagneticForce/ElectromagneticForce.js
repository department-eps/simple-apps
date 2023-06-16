import { TextField, Slider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { ReactComponent as DiagramBusbars } from './diagrams/busbars.svg'
import { XAxis, YAxis, CartesianGrid, LineChart, Tooltip, Legend, Line } from 'recharts';


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
        <Container sx={{ paddingTop: '50px' }} maxWidth={'lg'}>
            <Grid container sx={{ justifyContent: "center", alignItems: "center" }} spacing={3}>

                <Grid item xs={12} sx={{ textAlign: "center" }}>

                    <div>
                        <TextField
                            variant="standard"
                            name='Isec'
                            label='I" [kA]'
                            autoComplete="off"
                            onChange={(e) => setIsec(e.target.value)}
                            value={Isec}
                        />

                        <TextField
                            variant="standard"
                            name='Ta'
                            label='Ta [s]'
                            autoComplete="off"
                            onChange={(e) => setTa(e.target.value)}
                            value={Ta}
                            sx={{ paddingLeft: '20px' }}
                        />
                    </div>

                </Grid>

                <div style={{ paddingTop: '30px' }}>
                    <LineChart width={730} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis name='time' type='number' dataKey='time' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="number" dataKey='ik' name='ik' stroke="#8884d8" dot={false} />
                    </LineChart>
                </div>

                <Grid item xs={12} sx={{ textAlign: "center" }}>

                    <div>
                        <TextField
                            variant="standard"
                            name='busWidth'
                            label='b [mm]'
                            autoComplete="off"
                            onChange={(e) => setBusWidth(e.target.value)}
                            value={busWidth}
                        />

                        <TextField
                            variant="standard"
                            name='busHeight'
                            label='h [mm]'
                            autoComplete="off"
                            onChange={(e) => setBusHeight(e.target.value)}
                            value={busHeight}
                            sx={{ paddingLeft: '20px' }}
                        />
                    </div>

                </Grid>

                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <div id="slider-busDist" style={{ textAlign: 'center' }}>Разстояние между шините [mm]</div>
                    <Slider
                        name='busDistance'
                        autoComplete="off"
                        onChange={(e) => setBusDistance(e.target.value)}
                        value={busDistance}
                        min={10}
                        max={2000}
                        valueLabelDisplay="on"
                        step={1}
                        aria-labelledby="slider-busDist"
                        sx={{ width: '500px' }}
                    />

                    <div id="slider-busLength" style={{ textAlign: 'center' }}>Дължина на шините [mm]</div>
                    <Slider
                        name='busLength'
                        autoComplete="off"
                        onChange={(e) => setBusLength(e.target.value)}
                        value={busLength}
                        min={10}
                        max={2000}
                        valueLabelDisplay="on"
                        step={1}
                        aria-labelledby="slider-busLength"
                        sx={{ width: '500px' }}
                    />

                    <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: 'red' }}>
                        <span><strong>Напрежение на огъване {tension.toFixed(1)} MPa</strong></span>
                    </div>

                </Grid>
                    <div style={{paddingTop: '30px'}}>
                        <svg width="450" height="350" style={{ width: "100%", height: "auto", maxWidth: "100%", fontFamily: 'Times New Roman' }} preserveAspectRatio="xMidYMid meet">
                                <DiagramBusbars />

                            <foreignObject x="50" y="25" width="250px" height="40">
                                <div xmlns="http://www.w3.org/1999/xhtml">
                                    <span>{busWidth} mm</span>
                                </div>
                            </foreignObject>

                            <foreignObject x="-30" y="140" width="100" height="100">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ transform: 'rotate(-90deg)' }}>
                                    <span >{busHeight} mm</span>
                                </div>
                            </foreignObject>

                            <foreignObject x="300" y="140" width="100" height="100">
                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ transform: 'rotate(-76deg)' }}>
                                    <span >{busLength} mm</span>
                                </div>
                            </foreignObject>

                            <foreignObject x="140" y="255" width="250px" height="40">
                                <div xmlns="http://www.w3.org/1999/xhtml">
                                    <span>{busDistance} mm</span>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>

            </Grid>
        </Container>
    )


};