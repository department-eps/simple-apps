import { ReactComponent as KirchhoffScheme } from './KirchhoffScheme.svg'
import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm'
import { Typography } from '@mui/material';

export default function ModifiedKirchhoffScheme() {
    const [nodes, setNodes] = useState({});
    const { formValues, onChange } = useForm({
        B1: "5",
        B2: "5",
        B3: "5",
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
        <svg width="450" height="155" style={{ width: "100%", height: "auto", maxWidth: "100%" }} viewBox="0 150 900 50" preserveAspectRatio="xMidYMid meet">
            <KirchhoffScheme />
            {typeof nodes.node1 !== 'undefined' && !isNaN(nodes.node1) &&
                typeof nodes.node2 !== 'undefined' && !isNaN(nodes.node2) &&
                typeof nodes.node3 !== 'undefined' && !isNaN(nodes.node3) &&
                <>
                    <foreignObject x="215" y="35" width="130px" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <Typography sx={{ fontSize: '20pt', fontFamily: 'Times New Roman' }}>{nodes.node1} kW</Typography>
                        </div>
                    </foreignObject>
                    <foreignObject x="435" y="35" width="130px" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <Typography sx={{ fontSize: '20pt', fontFamily: 'Times New Roman' }}>{nodes.node2} kW</Typography>
                        </div>
                    </foreignObject>
                    <foreignObject x="642" y="35" width="130px" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <Typography sx={{ fontSize: '20pt', fontFamily: 'Times New Roman' }}>{nodes.node3} kW</Typography>
                        </div>
                    </foreignObject>
                </>
            }
            <foreignObject x="371" y="230" width="100px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex' }}>
                    <input
                        style={{ width: '40px', fontSize: '20pt', textAlign: 'center', fontFamily: 'Times New Roman' }}
                        name='B1'
                        value={formValues.B1}
                        onChange={onChange}
                        inputMode="decimal"
                    ></input>
                    <Typography sx={{ fontSize: '19pt', fontFamily: 'Times New Roman', paddingLeft: '10px' }}>kW</Typography>
                </div>
            </foreignObject>
            <foreignObject x="578" y="230" width="100px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex' }}>
                    <input
                        style={{ width: '40px', fontSize: '20pt', textAlign: 'center', fontFamily: 'Times New Roman' }}
                        name='B2'
                        value={formValues.B2}
                        onChange={onChange}
                        inputMode="decimal"
                        lang='en'
                    ></input>
                    <Typography sx={{ fontSize: '20pt', fontFamily: 'Times New Roman', paddingLeft: '10px' }}>kW</Typography>
                </div>
            </foreignObject>
            <foreignObject x="783" y="230" width="100px" height="40">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex' }}>
                    <input
                        style={{ width: `40px`, fontSize: '20pt', textAlign: 'center', fontFamily: 'Times New Roman' }}
                        name='B3'
                        value={formValues.B3}
                        onChange={onChange}
                        inputMode="decimal"
                    >
                    </input>
                    <Typography sx={{ fontSize: '20pt', fontFamily: 'Times New Roman', paddingLeft: '10px' }}>kW</Typography>
                </div>
            </foreignObject>
        </svg>
    );
};