import { ReactComponent as KirchhoffScheme } from './KirchhoffScheme.svg'
import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm'
import styles from './ModifiedKirchhoffScheme.module.css'

export default function ModifiedKirchhoffScheme() {
    const [nodes, setNodes] = useState({});
    const { formValues, onChange } = useForm({
        B1: "5",
        B2: "5",
        B3: "5",
        origin: 'KirchhoffLaw'
    });

    useEffect(() => {
        const { B1, B2, B3 } = formValues;
        if (!B1 || !B2 || !B3) {
            return setNodes({})
        };
        setNodes({
            node1: Number(B1) + Number(B2) + Number(B3),
            node2: Number(B2) + Number(B3),
            node3: Number(B3)
        });
    }, [formValues])

    return (
        <div className={styles['container']}>
            <svg width="450" height="155" className={styles['wrapper']} viewBox="30 150 900 50" preserveAspectRatio="xMidYMid meet">
                <KirchhoffScheme />
                {typeof nodes.node1 !== 'undefined' && !isNaN(nodes.node1) &&
                    typeof nodes.node2 !== 'undefined' && !isNaN(nodes.node2) &&
                    typeof nodes.node3 !== 'undefined' && !isNaN(nodes.node3) &&
                    <>
                        <foreignObject x="215" y="35" width="130px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span>{nodes.node1} kW</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="435" y="35" width="130px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span>{nodes.node2} kW</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="642" y="35" width="130px" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span>{nodes.node3} kW</span>
                            </div>
                        </foreignObject>
                    </>
                }
                <foreignObject x="360" y="230" width="120px" height="50">
                    <span xmlns="http://www.w3.org/1999/xhtml">
                        <input
                            className={styles['input']}
                            name='B1'
                            value={formValues.B1}
                            onChange={onChange}
                        ></input>
                        <span className={styles['units']}>kW</span>
                    </span>
                </foreignObject>
                <foreignObject x="568" y="230" width="120px" height="50">
                    <span xmlns="http://www.w3.org/1999/xhtml">
                        <input
                            className={styles['input']}
                            name='B2'
                            value={formValues.B2}
                            onChange={onChange}
                        ></input>
                        <span className={styles['units']}>kW</span>
                    </span>
                </foreignObject>
                <foreignObject x="772" y="230" width="120px" height="50">
                    <span xmlns="http://www.w3.org/1999/xhtml">
                        <input
                            className={styles['input']}
                            name='B3'
                            value={formValues.B3}
                            onChange={onChange}
                        >
                        </input>
                        <span className={styles['units']}>kW</span>
                    </span>
                </foreignObject>
            </svg>
        </div>
    );
};