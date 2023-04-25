import { abs, add, arg, asin, atan2, complex, conj, cos, divide, multiply, pi, sin, sqrt } from "mathjs";
export const calculate = {
    Ug0: (U1, theta) => complex(U1 * cos(convert.toRad(theta)), U1 * sin(convert.toRad(theta))),
    Ig0: (P1, Q1, Ug0) => divide(complex(P1, -Q1), conj(Ug0)),
    delta0: (Ug0, Ra, Xd, Ig0) => arg(add(Ug0, multiply(complex(Ra, Xd), complex(Ig0)))),
    Id0: (Ir0, delta0, Ii0) => (Ir0 * sin(convert.toRad(delta0))) - (Ii0 * cos(convert.toRad(delta0))),
    Iq0: (Ir0, delta0, Ii0) => (Ir0 * cos(convert.toRad(delta0))) + (Ii0 * sin(convert.toRad(delta0))),
    Ud0: (Ur0, delta0, Ui0) => (Ur0 * sin(convert.toRad(delta0))) - (Ui0 * cos(convert.toRad(delta0))),
    Uq0: (Ur0, delta0, Ui0) => (Ur0 * cos(convert.toRad(delta0))) + (Ui0 * sin(convert.toRad(delta0))),
    Eq0: (Uq0, Ra, Iq0, Xd, Id) => Uq0 + Ra * Iq0 + Xd * Id,
    psid0: (Eq0, Xd, Id0) => Eq0 - Xd * Id0,
    psiq0: (Xd, Iq0) => -Xd * Iq0,
    Te0: (psid0, Iq0, psiq0, Id0) => (psid0 * Iq0) - (psiq0 * Id0),
    Ks: (Eq0, Us0, y, delta0, alpha) => Eq0 * Us0 * y * cos(convert.toRad(delta0) - convert.toRad(alpha)),
    Q1: (U1, y, alpha, U2, theta) => (U1 ** 2 * y * cos(convert.toRad(alpha))) - (U1 * U2 * y * cos(convert.toRad(theta) - convert.toRad(alpha))),
    Y: (Z) => divide(1, Z),
    alpha: (Y) => pi / 2 + atan2(Y.im, Y.re),
    omega0: () => 2 * pi * 50,
    ksi: (root) => {
        const {re: alpha, im: omega} = {...root};
        const result = -alpha / (sqrt(alpha **2 + omega **2));
        return result;
    },
    rootsOfPolynome: (Kd, H, Ks, omega0) => {
        const a = 1;
        const b = Kd / (2 * H);
        const c = (Ks * omega0) / (2 * H);
        const discriminant = b ** 2 - 4 * a * c;
        const sqrtDiscriminant = sqrt(abs(discriminant));
        const root1 = complex(-b / (2 * a), sqrtDiscriminant / (2 * a));
        const root2 = complex(-b / (2 * a), -sqrtDiscriminant / (2 * a));
        return { root1, root2 };
    },
    theta: (P1, U1, alpha, U2, y) => {
        const dividend = (P1 - U1 ** 2 * y * sin(convert.toRad(alpha)));
        const divisor = (U1 * U2 * y);
        const resultInRadians = asin(divide(dividend, divisor));
        const resultInDegrees = abs(convert.toDegree(resultInRadians));
        return (resultInDegrees + alpha);
    }
}
export const convert = {
    toDegree: (rad) => rad * 180 / pi,
    toPolarUnit: (Y) => sqrt(Y.re ** 2 + Y.im ** 2),
    toRad: (deg) => deg / 180 * pi,
}