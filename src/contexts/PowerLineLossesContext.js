import { createContext, useState, useMemo } from "react";
import { Dot } from "recharts";

export const PowerLineLossesContext = createContext();

export function PowerLineLossesProvider({ children }) {
    const [radioValue, setRadioValue] = useState('all');
    const [voltageLosses, setVoltageLosses] = useState([]);
    const [currentVoltageLosses, setCurrentVoltageLosses] = useState({});
    const [hasRun, setHasRun] = useState(false)

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
    };

    const renderDot = useMemo(() => (props) => {
        const { cx, cy, payload, stroke } = props;
        if (payload.x === currentVoltageLosses?.x) {
            return (
                <Dot cx={cx} cy={cy} r={4} stroke={stroke} fill={stroke} strokeWidth={2} />
            );
        };
        return null;
    }, [currentVoltageLosses]);
    
    const ctx = {
        radioValue,
        setRadioValue,
        voltageLosses,
        setVoltageLosses,
        currentVoltageLosses,
        hasRun,
        setHasRun,
        setCurrentVoltageLosses,
        handleRadioChange,
        renderDot
    };

    return (
        <PowerLineLossesContext.Provider value={ctx}>
            {children}
        </PowerLineLossesContext.Provider>
    );
};