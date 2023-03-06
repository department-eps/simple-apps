import { abs, add, arg, asin, atan2, complex, conj, cos, divide, multiply, pi, sin, sqrt } from "mathjs";

const Z = complex(0.05, 0.5);
export default function Plot({ values }) {
    const convertedValues = {};
    Object.entries(values).forEach(([key, value]) => {
        convertedValues[key] = Number(value);
    });
    const { Ra, Xd, U1, P1, H, U2, thetaU2 } = ({ ...convertedValues });
    const Y = calculateY(Z);
    const y = toPolarUnit(Y);
    const alpha = convertToDegree(calculateAlpha(Y));
    const theta = calculateTheta(P1, U1, alpha, U2, y);
    const Q1 = calculateQ1(U1, y, alpha, U2, theta);
    const Ug0 = calculateUg0(U1, theta);
    const Ur0 = Ug0.re;
    const Ui0 = Ug0.im;
    const Ig0 = calculateIg0(P1, Q1, conj(Ug0));
    const Ir0 = Ig0.re;
    const Ii0 = Ig0.im;
    const delta0 = convertToDegree(calculateDelta0(Ug0, Ra, Xd, Ig0));
    const Id0 = calculateId0(Ir0, delta0, Ii0);
    const Iq0 = calculateIq0(Ir0, delta0, Ii0);
    const Ud0 = calculateUd0(Ur0, delta0, Ui0);
    const Uq0 = calculateUq0(Ur0, delta0, Ui0);
    const Eq0 = calculateEq0(Uq0, Ra, Iq0, Xd, Id0);
    const psid0 = calculatePsid0(Eq0, Xd, Id0);
    const psiq0 = calculatePsiq0(Xd, Iq0);
    const Te0 = calculateTe0(psid0, Iq0, psiq0, Id0);
    const Ks = calculateKs(Eq0, U2, y, delta0, alpha);
    const Kd = Te0;
    const omega0 = calculateOmega0();
    const roots = calculateRootsOfPolynome(Kd, H, Ks, omega0);
};


function calculateTheta(P1, U1, alpha, U2, y) {
    const dividend = (P1 - U1 ** 2 * y * sin(toRad(alpha)));
    const divisor = (U1 * U2 * y);
    const resultInRadians = asin(divide(dividend, divisor));
    const resultInDegrees = abs(convertToDegree(resultInRadians));
    return (resultInDegrees + alpha);
};

const calculateUg0 = (U1, theta) => complex(U1 * cos(toRad(theta)), U1 * sin(toRad(theta)));
const calculateIg0 = (P1, Q1, Ug0) => divide(complex(P1, -Q1), Ug0);
const calculateDelta0 = (Ug0, Ra, Xd, Ig0) => arg(add(Ug0, multiply(complex(Ra, Xd), complex(Ig0))));
const calculateId0 = (Ir0, delta0, Ii0) => (Ir0 * sin(toRad(delta0))) - (Ii0 * cos(toRad(delta0)));
const calculateIq0 = (Ir0, delta0, Ii0) => (Ir0 * cos(toRad(delta0))) + (Ii0 * sin(toRad(delta0)));
const calculateUd0 = (Ur0, delta0, Ui0) => (Ur0 * sin(toRad(delta0))) - (Ui0 * cos(toRad(delta0)));
const calculateUq0 = (Ur0, delta0, Ui0) => (Ur0 * cos(toRad(delta0))) + (Ui0 * sin(toRad(delta0)));
const calculateEq0 = (Uq0, Ra, Iq0, Xd, Id) => Uq0 + Ra * Iq0 + Xd * Id;
const calculatePsid0 = (Eq0, Xd, Id0) => Eq0 - Xd * Id0;
const calculatePsiq0 = (Xd, Iq0) => -Xd * Iq0;
const calculateTe0 = (psid0, Iq0, psiq0, Id0) => (psid0 * Iq0) - (psiq0 * Id0);
const calculateKs = (Eq0, Us0, y, delta0, alpha) => Eq0 * Us0 * y * cos(toRad(delta0) - toRad(alpha));
const calculateQ1 = (U1, y, alpha, U2, theta) => (U1 ** 2 * y * cos(toRad(alpha))) - (U1 * U2 * y * cos(toRad(theta) - toRad(alpha)));
const calculateY = (Z) => divide(1, Z);
const calculateAlpha = (Y) => pi / 2 + atan2(Y.im, Y.re);
const convertToDegree = (rad) => rad * 180 / pi;
const toPolarUnit = (Y) => sqrt(Y.re ** 2 + Y.im ** 2);
const toRad = (deg) => deg / 180 * pi;
const calculateOmega0 = () => 2 * pi * 50;
const calculateRootsOfPolynome = (Kd, H, Ks, omega0) => {
    const a = 1;
    const b = Kd / (2 * H);
    const c = (Ks * omega0)/(2 * H);
    const discriminant = b**2 - 4*a*c;
    const sqrtDiscriminant = sqrt(abs(discriminant));
    const root1 = complex(-b/(2*a), sqrtDiscriminant/(2*a));
    const root2 = complex(-b/(2*a), -sqrtDiscriminant/(2*a));
    return {root1, root2};
};