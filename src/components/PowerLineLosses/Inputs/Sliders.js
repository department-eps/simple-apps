import { Slider, Box, Typography } from "@mui/material"
import { useForm } from '../../../hooks/useForm'
import { useEffect } from "react";
import calculatePowerLineLosses from "../calculate/calculate";
import styles from './Sliders.module.css'
import { Lwoptions, Poptions, Qoptions } from "../../../utils/constants";

export default function Sliders({ radioValue, setVoltageLosses, setCurrentVoltageLosses }) {

    const { formValues, onChange } = useForm({
        P: Number(0),
        Q: Number(0),
        Lw: Number(500)
    });

    useEffect(() => {
        const data = [];
        if (radioValue === 'P') {
            for (let i = -100; i <= 100; i += 2) {
                const calculatedLosses = calculatePowerLineLosses(i, formValues.Q, formValues.Lw)
                data.push(
                    {
                        x: Number(i.toFixed(2)),
                        y: calculatedLosses.deltaU
                    },
                );
            };
        } else if (radioValue === 'Q') {
            for (let i = -100; i <= 100; i += 2) {
                const calculatedLosses = calculatePowerLineLosses(formValues.P, i, formValues.Lw)
                data.push(
                    {
                        x: Number(i.toFixed(2)),
                        y: calculatedLosses.deltaU
                    },
                );
            };
        } else if (radioValue === 'Lw') {
            for (let i = 10; i <= 1000; i += 10) {
                const calculatedLosses = calculatePowerLineLosses(formValues.P, formValues.Q, i)
                data.push(
                    {
                        x: Number(i.toFixed(2)),
                        y: calculatedLosses.deltaU
                    },
                );
            };
        };
        setCurrentVoltageLosses(calculatePowerLineLosses(formValues.P, formValues.Q, formValues.Lw));
        setVoltageLosses(data);
    }, [formValues, radioValue]);

    return (
        <Box>
            <div className={styles['slider-label']}>
                <span className={styles['slider-label-katex']}>P </span>
                <span>[kW]</span>
            </div>
            <Box>
                <Slider
                    name="P"
                    value={formValues?.P}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={-100}
                    max={100}
                    marks={Poptions}
                    step={2}
                    disabled={radioValue === 'P' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
            <Box sx={{ paddingTop: '10px' }}>
                <div className={styles['slider-label']}>
                    <span className={styles['slider-label-katex']}>Q </span>
                    <span>[kVAr]</span>
                </div>
                <Slider
                    name="Q"
                    value={formValues?.Q}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={-100}
                    max={100}
                    marks={Qoptions}
                    step={2}
                    disabled={radioValue === 'Q' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
            <Box sx={{ paddingTop: '10px' }}>
                <Typography sx={{ fontSize: '20px' }}>Дължина [m]</Typography>
                <Slider
                    name="Lw"
                    value={formValues?.Lw}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={10}
                    max={1000}
                    marks={Lwoptions}
                    step={10}
                    disabled={radioValue === 'Lw' || radioValue === 'all' ? false : true}
                    className={styles['slider']}
                />
            </Box>
        </Box>
    );
};