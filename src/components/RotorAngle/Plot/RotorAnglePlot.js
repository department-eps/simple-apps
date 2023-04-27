import Plotly from 'react-plotly.js';
import styles from "./RotorAnglePlot.module.css";
import { calculateRotorAngle } from './calculate';


export default function Plot({ values }) {
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

    const { Ra, Xd, U1, P1start, step, P1end, H, U2, thetaU2 } = ({ ...convertedValues });
    for (let i = P1start; i >= P1end; i -= step) {
        const data = (calculateRotorAngle(Ra, Xd, U1, i, H, U2, thetaU2));
        result.root1.real.push(data.root1.re);
        result.root1.imaginary.push(data.root1.im);
        result.root2.real.push(data.root2.re);
        result.root2.imaginary.push(data.root2.im);
    };
    return graph(result)
};

function graph(roots) {
    let config = { responsive: true };
    let data = [{
        x: roots.root1.real,
        y: roots.root1.imaginary,
        mode: 'markers',
        type: 'scatter',
        name: 'λ1'
    },
    {
        x: roots.root2.real,
        y: roots.root2.imaginary,
        mode: 'markers',
        type: 'scatter',
        name: 'λ2'
    }];

    let layout = {
        autosize: false,
        title: "Eigenvalues",
        xaxis: {
            title: "Real [Np/s]",
            showgrid: true,
            rangemode: 'tozero',
        },
        yaxis: {
            title: "Imag [rad/s]",
            showgrid: true,
            rangemode: 'tozero'
        },
    };
    return (
        <Plotly
            data={data}
            layout={layout}
            config={config}
            className={styles['plot']}
        />
    );
};
