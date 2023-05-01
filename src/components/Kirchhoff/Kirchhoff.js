import {  Container, Typography, Grid } from '@mui/material'
import { useEffect, useState } from 'react';
import { ReactComponent as KirchhoffScheme } from './KirchhoffScheme.svg'
import { useForm } from '../../hooks/useForm';

export default function Kirchhoff() {
    const [nodes, setNodes] = useState({});
    const { formValues, onChange } = useForm({
        B1: "5",
        B2: "5",
        B3: "5",
    });

    useEffect(() => {
        const { B1, B2, B3 } = formValues;
        if (!B1 || !B2 || !B3) {
            return setNodes({})
        };
        setNodes({
            node1: Number(B1) + Number(B2) + Number(B3),
            node2: Number(B2) + Number(B3),
            node3: Number(B3)
        });
    }, [formValues])

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
                    <svg width="450" height="255" style={{ width: "100%", height: "auto", maxWidth: "100%" }} viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
                        <KirchhoffScheme />
                        {nodes.node1 && nodes.node2 && nodes.node3 &&
                            <>
                                <foreignObject x="242" y="40" width="70px" height="40">
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <Typography variant='h5'>{nodes.node1} kW</Typography>
                                    </div>
                                </foreignObject>
                                <foreignObject x="462" y="40" width="70px" height="40">
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <Typography variant='h5'>{nodes.node2} kW</Typography>
                                    </div>
                                </foreignObject>
                                <foreignObject x="667" y="40" width="70px" height="40">
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <Typography variant='h5'>{nodes.node3} kW</Typography>
                                    </div>
                                </foreignObject>
                            </>
                        }
                        <foreignObject x="377" y="230" width="80px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{display: 'flex'}}>
                                    <input
                                        style={{ width: '30px', fontSize: '23px', textAlign: 'center' }}
                                        name='B1'
                                        value={formValues.B1}
                                        onChange={onChange}
                                    ></input>
                                    <Typography sx={{fontSize: '23px', paddingLeft: '5px'}}>kW</Typography>
                            </div>
                        </foreignObject>
                        <foreignObject x="583" y="230" width="80px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{display: 'flex'}}>
                                <input
                                    style={{ width: '30px', fontSize: '23px', textAlign: 'center' }}
                                    name='B2'
                                    value={formValues.B2}
                                    onChange={onChange}
                                ></input>
                                <Typography sx={{fontSize: '23px', paddingLeft: '5px'}}>kW</Typography>
                            </div>
                        </foreignObject>
                        <foreignObject x="789" y="230" width="90px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{display: 'flex'}}>
                                <input
                                    style={{ width: '30px', fontSize: '23px', textAlign: 'center' }}
                                    name='B3'
                                    value={formValues.B3}
                                    onChange={onChange}>
                                </input>
                                <Typography sx={{fontSize: '23px', paddingLeft: '5px'}}>kW</Typography>
                            </div>
                        </foreignObject>
                    </svg>
                </Grid>
            </Grid>
        </Container >
    );
};