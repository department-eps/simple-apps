import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@mui/material"
import { useContext } from "react";
import { PowerLineLossesContext } from "../../../contexts/PowerLineLossesContext";
import styles from "./RadioButtons.module.css"

export default function RadioButtons() {
    const {handleRadioChange, radioValue} = useContext(PowerLineLossesContext);

    return (
        <FormControl>
            <FormLabel className={styles['radiobutton-label']}>Влияние на:</FormLabel>
            <RadioGroup
                value={radioValue}
                onChange={handleRadioChange}
            >
                <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Всички</span>} />
                <FormControlLabel
                    value="P"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Активна мощ. <span className={styles['radiobutton-label-katex']}>P</span></span>} />
                <FormControlLabel
                    value="Q"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Реакт. мощ. <span className={styles['radiobutton-label-katex']}>Q</span></span>} />
                <FormControlLabel
                    value="Lw"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Дължина</span>} />
            </RadioGroup>
        </FormControl>
    );
};