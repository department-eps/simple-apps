import { Slider, Box, Typography } from "@mui/material"
import React from "react";

export default function Sliders() {

    const U1options = [{
        value: 18,
        label: '18',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 22,
        label: '22',
    }];

    const S1options = [{
        value: 0,
        label: '0'
    },
    {
        value: 500,
        label: '500',
    },
    {
        value: 1000,
        label: '1000'
    }];

    const cosphioptions = [{
        value: 0,
        label: '0'
    },
    {
        value: 0.5,
        label: '0.5',
    },
    {
        value: 1,
        label: '1'
    }];

    return (
        <Box>
            <Typography variant='h5'>U1 [kV]</Typography>
            <Box>
                <Slider
                    valueLabelDisplay="on"
                    min={18}
                    max={22}
                    marks={U1options}
                    step={0.05}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box>
                <Typography variant='h5'>S1 [kVA]</Typography>
                <Slider
                    valueLabelDisplay="on"
                    min={0}
                    max={1000}
                    marks={S1options}
                    step={1}
                    sx={{ width: '200px' }}
                />
            </Box>
            <Box>
                <Typography variant='h5'>cosφ [ind]</Typography>
                <Slider
                    valueLabelDisplay="on"
                    min={0}
                    max={1}
                    marks={cosphioptions}
                    step={0.01}
                    sx={{ width: '200px' }}
                />
            </Box>
        </Box>
    );
};