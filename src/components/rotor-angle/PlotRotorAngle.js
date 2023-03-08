import { complex } from "mathjs";
import Plotly from 'react-plotly.js';
import { calculate, convert } from "../../utils/utils";

const Z = complex(0.05, 0.5);
export default function Plot({ values }) {
    const convertedValues = {};
    Object.entries(values).forEach(([key, value]) => {
        convertedValues[key] = Number(value);
    });

    const { Ra, Xd, U1, P1, H, U2, thetaU2 } = ({ ...convertedValues });
    const data = getData(Ra, Xd, U1, P1, H, U2, thetaU2);
    return graph(data)
};

function graph(roots) {
    debugger;
    let data = [{
        x: [roots.root1.re],
        y: [roots.root1.im],
        mode: 'markers',
        type: 'scatter',
        name: 'λ1'
    },
    {
        x: [roots.root2.re],
        y: [roots.root2.im],
        mode: 'markers',
        type: 'scatter',
        name: 'λ2'
    }]

    let layout = {
        title: "Eigenvalues",
        width: 800,
        height: 600,
        xaxis: {
            title: "Real [Np/s]",
            showgrid: true,
            colorgrid: "yellow"
        },
        yaxis: {
            title: "Imag [rad/s]",
            showgrid: true,
            colorgrid: "gray"
        },
    };
    return (
        <Plotly
            data={data}
            layout={layout}
        />
    )
}


function getData(Ra, Xd, U1, P1, H, U2, thetaU2) {
    // angular frequency for 50hz
    const omega0 = calculate.omega0();
    // own and mutual conductivites
    const Y = calculate.Y(Z);
    const y = convert.toPolarUnit(Y);
    const alpha = convert.toDegree(calculate.alpha(Y));
    // voltage angle and reactive generator power
    const theta = calculate.theta(P1, U1, alpha, U2, y);
    const Q1 = calculate.Q1(U1, y, alpha, U2, theta);
    // voltage in the terminal
    const Ug0 = calculate.Ug0(U1, theta);
    const { re: Ur0, im: Ui0 } = { ...Ug0 };
    // current in the terminal
    const Ig0 = calculate.Ig0(P1, Q1, Ug0);
    const { re: Ir0, im: Ii0 } = { ...Ig0 };
    // generator mode established
    const delta0 = convert.toDegree(calculate.delta0(Ug0, Ra, Xd, Ig0));
    const Id0 = calculate.Id0(Ir0, delta0, Ii0);
    const Iq0 = calculate.Iq0(Ir0, delta0, Ii0);
    // voltage transformation
    const Ud0 = calculate.Ud0(Ur0, delta0, Ui0);
    const Uq0 = calculate.Uq0(Ur0, delta0, Ui0);
    const Eq0 = calculate.Eq0(Uq0, Ra, Iq0, Xd, Id0);
    const psid0 = calculate.psid0(Eq0, Xd, Id0);
    const psiq0 = calculate.psiq0(Xd, Iq0);
    const Te0 = calculate.Te0(psid0, Iq0, psiq0, Id0);
    // state-space linearization and composition of the model
    const Ks = calculate.Ks(Eq0, U2, y, delta0, alpha);
    const Kd = Te0;
    // polynome roots
    const roots = calculate.rootsOfPolynome(Kd, H, Ks, omega0);
    // decrement
    const ksi = calculate.ksi(roots.root1);
    return roots
};
