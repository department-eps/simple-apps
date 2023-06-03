import { TextField, Grid, Container, Tooltip, Typography, Box, InputAdornment, StyledEngineProvider } from "@mui/material";
import styles from "./PowerAngleInputs.module.css"
import Plot from "../Plot/PowerAnglePlot";
import { useForm } from "../../../hooks/useForm";
import { InlineMath } from "react-katex";
export default function PowerAngle() {

    const { formValues, onChange } = useForm({
        Us: "1",
        Ur: "1",
        X: "1",
        R: "0",
    });

    return (
        <StyledEngineProvider injectFirst>
            <Container className={styles['container']}>
                <Grid
                    container
                    spacing={2}
                    className={styles['wrapper']}
                >
                    <Grid item xs={12} sm={8} md={6} lg={2}>
                        <Box className={styles['item']}>
                            <TextField
                                className={styles['input-field']}
                                variant="standard"
                                name="Us"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                    sx: { fontSize: '20px' }
                                }}
                                label={<span style={{ fontSize: '20px' }}><InlineMath math={'U_s'}></InlineMath></span>}
                                value={formValues.Us}
                                onChange={onChange}
                                type="text"
                                autoComplete="off"
                                sx={{ "&.MuiFormLabel-root": { "&.MuiInputLabel-root": { color: 'red' } } }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={2}>
                        <Box className={styles['item']}>
                            <Tooltip arrow title={<Typography variant="subtitle2">This is Ur. Write tooltip here</Typography>}>
                                <TextField
                                    className={styles['input-field']}
                                    variant="standard"
                                    name="Ur"
                                    label={<span><InlineMath math={'U_r'}></InlineMath></span>}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                    }}
                                    value={formValues.Ur}
                                    onChange={onChange}
                                    type="text"
                                    autoComplete='off'
                                />
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={2}>
                        <Box className={styles['item']}>
                            <Tooltip arrow title={<Typography variant="subtitle2">This is X. Write tooltip here</Typography>}>
                                <TextField
                                    className={styles['input-field']}
                                    variant="standard"
                                    name="X"
                                    label={<span><InlineMath math={'X'}></InlineMath></span>}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                    }}
                                    value={formValues.X}
                                    onChange={onChange}
                                    type="text"
                                    autoComplete='off'
                                />
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={2}>
                        <Box className={styles['item']}>
                            <Tooltip arrow title={<Typography variant="subtitle2">This is R. Write tooltip here</Typography>}>
                                <TextField
                                    className={styles['input-field']}
                                    variant="standard"
                                    name="R"
                                    label={<span><InlineMath math={'R'}></InlineMath></span>}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                    }}
                                    value={formValues.R}
                                    onChange={onChange}
                                    type="text"
                                    autoComplete='off'
                                />
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8} md={8} className={styles['item']}>
                        <Box className={styles['plot']}>
                            <Plot values={formValues} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledEngineProvider>
    );
};