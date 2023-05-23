import { useContext, memo, useMemo, useEffect } from "react";
import { InlineMath } from "react-katex";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line, Label } from "recharts";
import { TransformerLossesContext } from "../../../contexts/TransformerLossesContext";
import { calculateXTicks, renderLegend, scrollToBottom } from "./chartUtil";
import styles from "./Chart.module.css";

function TransformerLossesChart() {
    const { losses, renderDot, radioValue } = useContext(TransformerLossesContext);
    const [xTicks, variables] = useMemo(() => calculateXTicks(radioValue), [radioValue]);

    useEffect(() => {
        if (radioValue !== 'all') {
          scrollToBottom();
        }
      }, [radioValue]);

    return (
        <>
            {radioValue !== 'all' &&
                <div className={styles['container']}>
                    <span className={styles['x-label']}><InlineMath math={variables.variable} />{variables.measuringUnit}</span>
                    <ResponsiveContainer width={"100%"} height={400}>
                        <LineChart data={losses}>
                            <XAxis
                                dataKey="x"
                                type="Number"
                                tickFormatter={(tick) => tick}
                                ticks={xTicks}
                                height={55}
                                style={{ fill: 'black' }}
                            />
                            <YAxis
                                style={{ fill: 'black' }}
                                width={55}>
                                <Label
                                    angle={-90}
                                    value='Мощност [kW]'
                                    position='insideLeft'
                                    style={{ textAnchor: 'middle', fill: 'black' }} />
                            </YAxis>
                            <CartesianGrid strokeDasharray="11 3" />
                            <Line key="Pidle" type="monotone" dataKey="Pidle" stroke="#8884d8" dot={renderDot} name="Pпх" />
                            <Line key="Psc" type="monotone" dataKey="Psc" stroke="#82ca9d" dot={renderDot} name="Pкс" />
                            <Line key="Pall" type="monotone" dataKey="Pall" stroke="red" dot={renderDot} name="Pобщо" />
                            <Legend content={renderLegend} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }
        </>
    );
};
export default memo(TransformerLossesChart)