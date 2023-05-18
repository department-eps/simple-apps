export function calculateXTicks(radioValue) {
    let measuringUnits = '';
    const xTicks = [];
    if (radioValue === 'P') {
        for (let i = -100; i <= 100; i += 20) {
            xTicks.push(i);
            measuringUnits = 'Активна мощност [kW]'
        }
    } else if (radioValue === "Q") {
        for (let i = -100; i <= 100; i += 20) {
            xTicks.push(i);
            measuringUnits = 'Реакт. мощност [kVAr]'
        }
    } else if (radioValue === "Lw") {
        for (let i = 200; i <= 1000; i += 200) {
            xTicks.push(Number(i.toFixed(2)))
            measuringUnits = 'Дължина [m]'
        }
    }
    return [xTicks, measuringUnits];
};
