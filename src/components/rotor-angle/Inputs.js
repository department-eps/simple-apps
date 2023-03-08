import React, { useState } from "react";
import { TextField, Grid, Typography, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import Plot from "./PlotRotorAngle";

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
        <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
        >
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <Typography variant="h5">Generator:</Typography>
                    <Box sx={{ display: "flex", gap: "16px" }}>
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
                        <Tooltip arrow title={<Typography sx={{ fontSize: 14 }}>This is the Xd field</Typography>}>
                            <TextField
                                name="Xd"
                                label="Xd [pu]"
                                value={values.Xd}
                                onChange={handleChange}
                                margin="normal"
                            />
                        </Tooltip>
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
                    <Typography variant="h5">System:</Typography>
                    <Box sx={{ display: "flex", gap: "16px" }}>
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
                    </Box>
                    <Box sx={{ height: "650px" }}>
                        <Plot values={values}></Plot>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}