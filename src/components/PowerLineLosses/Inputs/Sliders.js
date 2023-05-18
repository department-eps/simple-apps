import { Slider, Box, Typography } from "@mui/material"
import { useForm } from '../../../hooks/useForm'
import { useEffect, useContext, useState } from "react";
import calculatePowerLineLosses from "../calculate/calculate";
import { Lwoptions, Poptions, Qoptions } from "../../../utils/constants";
import { PowerLineLossesContext } from "../../../contexts/PowerLineLossesContext";
import { forLoopPowerLossesOptions } from "../../../utils/powerLineLossesUtil";
import styles from './Sliders.module.css'

export default function Sliders() {
    const { radioValue, setVoltageLosses, setCurrentVoltageLosses } = useContext(PowerLineLossesContext);
    const [previousRadioValue, setPreviousRadioValue] = useState('');

    const { formValues, onChange } = useForm({
        P: Number(0),
        Q: Number(0),
        Lw: Number(500)
    });

    useEffect(() => {
        const data = [];
        const { P, Q, Lw } = formValues;

        setCurrentVoltageLosses({ lineLosses: calculatePowerLineLosses(P, Q, Lw), x: formValues[radioValue] });

        if (radioValue === previousRadioValue) {
            return;
        };

        const { start, end, step } = forLoopPowerLossesOptions(radioValue);

        for (let i = start; i <= end; i += step) {
            let calculatedLosses;
            if (radioValue === 'P') {
                calculatedLosses = calculatePowerLineLosses(i, Q, Lw);
            } else if (radioValue === 'Q') {
                calculatedLosses = calculatePowerLineLosses(P, i, Lw);
            } else if (radioValue === 'Lw') {
                calculatedLosses = calculatePowerLineLosses(P, Q, i);
            }

            data.push({
                x: Number(i.toFixed(2)),
                y: calculatedLosses.deltaU
            });
        };
        setVoltageLosses(data);
        setPreviousRadioValue(radioValue);

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