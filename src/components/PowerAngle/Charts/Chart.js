import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styles from "./Chart.module.css"
import { Typography } from "@mui/material";
import { InlineMath } from "react-katex";

export function Chart({ result}) {
    return (
        <>
            <div className={styles['chart-container']}>
                <Typography className={styles['chart-label']}>Мощност [pu]</Typography>
                <span className={styles['chart-label-x']}><InlineMath math={'\\theta'}/> [deg]</span>
                <ResponsiveContainer width={"100%"} height={400} >
                    <LineChart data={result} margin={{ right: 23 }}>
                        <XAxis
                            dataKey='tita'
                            type="number"
                            height={55}
                            style={{ fill: 'black' }}
                        >
                        </XAxis>
                        <YAxis
                            style={{ fill: 'black' }}
                            width={65}>
                        </YAxis>
                        <CartesianGrid strokeDasharray="11 3" />
                        <Line type="monotone" dataKey="P" stroke="red" strokeWidth={2} name="P" dot={false} />
                        <Line type="monotone" dataKey="Q" stroke="blue" strokeWidth={2} name="Q" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};