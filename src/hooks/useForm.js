import { useState } from "react";

export function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };
    return {
        formValues,
        onChange
    };
};