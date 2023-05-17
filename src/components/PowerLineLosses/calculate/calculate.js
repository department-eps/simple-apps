export default function calculatePowerLineLosses(P, Q, Lw) {
    const R0 = 1;
    const X0 = 0.3;
    const LwInKm = Lw / 1000;
    const R = (R0 * LwInKm);
    const X = (X0 * LwInKm);
    debugger;
    const deltaU = (((P * R ) + (Q * X)) / 0.4);
    const deltaUInPercent = ((deltaU / 400)*100).toFixed(2)
    const U2 = (400 - deltaU).toFixed(2)
    return {deltaU, R, X, deltaUInPercent, U2};
};