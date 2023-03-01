import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import Plot from "./Plot";
import { Box } from "@mui/system";

export default function Inputs() {
  const [values, setValues] = useState({
    Us: "1",
    Ur: "1",
    X: "1",
    R: "1",
  });

  const [plotData] = useState(null);

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
          <Box sx={{ display: "flex", gap: "16px" }}>
            <TextField
              name="Us"
              label="Us"
              value={values.Us}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="Ur"
              label="Ur"
              value={values.Ur}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="X"
              label="X"
              value={values.X}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="R"
              label="R"
              value={values.R}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
          <Plot {...plotData} values={values} />
        </Box>
      </Grid>
    </Grid>
  );
}