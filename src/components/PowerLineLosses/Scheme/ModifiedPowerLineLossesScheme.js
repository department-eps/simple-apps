import { ReactComponent as PowerLineLossesScheme } from './PowerLineLossesScheme.svg'
import { InlineMath } from 'react-katex';

export default function ModifiedPowerLineLossesScheme({currentVoltageLosses}) {
    return (
        <svg width="450" height="100" style={{ width: "100%", height: "auto", maxWidth: "100%", fontFamily: 'Times New Roman' }} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
            <PowerLineLossesScheme />
            <foreignObject x="385" y="58" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <InlineMath math={'\\Delta U'} /> = {((currentVoltageLosses.deltaU? (currentVoltageLosses.deltaU).toFixed(2): 0))} V ({currentVoltageLosses.deltaUInPercent}%)
                </div>
            </foreignObject>
            <foreignObject x="426" y="168" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <InlineMath math={'R'} /> = {(currentVoltageLosses.R? (currentVoltageLosses.R).toFixed(2): 0)} Ω
                </div>
            </foreignObject>
            <foreignObject x="423" y="198" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <InlineMath math={'X'} /> = {(currentVoltageLosses.X? (currentVoltageLosses.X).toFixed(2): 0)} Ω
                </div>
            </foreignObject>
            <foreignObject x="280" y="25" width="250px" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    400 V
                </div>
            </foreignObject>
            <foreignObject x="610" y="25" width="250px" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    {currentVoltageLosses.U2} V
                </div>
            </foreignObject>
        </svg>
    );
};