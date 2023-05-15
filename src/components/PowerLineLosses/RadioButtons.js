import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@mui/material"
import { useState } from "react";

export default function RadioButtons({radioValue, setRadioValue}) {

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    };
    return (
        <FormControl>
            <FormLabel>Влияние на:</FormLabel>
            <RadioGroup
                value={radioValue}
                onChange={handleRadioChange}
            >
                <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="Всички" />
                <FormControlLabel
                    value="P"
                    control={<Radio />}
                    label={<span>Активна мощ. <span className="katex mathnormal" style={{ fontStyle: 'italic' }}>P</span></span>} />
                <FormControlLabel
                    value="Q"
                    control={<Radio />}
                    label={<span>Реакт. мощ. <span className="katex mathnormal" style={{ fontStyle: 'italic' }}>Q</span></span>} />
                <FormControlLabel
                    value="Lw"
                    control={<Radio />}
                    label={<span>Дължина</span>} />
            </RadioGroup>
        </FormControl>
    );
};