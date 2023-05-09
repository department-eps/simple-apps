import { Typography } from '@mui/material';
import { ReactComponent as TransformerLossesScheme } from './transformerLossesScheme.svg'
import { useContext } from 'react';
import { TransformerLossesContext } from '../../../contexts/TransformerLossesContext';

export default function ModifiedTransformerLossesScheme() {
    const {showLosses} = useContext(TransformerLossesContext)
    return (
        <svg width="450" height="100" style={{ width: "100%", height: "auto", maxWidth: "100%" }} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
            <TransformerLossesScheme />
            <foreignObject x="353" y="28" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <Typography sx={{ fontSize: '20pt' }}>loading = {showLosses.loading} %</Typography>
                </div>
            </foreignObject>
            <foreignObject x="180" y="25" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <Typography sx={{ fontSize: '20pt' }}>{showLosses.U1} kV</Typography>
                </div>
            </foreignObject>
            <foreignObject x="518" y="25" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <Typography sx={{ fontSize: '20pt' }}>{showLosses.U2} kV</Typography>
                </div>
            </foreignObject>
        </svg>
    );
};