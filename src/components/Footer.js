import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <Box sx={{ mx: 'auto' }}>
                <BottomNavigation sx={{ bgcolor: "#dedede" }} showLabels>
                    <BottomNavigationAction
                        sx={{ color: "black" }}
                        label="Created by Petar"
                        icon={<GitHubIcon />}
                        component="a"
                        href="https://github.com/PetarPanajotov"
                        target="_blank"
                    />
                </BottomNavigation>
            </Box>
        </Box>
    );
}