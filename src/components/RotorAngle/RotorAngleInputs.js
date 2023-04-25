import React, { useState } from "react";
import { TextField, Grid, Typography, Tooltip, Container } from "@mui/material";
import { Box } from "@mui/system";
import Plot from "./Plot/RotorAnglePlot";

export default function RotorAngle() {
    const [values, setValues] = useState({
        Ra: "0.004",
        Xd: "0.3",
        U1: "1",
        P1: "0.5",
        H: "3.5",
        U2: "1",
        thetaU2: "0"
    });

    //const [plotData] = useState(null);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

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
                                value={values.Ra}
                                onChange={handleChange}
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
                                value={values.Xd}
                                onChange={handleChange}
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
                                value={values.U1}
                                onChange={handleChange}
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
                                value={values.P1}
                                onChange={handleChange}
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
                                value={values.H}
                                onChange={handleChange}
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
                            value={values.U2}
                            onChange={handleChange}
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
                            value={values.thetaU2}
                            onChange={handleChange}
                            margin="normal"
                            type="number"
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} lg={8} md={8} sx={{ textAlign: "center" }}>
                    <Box sx={{ height: "650px" }}>
                        <Plot values={values}></Plot>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};