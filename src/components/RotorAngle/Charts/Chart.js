import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, LabelList } from 'recharts';
import styles from './Chart.module.css';
import { InlineMath } from 'react-katex';

export default function Plot({ result }) {
    return (
        <>
            <div className={styles['chart-container']}>
                <div className={styles['chart-label-y']}>
                    <span>Imag <InlineMath math={'ω'} /> [rad/s]</span>
                </div>
                <ResponsiveContainer width={"100%"} height={400}>
                    <ScatterChart margin={{ right: 28 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            type="number"
                            dataKey="x"
                            name="Real [Np/s]"
                            style={{ fill: 'black' }}
                            tick={{dy: 5}}
                            tickFormatter={(value) => value.toFixed(3)}
                        >
                        </XAxis>
                        <YAxis
                            type="number"
                            dataKey="y"
                            name="Imag [rad/s]"
                            tick={{dx: -5}}
                            style={{ fill: 'black' }}
                            tickFormatter={(value) => Math.round(value * 100) / 100}
                        >
                        </YAxis>
                        <ReferenceLine y={0} stroke="#000" />
                        <Scatter type="monotone" name="λ1" data={result.scatterDataPlus} fill="#8884d8">
                            <LabelList dataKey="name" position={'bottom'} />
                        </Scatter>
                        <Scatter type="monotone" name="λ2" data={result.scatterDataMinus} fill="#82ca9d">
                            <LabelList dataKey="name" position={'top'} />
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            <div className={styles['chart-label-x']}>
                <span>Real <InlineMath math={'α'} /> [Np/s]</span>
            </div>
        </>
    );
};