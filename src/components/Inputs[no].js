import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function Inputs() {
    const [values, setValues] = useState({
        Us: "",
        Ur: "",
        X: "",
        R: "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        console.log(values);
    };

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
    };

    const inputStyles = {
        marginRight: "1rem",
        marginTop: "6rem",
        marginBot: "6rem",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "black",
        flex: "1",
        fontWeight: "bold",
    };

    const buttonStyles = {
        backgroundColor: "blue",
        color: "black",
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        marginTop: "1rem",
    };
    const labelStyles = {
        fontSize: "1.5rem", // customize the font size of the label
        fontWeight: "bold",
        color: "black",
        // transform: "translate(2px, -4px) scale(0.8)"
    }

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <div style={{ display: "flex", width: "100%" }}>
                <TextField
                    name="Us"
                    label={
                        <Typography style={labelStyles}>Us</Typography>
                    }
                    value={values.Us}
                    onChange={handleChange}
                    margin="normal"
                    style={inputStyles}
                    
                />
                <TextField
                    name="Ur"
                    label="Ur"
                    value={values.Ur}
                    onChange={handleChange}
                    margin="normal"
                    style={inputStyles}
                />
                <TextField
                    name="X"
                    label="X"
                    value={values.X}
                    onChange={handleChange}
                    margin="normal"
                    style={inputStyles}
                />
                <TextField
                    name="R"
                    label="R"
                    value={values.R}
                    onChange={handleChange}
                    margin="normal"
                    style={inputStyles}
                />
            </div>
            <Button type="submit" variant="contained" style={buttonStyles}>
                Plot
            </Button>
        </form>
    );
}