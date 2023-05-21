export function calculateXTicks(radioValue) {
    let measuringUnits = '';
    const xTicks = [];
    if (radioValue === 'P') {
        let step = 20;
        if (window.innerWidth < 600) {
            step = 50;
        }
        for (let i = -100; i <= 100; i += step) {
            xTicks.push(i);
            measuringUnits = 'Активна мощност [kW]'
        }
    } else if (radioValue === "Q") {
        let step = 20;
        if (window.innerWidth < 600) {
            step = 50;
        }
        for (let i = -100; i <= 100; i += step) {
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

export const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
};
