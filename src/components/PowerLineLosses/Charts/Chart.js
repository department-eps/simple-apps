import { useMemo, useContext } from "react";
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { PowerLineLossesContext } from "../../../contexts/PowerLineLossesContext";
import { calculateXTicks } from "./chartUtil";
import styles from './Chart.module.css'


export default function Chart() {
    const {renderDot, radioValue, voltageLosses} = useContext(PowerLineLossesContext);
    const [xTicks, measuringUnits] = useMemo(() => calculateXTicks(radioValue), [radioValue]);
    
    return (
        <div className={styles['chart-container']}>
            <ResponsiveContainer width={"100%"} height={400} >
                <LineChart data={voltageLosses} margin={{ right: 20 }}>
                    <XAxis
                        dataKey="x"
                        type="Number"
                        tickFormatter={(tick) => tick}
                        ticks={xTicks}
                        height={55}
                        style={{ fill: 'black' }}
                    >
                        <Label
                            value={measuringUnits}
                            position='insideBottom'
                            fill="black" />
                    </XAxis>
                    <YAxis
                        style={{ fill: 'black' }}
                        width={65}>
                    </YAxis>
                    <CartesianGrid strokeDasharray="11 3" />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" name="deltaU" dot={renderDot} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};