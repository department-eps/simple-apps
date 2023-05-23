import { useContext } from "react";
import { Box } from "@mui/material";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";
import { InlineMath } from "react-katex";
import styles from './LossesDisplay.module.css';

export default function LossesDisplay() {
    const {showLosses} = useContext(TransformerLossesContext);
    const PidleInPercent = (((showLosses.Pidle/1000)/showLosses.S1)* 100).toFixed(2);
    const PscInPercent = (((showLosses.Psc/1000)/showLosses.S1)* 100).toFixed(2);
    const QidleInPercent =(((showLosses.Qidle/1000)/showLosses.S1)* 100).toFixed(2);
    const QscInPercent =(((showLosses.Qsc/1000)/showLosses.S1)* 100).toFixed(2);
    return (
        <Box className={styles['wrapper']}>
            <div><InlineMath math={'\\Delta P_{общо}'} /> = {((showLosses.Pidle + showLosses.Psc)/1000).toFixed(2)} kW</div>
            <div><InlineMath math={'\\Delta P_{пх}'} /> = {(showLosses.Pidle/1000).toFixed(2)}  kW ({PidleInPercent} %)</div>
            <div><InlineMath math={'\\Delta P_{кс}'} /> = {(showLosses.Psc/1000).toFixed(2)}  kW ({PscInPercent} %)</div>
            <div><InlineMath math={'\\Delta Q_{общо}'} /> = {((showLosses.Qidle + showLosses.Qsc)/1000).toFixed(2)} kVAr</div>
            <div><InlineMath math={'\\Delta Q_{пх}'} /> = {(showLosses.Qidle/1000).toFixed(2)} kVAr ({QidleInPercent} %)</div>
            <div><InlineMath math={'\\Delta Q_{кс}'} /> = {(showLosses.Qsc/1000).toFixed(2)}  kVAr ({QscInPercent} %)</div>
        </Box>
    )
}