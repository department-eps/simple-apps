import { ReactComponent as TransformerLossesScheme } from './transformerLossesScheme.svg'
import { useContext } from 'react';
import { TransformerLossesContext } from '../../../contexts/TransformerLossesContext';
import styles from './ModifiedTransformerLossesScheme.module.css'

export default function ModifiedTransformerLossesScheme() {
    const { showLosses } = useContext(TransformerLossesContext)
    return (
        <div className={styles['container']}>
            <svg width="450" height="100" className={styles['wrapper']} viewBox="0 50 900 150" preserveAspectRatio="xMidYMid meet">
                <TransformerLossesScheme />
                <foreignObject x="353" y="28" width="250px" height="40">
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        <span>loading = {showLosses.loading} %</span>
                    </div>
                </foreignObject>
                <foreignObject x="180" y="25" width="250px" height="40">
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        <span>{showLosses.U1} kV</span>
                    </div>
                </foreignObject>
                <foreignObject x="518" y="25" width="250px" height="40">
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        <span>{showLosses.U2} kV</span>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};