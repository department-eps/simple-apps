import { Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@mui/material"
import { useContext } from "react";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";
import { InlineMath } from "react-katex";
import styles from './RadioButtons.module.css'

export default function RadioButtons() {
    const { handleRadioChange, radioValue } = useContext(TransformerLossesContext)

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
                    value="U1"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Захр. напр. <InlineMath math={"U_1"} /></span>} />
                <FormControlLabel
                    value="S1"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Пълна мощ. <InlineMath math={"S_1"} /></span>} />
                <FormControlLabel
                    value="cosphi"
                    control={<Radio />}
                    label={<span className={styles['radiobutton-label']}>Фактор на мощ</span>} />
            </RadioGroup>
        </FormControl>
    );
};