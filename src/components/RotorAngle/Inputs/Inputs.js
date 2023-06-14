import React, { useEffect } from "react";
import { TextField, Grid, Typography, Tooltip, Box, InputAdornment, Slider } from "@mui/material";
import { InlineMath } from "react-katex";
import { useForm } from "../../../hooks/useForm";
import { calculateRotorAngle } from "../calculate/calculate";
import styles from "./Inputs.module.css";

const initialValues = {
    R: 0.05,
    X: 0.5,
    Ra: 0.004,
    Xd: 0.3,
    U1: 1,
    P1: 0.6,
    numberOfModes: 1,
    H: 3.5,
    U2: 1,
    thetaU2: 0,
    origin: 'RotorAngle'
};

const mode = ['A', 'B', 'C', 'D', 'E'];

export default function Inputs({ setResult, setDataTable }) {
    const { formValues, onChange } = useForm(initialValues);

    useEffect(() => {
        const scatterDataPlus = [];
        const scatterDataMinus = [];
        const tempDataTable = [];

        let current = formValues.P1;
        let counter = 0;

        for (let i = 1; i <= formValues.numberOfModes; i++) {
            const [root, Ks, Kd, ksi, P1, delta0, f] = calculateRotorAngle({ formValues }, current);
            const data = root;

            scatterDataPlus.push({
                x: data.root1.re,
                y: data.root1.im,
                name: mode[counter]
            });

            scatterDataMinus.push({
                x: data.root2.re,
                y: data.root2.im,
                name: mode[counter]
            });

            tempDataTable.push({
                mode: mode[counter],
                Ks,
                Kd,
                ksi,
                roots: root,
                P1,
                delta0,
                f
            });

            current -= formValues.P1 / formValues.numberOfModes;
            counter++;
        };

        setResult({ scatterDataPlus, scatterDataMinus });
        setDataTable(tempDataTable);
    }, [formValues, setResult, setDataTable]);

    const renderTextField = (name, label, math, endAdornment) => (
        <Tooltip arrow title={<Typography variant="subtitle2">{`This is the ${label} field`}</Typography>}>
            <TextField
                className={styles["input-field"]}
                variant="standard"
                name={name}
                label={<span style={{ fontSize: "20px" }}><InlineMath math={math} /></span>}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
                }}
                value={formValues[name]}
                onChange={onChange}
                autoComplete="off"
            />
        </Tooltip>
    );

    const textFields = [
        { name: 'R', label: "R", math: "R", endAdornment: "pu" },
        { name: 'X', label: "X", math: "X", endAdornment: "pu" },
        { name: "Ra", label: "Ra", math: "R_a", endAdornment: "pu" },
        { name: "Xd", label: "Xd", math: "X^\\prime_d", endAdornment: "pu" },
        { name: "U1", label: "U1", math: "U_1", endAdornment: "pu" },
        { name: "P1", label: "P1", math: "P_1", endAdornment: "pu" },
        { name: "H", label: "H", math: "H", endAdornment: 'MW.s/MVA' },
        { name: "U2", label: "U2", math: "U_2", endAdornment: "pu" },
        { name: "thetaU2", label: "θ", math: "\\theta", endAdornment: "deg" }
    ];

    return (
        <>
            {textFields.slice(0, 2).map((field, index) => (
                <Grid key={index} item xs={12} sm={4} md={3} lg={2} className={styles.item}>
                    <Box>{renderTextField(field.name, field.label, field.math, field.endAdornment)}</Box>
                </Grid>
            ))}
            <Grid item xs={12} className={styles.item}>
                <Typography variant="h5">Генератор:</Typography>
            </Grid>
            {textFields.slice(2, 7).map((field, index) => (
                <Grid key={index} item xs={12} sm={4} md={3} lg={2} className={styles.item}>
                    <Box>{renderTextField(field.name, field.label, field.math, field.endAdornment)}</Box>
                </Grid>
            ))}
            <Grid item xs={12} className={styles.item}>
                <Typography variant="h5">Система:</Typography>
            </Grid>
            {textFields.slice(7).map((field, index) => (
                <Grid key={index} item xs={12} sm={12} md={6} lg={2} className={styles.item}>
                    {renderTextField(field.name, field.label, field.math, field.endAdornment)}
                </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" alignItems="center">
                <Box sx={{ textAlign: 'center', width: '150px' }}>
                    <span id="slider-label" style={{ textAlign: 'center' }}>Брой точки</span>
                    <Slider
                        className={styles['slider']}
                        min={1}
                        max={5}
                        valueLabelDisplay="on"
                        step={1}
                        name="numberOfModes"
                        value={formValues.numberOfModes}
                        onChange={onChange}
                        aria-labelledby="slider-label"
                    />
                </Box>
            </Grid>
        </>
    );
};