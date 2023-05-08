import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@mui/material"
import { useContext } from "react";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";

export default function RadioButtons() {
    const {handleRadioChange, radioValue} = useContext(TransformerLossesContext)

    return (
        <FormControl>
            <FormLabel>Влияние на:</FormLabel>
            <RadioGroup
                value={radioValue}
                onChange={handleRadioChange}
            >
                <FormControlLabel value="all" control={<Radio />} label="Всички" />
                <FormControlLabel value="U1" control={<Radio />} label="Захр.напр. U1" />
                <FormControlLabel value="S1" control={<Radio />} label="Пълна мощ. S1" />
                <FormControlLabel value="cosphi" control={<Radio />} label="Фактор на мощ." />
            </RadioGroup>
        </FormControl>
    );
};