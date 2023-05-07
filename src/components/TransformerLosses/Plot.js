import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from "recharts";

export default function TransformerLossesChart({ losses }) {
    const xTicks = [18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22];
    const xTickFormatter = (value) => {
        if (value % 4 === 0) {
            return value;
        }
        return '';
    };
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={losses}>
                <XAxis dataKey='x'/>
                <YAxis unit=' kW' />
                <CartesianGrid strokeDasharray="11 3" />
                <Tooltip />
                <Line type="monotone" dataKey="Pidle" stroke="#8884d8" dot={false} name="Pпх" />
                <Line type="monotone" dataKey="Psc" stroke="#82ca9d" dot={false} name="Pкс" />
                <Line type="monotone" dataKey="Pall" stroke="#82ca9d" dot={false} name="P" />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    );
};