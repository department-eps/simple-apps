import { useMemo } from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styles from './Chart.module.css'
let measuringUnits = '';

function calculateXTicks(radioValue) {
    const xTicks = [];
    if (radioValue === 'P') {
        for (let i = -100; i <= 100; i += 20) {
            xTicks.push(i);
            measuringUnits = 'Активна мощност [kW]'
        }
    } else if (radioValue === "Q") {
        for (let i = -100; i <= 100; i += 20) {
            xTicks.push(i);
            measuringUnits = 'Реакт. мощност [kVAr]'
        }
    } else if (radioValue === "Lw") {
        for (let i = 200; i <= 1000; i += 200) {
            xTicks.push(Number(i.toFixed(2)))
            measuringUnits = 'Дължина [m]'
        }
    }
    return xTicks;
};

export default function Chart({ voltageLosses, radioValue }) {
    const xTicks = useMemo(() => calculateXTicks(radioValue), [radioValue])
    console.log(voltageLosses)
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
                    <Line type="monotone" dataKey="y" stroke="#8884d8" name="deltaU" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};