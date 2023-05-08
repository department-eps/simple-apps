import { Slider, Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { S1options, U1options, cosphioptions } from "../../../utils/constants";
import { useForm } from "../../../hooks/useForm";
import calculateTransformerLosses from "../calculate/calculate";

export default function Sliders({ value, setLosses, setBaseDot, hasRun, setHasRun }) {

    const { formValues, onChange } = useForm({
        U1: Number(20),
        S1: Number(1000),
        cosphi: Number(1)
    });

    useEffect(() => {
        let data = [];
        setBaseDot(formValues[value])

        if (value === "all") {
            setLosses(calculateTransformerLosses(formValues.U1, formValues.S1, formValues.cosphi))
        };

        if (value === "U1" && !hasRun) {
            debugger;
            for (let i = 18; i < 22; i += 0.04) {
                const calculatedLosses = calculateTransformerLosses(i, formValues.S1, formValues.cosphi)
                data.push({
                    x: Number(i.toFixed(2)),
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };

        if (value === "S1" && !hasRun) {
            for (let i = 10; i <= 1000; i += 10) {
                debugger;
                const calculatedLosses = calculateTransformerLosses(formValues.U1, i, formValues.cosphi)
                data.push({
                    x: Number(i.toFixed(2)),
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };

        if (value === "cosphi" && !hasRun) {
            for (let i = 0.01; i <= 1; i += 0.01) {
                const calculatedLosses = calculateTransformerLosses(formValues.U1, formValues.S1, i)
                data.push({
                    x: Number(i.toFixed(2)),
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };

        if(data.length < 1) {
            return;
        };
        setLosses(data)
        setHasRun(true)
    }, [formValues, value]);

    return (
        <Box>
            <Typography variant='h5'>U1 [kV]</Typography>
            <Box>
                <Slider
                    name="U1"
                    value={formValues.U1}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={18}
                    max={22}
                    marks={U1options}
                    step={0.04}
                    disabled={value === 'U1' || value === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box>
                <Typography variant='h5'>S1 [kVA]</Typography>
                <Slider
                    name="S1"
                    value={formValues.S1}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={0}
                    max={1000}
                    marks={S1options}
                    step={10}
                    disabled={value === 'S1' || value === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box>
                <Typography variant='h5'>cosφ [ind]</Typography>
                <Slider
                    name="cosphi"
                    value={formValues.cosphi}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={0}
                    max={1}
                    marks={cosphioptions}
                    step={0.01}
                    disabled={value === 'cosphi' || value === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
        </Box>
    );
};