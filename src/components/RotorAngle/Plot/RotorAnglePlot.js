import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, LabelList, Label } from 'recharts';
import { calculateRotorAngle } from './calculate';

export default function Plot({ values }) {
    const mode = ['A', 'B', 'C', 'D', 'E']
    const result = {
        root1: {
            real: [],
            imaginary: []
        },
        root2: {
            real: [],
            imaginary: []
        }
    };
    const convertedValues = {};

    Object.entries(values).forEach(([key, value]) => {
        convertedValues[key] = Number(value);
    });

    const { Ra, Xd, U1, P1start, step, P1end, H, U2, thetaU2 } = { ...convertedValues };
    for (let i = P1start; i >= P1end; i -= step) {
        const data = calculateRotorAngle(Ra, Xd, U1, i, H, U2, thetaU2);
        result.root1.real.push(data.root1.re);
        result.root1.imaginary.push(data.root1.im);
        result.root2.real.push(data.root2.re);
        result.root2.imaginary.push(data.root2.im);
    }

    const scatterData1 = result.root1.real.map((value, index) => ({ x: value, y: result.root1.imaginary[index], name: mode[index] }));
    const scatterData2 = result.root2.real.map((value, index) => ({ x: value, y: result.root2.imaginary[index], name: mode[index] }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    type="number"
                    dataKey="x"
                    name="Real [Np/s]"
                    domain={['auto', 'auto']}
                    height={45}
                >
                    <Label value='Real α [Np/s]' position='insideBottom' style={{ textAnchor: 'middle', }} />
                </XAxis>
                <YAxis
                    type="number"
                    dataKey="y"
                    name="Imag [rad/s]"
                    orientation='right'
                    domain={['auto', 'auto']}
                >
                    <Label angle={-90} value='Imag ω [rad/s]' position='outsideLeft' style={{ textAnchor: 'middle' }} />
                </YAxis>
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Scatter name="λ1" data={scatterData1} fill="#8884d8">
                    <LabelList dataKey="name" position={'bottom'} />
                </Scatter>
                <Scatter name="λ2" data={scatterData2} fill="#82ca9d">
                    <LabelList dataKey="name" position={'top'} />
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
};