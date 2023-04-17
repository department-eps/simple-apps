import React, { useState } from "react";
import { TextField, Grid, Container } from "@mui/material";
import Plot from "./Plot/PowerAnglePlot";
import { Box } from "@mui/system";

export default function Inputs() {
  const [values, setValues] = useState({
    Us: "1",
    Ur: "1",
    X: "1",
    R: "0",
  });

  const [plotData] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box sx={{textAlign: "center"}}>
            <TextField
              name="Us"
              label="Us"
              value={values.Us}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box sx={{textAlign: "center"}}>
            <TextField
              name="Ur"
              label="Ur"
              value={values.Ur}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box sx={{textAlign: "center"}}>
            <TextField
              name="X"
              label="X"
              value={values.X}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box sx={{textAlign: "center"}}>
            <TextField
              name="R"
              label="R"
              value={values.R}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={8} md={8} sx={{textAlign: "center"}}>
          <Box>
            <Plot {...plotData} values={values} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}