import { InlineMath } from "react-katex";

export function calculateXTicks(radioValue) {
    const xTicks = [];
    const variables = {}
    if (radioValue === 'U1') {
        for (let i = 18; i <= 22; i += 0.5) {
            xTicks.push(i);
            variables.variable = 'U_1';
            variables.measuringUnit = ' [kV]';
        };
    } else if (radioValue === "S1") {
        for (let i = 100; i <= 1000; i += 100) {
            xTicks.push(i);
            variables.variable = 'S_1';
            variables.measuringUnit = ' [kVA]';
        };
    } else if (radioValue === "cosphi") {
        for (let i = 0.1; i <= 1; i += 0.1) {
            xTicks.push(Number(i.toFixed(2)))
            variables.variable = '\\cosφ';
            variables.measuringUnit = ' [ind]';
        };
    };
    return [xTicks, variables];
};

export function renderLegend() {
    return (
        <div style={{paddingLeft: '75px'}}>
            <span style={{ color: '#8884d8' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', backgroundColor: '#8884d8' }}></span>
                <InlineMath math={'P_{пх}'} />
            </span>
            <span style={{ color: '#82ca9d', paddingLeft: '15px' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', backgroundColor: '#82ca9d' }}></span>
                <InlineMath math={'P_{кс}'} />
            </span>
            <span style={{ color: 'red', paddingLeft: '15px' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', backgroundColor: 'red' }}></span>
                <InlineMath math={'P_{общо}'} />
            </span>
        </div>
    );
};

export const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
};