import { TextField, Grid, Container, Tooltip, Typography, Box, InputAdornment } from "@mui/material";
import styles from "./PowerAngleInputs.module.css"
import Plot from "../Plot/PowerAnglePlot";
import { useForm } from "../../../hooks/useForm";

export default function PowerAngle() {

    const { formValues, onChange } = useForm({
        Us: "1",
        Ur: "1",
        X: "1",
        R: "0",
    });

    return (
        <Container className={styles['container']}>
            <Grid
                container
                spacing={2}
                className={styles['wrapper']}
            >
                <Grid item xs={12} sm={8} md={6} lg={2}>
                    <Tooltip arrow title={<Typography variant="subtitle2">This is Us. Write tooltip here</Typography>}>
                        <Box className={styles['item']}>
                            <TextField
                                className={styles['input-field']}
                                name="Us"
                                label={<span className={styles['input-label']}>Us</span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                }}
                                value={formValues.Us}
                                onChange={onChange}
                                autoComplete='off'
                            />
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={2}>
                    <Box className={styles['item']}>
                        <Tooltip arrow title={<Typography variant="subtitle2">This is Ur. Write tooltip here</Typography>}>
                            <TextField
                                className={styles['input-field']}
                                name="Ur"
                                label={<span className={styles['input-label']}>Ur</span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                }}
                                value={formValues.Ur}
                                onChange={onChange}
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
                                name="X"
                                label={<span className={styles['input-label']}>X</span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">p.u</InputAdornment>,
                                }}
                                value={formValues.X}
                                onChange={onChange}
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
                                name="R"
                                label={<span className={styles['input-label']}>R</span>}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end"><span>p.u</span></InputAdornment>,
                                }}
                                value={formValues.R}
                                onChange={onChange}
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
    );
};