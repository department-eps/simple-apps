import { sqrt, complex, subtract, multiply } from "mathjs";

export default function calculateTransformerLosses(U1, S1, cosphi) {
    const U1nom = 20e3;
    const Snom = 1000e3;
    const P1 = S1 * cosphi;
    const Q1 = sqrt(S1 ** 2 - P1 ** 2);
    const loading = (S1/1000)*100
    const impedance = calculateTransformerImpedance(U1nom, Snom);
    const Sidle = complex((U1 * 1e3) ** 2 * impedance.Gt, (U1 * 1e3) ** 2 * impedance.Bt);
    const transverse_conductance_S1 = subtract(complex(P1 * 1e3, Q1 * 1e3), Sidle);
    const losses_short_circuit_S =
        multiply((transverse_conductance_S1.re**2 + transverse_conductance_S1.im**2) / ((U1*1e3)**2), complex(impedance.Rt, impedance.Xt));
    const Pidle = Sidle.re;
    const Qidle = Sidle.im;
    const Psc = losses_short_circuit_S.re;
    const Qsc = losses_short_circuit_S.im;
    const Ut = ((transverse_conductance_S1.re * impedance.Rt) + ((transverse_conductance_S1.im)*impedance.Xt)) / (U1*1e3)
    const U2 = ((U1*1e3 - Ut)/1000).toFixed(2);
    return {Pidle, Qidle, Psc, Qsc, S1, U1, loading, U2};
};


function calculateTransformerImpedance(U1nom, Snom) {
    const Rt = 11.6e3 * (U1nom / Snom) ** 2;
    const Zt = (6 / 100) * (U1nom ** 2 / Snom);
    const Xt = sqrt(Zt ** 2 - Rt ** 2);
    const Gt = 2.16e3 / U1nom ** 2;
    const Qidle = (1.3 * 1000) / 100;
    const Bt = (Qidle * 1e3) / U1nom ** 2;
    return { Gt, Bt, Rt, Xt };
}