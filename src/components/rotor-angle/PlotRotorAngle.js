import { complex } from "mathjs";
import { calculate, convert } from "../../utils/utils";

const Z = complex(0.05, 0.5);
export default function Plot({ values }) {
    const convertedValues = {};
    Object.entries(values).forEach(([key, value]) => {
        convertedValues[key] = Number(value);
    }); 
    
    const { Ra, Xd, U1, P1, H, U2, thetaU2 } = ({ ...convertedValues });
    getData(Ra, Xd, U1, P1, H, U2, thetaU2);
};

function  getData(Ra, Xd, U1, P1, H, U2, thetaU2) {
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
    const {re: Ur0, im: Ui0} = {...Ug0};
    // current in the terminal
    const Ig0 = calculate.Ig0(P1, Q1, Ug0);
    const {re: Ir0, im:Ii0} = {...Ig0};
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
};
