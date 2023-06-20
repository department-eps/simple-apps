import { useState } from "react";

export function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        if (e.target.value === "") {
            setFormValues({
                ...formValues,
                [e.target.name]: ""
            });
            return;
        }
        //kirchhoffLaw only
        if (initialValues.origin === 'KirchhoffLaw') {
            if (e.target.name === 'B1' || e.target.name === 'B2' || e.target.name === 'B3') {
                const regex = /^[\d.-]*$/;
                const numbers = e.target.value.match(/\d/g)?.length;
                const dotCount = (e.target.value.match(/\./g) || []).length;
                const hyphenCount = (e.target.value.match(/-/g) || []).length;
                if (numbers > 3 || dotCount > 1 || (hyphenCount > 1 || (hyphenCount === 1 && e.target.value[0] !== '-'))) {
                    return;
                } else {
                    if (!regex.test(e.target.value)) {
                        return
                    }
                    setFormValues({
                        ...formValues,
                        [e.target.name]: (e.target.value)
                    });
                };
            }
        }
        // Rotor angle only
        if (initialValues.origin === 'RotorAngle') {
            if (e.target.name === 'Ra' || e.target.name === 'Xd' || e.target.name === 'U1' || e.target.name === 'P1' || e.target.name === 'U2') {
                if (e.target.value > 1.2 || !/^[0-9.]+$/.test(e.target.value) || (e.target.value.match(/\./g) || []).length > 1 || e.target.value[0] === '.') {
                    return;
                };
            };
            if (e.target.name === 'H') {
                if (e.target.value > 999 || e.target.value < 0 || !/^[0-9.]+$/.test(e.target.value) || (e.target.value.match(/\./g) || []).length > 1 || e.target.value[0] === '.'){
                    return;
                }
            }
        }
        // Power angle only
        if (initialValues.origin === 'PowerAngle') {
            if (e.target.name === 'Us' || e.target.name === 'Ur' || e.target.name === 'X' || e.target.name === 'R') {
                if (e.target.value > 1.2 || !/^[0-9.]+$/.test(e.target.value) || (e.target.value.match(/\./g) || []).length > 1 || e.target.value[0] === '.') {
                    return;
                };
            };
        }
        setFormValues({
            ...formValues,
            [e.target.name]: (e.target.value)
        });
    };
    return {
        formValues,
        onChange
    };
};