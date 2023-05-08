import { useContext, memo, useMemo } from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line, Label } from "recharts";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";

function calculateXTicks(radioValue) {
    const xTicks = [];
    if (radioValue === 'U1') {
        for (let i = 18; i <= 22; i += 0.5) {
            xTicks.push(i);
        }
    } else if (radioValue === "S1") {
        for (let i = 100; i <= 1000; i += 100) {
            xTicks.push(i)
        }
    } else if (radioValue === "cosphi") {
        for (let i = 0.1; i <= 1; i += 0.1) {
            xTicks.push(Number(i.toFixed(2)))
        }
    }
    return xTicks;
}

function TransformerLossesChart() {
    const { losses, renderDot, radioValue } = useContext(TransformerLossesContext)
    const xTicks = useMemo(() => calculateXTicks(radioValue), [radioValue])

    return (
        <>
            {radioValue !== 'all' &&
                <ResponsiveContainer width={"100%"} height={400}>
                    <LineChart data={losses}>
                        <XAxis
                            dataKey="x"
                            type="Number"
                            tickFormatter={(tick) => tick}
                            ticks={xTicks}
                            height={55}
                            style={{ fontSize: '20px', fill: 'black' }}
                        >
                            <Label
                                value='S1 [kVA]'
                                position='insideBottom'
                                style={{ textAnchor: 'middle', fontSize: '20px', fill: 'black' }} />
                        </XAxis>
                        <YAxis style={{ fontSize: '20px', fill: 'black' }} width={55}>
                            <Label
                                angle={-90}
                                value='Мощност [kW]'
                                position='insideLeft'
                                style={{ textAnchor: 'middle', fontSize: '20px', fill: 'black' }} />
                        </YAxis>
                        <CartesianGrid strokeDasharray="11 3" />
                        <Line key="Pidle" type="monotone" dataKey="Pidle" stroke="#8884d8" dot={renderDot} name="Pпх" />
                        <Line key="Psc" type="monotone" dataKey="Psc" stroke="#82ca9d" dot={renderDot} name="Pкс" />
                        <Line key="Pall" type="monotone" dataKey="Pall" stroke="red" dot={renderDot} name="Pобщо" />
                        <Legend wrapperStyle={{ fontSize: "20px", paddingLeft: '23px', paddingTop: '5px' }} />
                    </LineChart>
                </ResponsiveContainer>
            }
        </>
    );
};
export default memo(TransformerLossesChart)