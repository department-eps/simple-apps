import { useContext } from 'react';
import { ReactComponent as PowerLineLossesScheme } from './PowerLineLossesScheme.svg'
import { PowerLineLossesContext } from '../../../contexts/PowerLineLossesContext';
import styles from './ModifiedPowerLineLossesScheme.module.css'

export default function ModifiedPowerLineLossesScheme() {
    const { currentVoltageLosses } = useContext(PowerLineLossesContext);

    return (
        <svg width="450" height="100" style={{ width: "100%", height: "auto", maxWidth: "100%", fontFamily: 'Times New Roman' }} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
            <PowerLineLossesScheme />
            <foreignObject x="280" y="65" width="380px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '20pt', textAlign: 'center' }}>
                    <span>
                        <span className={styles['katex-label']}>Δ</span>
                        <span className={styles['katex-label-italic']}>U</span>
                        &nbsp;= {((currentVoltageLosses.lineLosses?.deltaU ? (currentVoltageLosses.lineLosses?.deltaU).toFixed(2) : 0))} V ({currentVoltageLosses.lineLosses?.deltaUInPercent}%)
                    </span>
                </div>
            </foreignObject>
            <foreignObject x="409" y="158" width="250px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '20pt' }}>
                    <span>
                        <span className={styles['katex-label-italic']}>R</span>
                        &nbsp;= {(currentVoltageLosses.lineLosses?.R ? (currentVoltageLosses.lineLosses.R).toFixed(2) : 0)} Ω
                    </span>
                </div>
            </foreignObject>
            <foreignObject x="409" y="188" width="250px" height="40" style={{ fontSize: '20pt' }}>
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <span>
                        <span className={styles['katex-label-italic']}>X</span>
                        &nbsp;= {(currentVoltageLosses.lineLosses?.X ? (currentVoltageLosses.lineLosses.X).toFixed(2) : 0)} Ω
                    </span>
                </div>
            </foreignObject>
            <foreignObject x="260" y="20" width="250px" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '20pt' }}>
                    400.00 V
                </div>
            </foreignObject>
            <foreignObject x="520" y="20" width="250px" height="50">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '20pt', textAlign: 'center' }}>
                    {currentVoltageLosses.lineLosses?.U2} V
                </div>
            </foreignObject>
        </svg>
    );
};