import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@mui/material"
import { useState } from "react";

export default function RadioButtons() {
    const [value, setValue] = useState('all');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <FormControl>
            <FormLabel>Влияние на:</FormLabel>
            <RadioGroup
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="all" control={<Radio />} label="всички" />
                <FormControlLabel value="U1" control={<Radio />} label="Захр.напр. U1" />
                <FormControlLabel value="S1" control={<Radio />} label="Пълна мощ. S1" />
                <FormControlLabel value="cosphi" control={<Radio />} label="фактор на мощ." />
            </RadioGroup>
        </FormControl>
    );
};