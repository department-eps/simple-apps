import { useState } from "react";

export function useForm(initialValues) {
    const regex = /^[\d.-]*$/;
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        if (e.target.name === 'B1' || e.target.name === 'B2' || e.target.name === 'B3') {
            const numbers = e.target.value.match(/\d/g)?.length;
            const dotCount = (e.target.value.match(/\./g) || []).length;
            const hyphenCount = (e.target.value.match(/-/g) || []).length;
            if (numbers > 3 || dotCount > 1 || (hyphenCount > 1 || (hyphenCount === 1 && e.target.value[0] !== '-'))) {
              return;
            }
          }
        if (e.target.value === "" || regex.test(e.target.value)) {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
            });
        };
    };
    return {
        formValues,
        onChange
    };
};