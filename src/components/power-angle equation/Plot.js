import Plotly from 'react-plotly.js';
import { abs, atan2, complex, cos, divide, pi, sin } from 'mathjs';

export default function Plot({ values }) {
    let Us = Number(values.Us);
    let Ur = Number(values.Ur);
    let R = Number(values.R);
    let X = Number(values.X);
    return graph(Us, Ur, R, X);

    function generateTheta() {
        let theta = [];
        for (let i = 0; i <= 360; i += 5) {
            theta.push(i);
        }
        return theta;
    }

    function toRad(ang) {
        return ang / 180 * pi;
    }

    function graph(Us, Ur, R, X) {
        let P = [];
        let Q = [];
        let theta = generateTheta();
        for (let ang of theta) {
            let tempUs = complex(Us * cos(toRad(ang)), Us * sin(toRad(ang)));
            let tempUr = complex(Ur, 0);
            let tempZ = complex(R, X);
            debugger;
            let [p, q] = powerAngle(tempUs, tempUr, tempZ);
            P.push(p);
            Q.push(q);
        }
        let data = [
            {
                x: theta,
                y: P,
                type: "scatter",
                name: "P"
            },
            {
                x: theta,
                y: Q,
                type: 'scatter',
                name: "Q"
            }
        ];
        let layout = {
            title: "Power-Angle equation",
            width: 800,
            height: 600,
            xaxis: {
                title: "Angle [deg]",
                showgrid: true,
                colorgrid: "yellow"
            },
            yaxis: {
                title: "Power[pu]",
                showgrid: true,
                colorgrid: "gray"
            },
        };
        return (
            <Plotly
                data={data}
                layout={layout}
            />
        );
    }
    function powerAngle(Us, Ur, Z) {
        debugger;
        let Y = divide(1, Z);
        let alpha = pi / 2 + atan2(Y.im, Y.re);
        let angs = atan2(Us.im, Us.re);
        let angr = atan2(Ur.im, Ur.re);

        let P = abs(Us) ** 2 * abs(Y) * sin(alpha) + abs(Us) * abs(Ur) * abs(Y) * sin(angs - angr - alpha);
        let Q = abs(Us) ** 2 * abs(Y) * cos(alpha) - abs(Us) * abs(Ur) * abs(Y) * cos(angs - angr - alpha);
        return [P, Q];
    }
}
