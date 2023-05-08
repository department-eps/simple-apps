import { useMemo } from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line, Dot } from "recharts";


export default function TransformerLossesChart({ losses, baseDot }) {
    const renderDot = useMemo(() => (props) => {
        const { cx, cy, payload } = props;
        if (payload.x === baseDot) {
            return (
                <Dot cx={cx} cy={cy} r={4} stroke="blue" fill="blue" strokeWidth={2} />
            );
        }
        return null;
    }, [baseDot]);

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={losses}>
                <XAxis dataKey='x' />
                <YAxis unit=' kW' />
                <CartesianGrid strokeDasharray="11 3" />
                <Line type="monotone" dataKey="Pidle" stroke="#8884d8" dot={renderDot} name="Pпх" />
                <Line type="monotone" dataKey="Psc" stroke="#82ca9d" dot={renderDot} name="Pкс" />
                <Line type="monotone" dataKey="Pall" stroke="red" dot={renderDot} name="P" />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    );
};