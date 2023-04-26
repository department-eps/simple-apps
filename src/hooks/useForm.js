import { useState } from "react";

export function useForm(initialValues) {
    const regex = /^[\d.-]*$/;
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
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