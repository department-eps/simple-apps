import { Box, Container, Typography, Grid, TextField, Tooltip } from '@mui/material'
import { ReactComponent as KirchhoffScheme } from './KirchhoffScheme.svg'
import { useForm } from '../../hooks/useForm';

export default function Kirchhoff() {
    const { formValues, onChange } = useForm({
        B1: "5",
        B2: "5",
        B3: "5",
    });

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
                        <foreignObject x="470" y="47" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <Typography>10 kW</Typography>
                            </div>
                        </foreignObject>
                        <foreignObject x="250" y="47" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <Typography>10 kW</Typography>
                            </div>
                        </foreignObject>
                        <foreignObject x="677" y="47" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <Typography>10 kW</Typography>
                            </div>
                        </foreignObject>
                        <foreignObject x="371" y="230" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <Tooltip arrow title={<Typography variant="subtitle2">Товар B1 в kW</Typography>}>
                                    <input
                                        style={{ width: '30px' }}
                                        name='B1'
                                        value={formValues.B1}
                                        onChange={onChange}
                                    ></input>
                                </Tooltip>
                            </div>
                        </foreignObject>
                        <foreignObject x="577" y="230" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <input
                                    style={{ width: '30px' }}
                                    name='B1'
                                    value={formValues.B2}
                                    onChange={onChange}
                                ></input>
                            </div>
                        </foreignObject>
                        <foreignObject x="782" y="230" width="50px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <input
                                    style={{ width: '30px' }}
                                    name='B1'
                                    value={formValues.B3}
                                    onChange={onChange}>
                                </input>
                            </div>
                        </foreignObject>
                    </svg>
                </Grid>
            </Grid>
        </Container >
    );
};