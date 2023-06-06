import { abs, atan2, complex, cos, divide, pi, sin } from 'mathjs';

export default function calculate( {formValues} ) {
    let Us = Number(formValues.Us);
    let Ur = Number(formValues.Ur);
    let R = Number(formValues.R);
    let X = Number(formValues.X);
    let data = graph(Us, Ur, R, X);
    return data;

    function generateTheta() {
        let theta = [];
        for (let i = 0; i <= 360; i += 5) {
            theta.push(i);
        }
        return theta;
    };

    function toRad(ang) {
        return ang / 180 * pi;
    };

    function graph(Us, Ur, R, X) {
        let data = []
        let theta = generateTheta();
        for (let ang of theta) {
            let tempUs = complex(Us * cos(toRad(ang)), Us * sin(toRad(ang)));
            let tempUr = complex(Ur, 0);
            let tempZ = complex(R, X);
            let [p, q] = powerAngle(tempUs, tempUr, tempZ);
            data.push({
                P: Number(p),
                Q: Number(q),
                tita: ang
            })
        };
        return data;
    };
    function powerAngle(Us, Ur, Z) {
        let Y = divide(1, Z);
        let alpha = pi / 2 + atan2(Y.im, Y.re);
        let angS = atan2(Us.im, Us.re);
        let angR = atan2(Ur.im, Ur.re);

        let P = abs(Us) ** 2 * abs(Y) * sin(alpha) + abs(Us) * abs(Ur) * abs(Y) * sin(angS - angR - alpha);
        let Q = abs(Us) ** 2 * abs(Y) * cos(alpha) - abs(Us) * abs(Ur) * abs(Y) * cos(angS - angR - alpha);
        return [P, Q];
    };
};
