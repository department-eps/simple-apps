import React, { useState } from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function RotorAngle() {
    const [values, setValues] = useState({
        Ra: "0.004",
        Xd: "0.3",
        U1: "1",
        P1: "0.5",
        H: "35",
        U2: "1",
        titaU2: "0"
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
                        <TextField
                            name="Ra"
                            label="Ra"
                            value={values.Ra}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            name="Xd"
                            label="Xd"
                            value={values.Xd}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            name="U1"
                            label="U1"
                            value={values.U1}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            name="P1"
                            label="P1"
                            value={values.P1}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            name="H"
                            label="H"
                            value={values.H}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Box>
                    <Typography  variant="h5">System:</Typography>
                    <Box sx={{ display: "flex", gap: "16px" }}>
                        <TextField
                            name="U2"
                            label="U2"
                            value={values.Ra}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            name="titaU2"
                            label="θ"
                            value={values.Xd}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}