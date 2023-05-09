import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";

export default function LossesDisplay() {
    const {showLosses} = useContext(TransformerLossesContext);
    const PidleInPercent = (((showLosses.Pidle/1000)/showLosses.S1)* 100).toFixed(2)
    const PscInPercent = (((showLosses.Psc/1000)/showLosses.S1)* 100).toFixed(2)
    const QidleInPercent =(((showLosses.Qidle/1000)/showLosses.S1)* 100).toFixed(2)
    const QscInPercent =(((showLosses.Qsc/1000)/showLosses.S1)* 100).toFixed(2)

    return (
        <Box sx= {{border: '3px solid #0971f1', borderRadius: '25px', width: '300px', textAlign: 'center', alignContent: 'center'}}>
            <Typography sx={{ fontSize: '20px' }}>ΔPобщо = {((showLosses.Pidle + showLosses.Psc)/1000).toFixed(2)} kW</Typography>
            <Typography sx={{ fontSize: '20px' }}>ΔPпх = {(showLosses.Pidle/1000).toFixed(2)}  kW ({PidleInPercent} %)</Typography>
            <Typography sx={{ fontSize: '20px' }}>ΔPк = {(showLosses.Psc/1000).toFixed(2)}  kW ({PscInPercent} %)</Typography>
            <Typography sx={{ fontSize: '20px' }}>ΔQобщо = {((showLosses.Qidle + showLosses.Qsc)/1000).toFixed(2)} kVAr</Typography>
            <Typography sx={{ fontSize: '20px' }}>ΔQпх = {(showLosses.Qidle/1000).toFixed(2)} kVAr({QidleInPercent} %)</Typography>
            <Typography sx={{ fontSize: '20px' }}>ΔQк = {(showLosses.Qsc/1000).toFixed(2)}  kVAr ({QscInPercent} %)</Typography>
        </Box>
    )
}