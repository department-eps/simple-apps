import { TextField, Grid, Typography, Tooltip, Container, Box, InputAdornment } from "@mui/material";
import styles from "./RotorAngleInputs.module.css"
import Plot from "../Plot/RotorAnglePlot";
import { useForm } from "../../../hooks/useForm";

export default function RotorAngle() {
    const { formValues, onChange } = useForm({
        Ra: "0.004",
        Xd: "0.3",
        U1: "1",
        P1start: "0.6",
        step: "0.1",
        P1end: "0.2",
        H: "3.5",
        U2: "1",
        thetaU2: "0"
    });

    return (
        <Container maxWidth={'md'} className={styles['container']}>
            <Grid
                container
                spacing={2}
                className={styles['wrapper']}
            >
                <Grid item xs={12} className={styles['item']}>
                    <Typography variant="h5">Generator:</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the Ra field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="Ra"
                                label={<span className={styles['input-label']}>R<small>a</small></span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                                }}
                                value={formValues.Ra}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the Xd field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="Xd"
                                label={<span className={styles['input-label']}>X<small>d</small></span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                                }}
                                value={formValues.Xd}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the U1 field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="U1"
                                label={<span className={styles['input-label']}>U<small>1</small></span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                                }}
                                value={formValues.U1}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the P1 field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="P1start"
                                label={<span className={styles['input-label']}>P<small>1s</small></span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                                }}
                                value={formValues.P1start}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the P1 field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name='step'
                                label={<span className={styles['input-label']}>step</span>}
                                value={formValues.step}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the P1 field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="P1end"
                                label={<span className={styles['input-label']}>P<small>1e</small></span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                                }}
                                value={formValues.P1end}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is the H field</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="H"
                                label={<span className={styles['input-label']}>H</span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"><Typography variant="body2">MW-s/MVA</Typography></InputAdornment>,
                                }}
                                value={formValues.H}
                                onChange={onChange}
                                type="text"
                                autoComplete='off'
                            />
                        </Tooltip>
                    </Box>
                </Grid>

                <Grid item xs={12} className={styles['item']}>
                    <Typography variant="h5">System:</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3} className={styles['item']}>
                    <Tooltip arrow title={<Typography variant="subtitle2">This is the U2 field</Typography>}>
                        <TextField
                            className={styles['input-field']}
                            name="U2"
                            label={<span className={styles['input-label']}>U<small>2</small></span>}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">pu</InputAdornment>,
                            }}
                            value={formValues.U2}
                            onChange={onChange}
                            type="text"
                            autoComplete='off'
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} className={styles['item']}>
                    <Tooltip arrow title={<Typography variant="subtitle2">This is the θ field</Typography>}>
                        <TextField
                            className={styles['input-field']}
                            name="thetaU2"
                            label={<span className={styles['input-label']}>θ</span>}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">deg</InputAdornment>,
                            }}
                            value={formValues.thetaU2}
                            onChange={onChange}
                            type="text"
                            autoComplete='off'
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={12} lg={9} md={9} className={styles['item']}>
                    <Box sx={{paddingTop: '10px'}}>
                        <Typography variant="h5">Eigenvalues</Typography>
                        <Plot values={formValues}></Plot>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};