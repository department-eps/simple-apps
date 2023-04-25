import { TextField, Grid, Typography, Tooltip, Container, Box } from "@mui/material";
import Plot from "../Plot/RotorAnglePlot";
import { useForm } from "../../../hooks/useForm";

export default function RotorAngle() {
    const {formValues, onChange} = useForm({
        Ra: "0.004",
        Xd: "0.3",
        U1: "1",
        P1: "0.5",
        H: "3.5",
        U2: "1",
        thetaU2: "0"
    });

    return (
        <Container sx={{ backgroundColor: 'white', paddingTop: '80px' }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: "center", alignItems: "center" }}
            >
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">Generator:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                    <Box sx={{ textAlign: "center" }}>
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the Ra field</Typography>}>
                            <TextField
                                name="Ra"
                                label="Ra [pu]"
                                value={formValues.Ra}
                                onChange={onChange}
                                margin="normal"
                                type="number"
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2} >
                    <Box sx={{ textAlign: "center" }}>
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the Xd field</Typography>}>
                            <TextField
                                name="Xd"
                                label="Xd [pu]"
                                value={formValues.Xd}
                                onChange={onChange}
                                margin="normal"
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                    <Box sx={{ textAlign: "center" }}>
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the U1 field</Typography>}>
                            <TextField
                                name="U1"
                                label="U1 [pu]"
                                value={formValues.U1}
                                onChange={onChange}
                                margin="normal"
                                type="number"
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                    <Box sx={{ textAlign: "center" }}>
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the P1 field</Typography>}>
                            <TextField
                                name="P1"
                                label="P1 [pu]"
                                value={formValues.P1}
                                onChange={onChange}
                                margin="normal"
                                type="number"
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                    <Box sx={{ textAlign: "center" }}>
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the H field</Typography>}>
                            <TextField
                                name="H"
                                label="H [MW-s/MVA]"
                                value={formValues.H}
                                onChange={onChange}
                                margin="normal"
                                type="number"
                            />
                        </Tooltip>
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">System:</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3} sx={{ textAlign: 'center' }}>
                    <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the U2 field</Typography>}>
                        <TextField
                            name="U2"
                            label="U2 [pu]"
                            value={formValues.U2}
                            onChange={onChange}
                            margin="normal"
                            type="number"
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} sx={{ textAlign: 'center' }}>
                    <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the θ field</Typography>}>
                        <TextField
                            name="thetaU2"
                            label="θ [deg]"
                            value={formValues.thetaU2}
                            onChange={onChange}
                            margin="normal"
                            type="number"
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} lg={8} md={8} sx={{ textAlign: "center" }}>
                    <Box sx={{ height: "650px" }}>
                        <Plot values={formValues}></Plot>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};