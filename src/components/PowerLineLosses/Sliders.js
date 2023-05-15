import { Slider, Box, Typography } from "@mui/material"
import { useForm } from '../../hooks/useForm'

export default function Sliders({ radioValue }) {

    const { formValues, onChange } = useForm({
        P: Number(0),
        Q: Number(0),
        Lw: Number(1)
    });

    return (
        <Box>
            <Typography sx={{ fontSize: '20px' }}>
                <span style={{ fontFamily: 'KaTeX_Main', fontStyle: 'italic' }}>P </span>
                <span>[kW]</span>
            </Typography>
            <Box>
                <Slider
                    name="P"
                    value={formValues?.P}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={-100}
                    max={100}
                    step={2}
                    disabled={radioValue === 'P' || radioValue === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box sx={{ paddingTop: '10px' }}>
                <Typography sx={{ fontSize: '20px' }}>
                    <span style={{ fontFamily: 'KaTeX_Main', fontStyle: 'italic' }}>Q </span>
                    <span>[kVAr]</span>
                </Typography>
                <Slider
                    name="Q"
                    value={formValues?.Q}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={-100}
                    max={100}
                    step={2}
                    disabled={radioValue === 'Q' || radioValue === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box sx={{ paddingTop: '10px' }}>
                <Typography sx={{ fontSize: '20px' }}>Дължина [m]</Typography>
                <Slider
                    name="Lw"
                    value={formValues?.Lw}
                    onChange={onChange}
                    valueLabelDisplay="on"
                    min={10}
                    max={1000}
                    step={10}
                    disabled={radioValue === 'Lw' || radioValue === 'all' ? false : true}
                    sx={{ width: '200px' }}
                />
            </Box>
        </Box>
    );
};