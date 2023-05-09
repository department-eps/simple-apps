import { Slider, Box, Typography } from "@mui/material"
import { useContext, useEffect } from "react";
import { S1options, U1options, cosphioptions } from "../../../utils/constants";
import { useForm } from "../../../hooks/useForm";
import calculateTransformerLosses from "../calculate/calculate";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";
import styles from "./Sliders.module.css"
export default function Sliders() {
    const { radioValue, handleSetLosses, setBaseDot, setHasRun, hasRun, setShowLosses } = useContext(TransformerLossesContext);

    const { formValues, onChange } = useForm({
        U1: Number(20),
        S1: Number(1000),
        cosphi: Number(1)
    });

    useEffect(() => {
        let data = [];
        setBaseDot(formValues[radioValue])

        if (radioValue === "U1" && !hasRun) {
            for (let i = 18; i <= 22; i += 0.04) {
                const calculatedLosses = calculateTransformerLosses(Number(i.toFixed(2)), formValues.S1, formValues.cosphi)
                data.push({
                    x: Number(i.toFixed(2)),
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };

        if (radioValue === "S1" && !hasRun) {
            for (let i = 0; i <= 1000; i += 10) {
                const calculatedLosses = calculateTransformerLosses(formValues.U1, Number(i.toFixed(2)), formValues.cosphi)
                data.push({
                    x: Number(i.toFixed(2)),
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };

        if (radioValue === "cosphi" && !hasRun) {
            for (let i = 0; i <= 100; i += 1) {
                //i/100 since the cosphi change from 0.01 to 1, however there is floating point arithmetic problem
                const calculatedLosses = calculateTransformerLosses(formValues.U1, formValues.S1, (i / 100))
                data.push({
                    x: i / 100,
                    Pidle: calculatedLosses.Pidle / 1000,
                    Psc: calculatedLosses.Psc / 1000,
                    Pall: (calculatedLosses.Psc + calculatedLosses.Pidle) / 1000
                });
            };
        };
        
        setShowLosses(calculateTransformerLosses(formValues.U1, formValues.S1, formValues.cosphi));

        if (data.length < 1) {
            return;
        };
        handleSetLosses(data);
        setHasRun(true);
    }, [formValues, radioValue]);

    return (
        <Box>
            <Typography sx={{ fontSize: '20px'}}>U1 [kV]</Typography>
            <Box>
                <Slider
                    name="U1"
                    value={formValues?.U1}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={18}
                    max={22}
                    marks={U1options}
                    step={0.04}
                    disabled={radioValue === 'U1' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
            <Box sx={{paddingTop: '10px'}}>
                <Typography sx={{ fontSize: '20px' }}>S1 [kVA]</Typography>
                <Slider
                    name="S1"
                    value={formValues?.S1}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={0}
                    max={1000}
                    marks={S1options}
                    step={10}
                    disabled={radioValue === 'S1' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
            <Box sx={{paddingTop: '10px'}}>
                <Typography sx={{ fontSize: '20px' }}>cosφ [ind]</Typography>
                <Slider
                    name="cosphi"
                    value={formValues?.cosphi}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    max={1}
                    marks={cosphioptions}
                    step={0.01}
                    disabled={radioValue === 'cosphi' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
        </Box>
    );
};