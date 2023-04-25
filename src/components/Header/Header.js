import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState(null)

    const openMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const closeMenu = () => {
        setMenu(null);
    };

    return (
        <Box>
            <AppBar sx={{ bgcolor: "#dedede" }} elevation={3}>
                <Toolbar>
                    <Box sx={{marginLeft: '-20px'}}>
                        <IconButton
                            size="large"
                            onClick={openMenu}
                        >
                            <MenuOutlinedIcon
                                sx={{ fontSize: '30px', color: 'black' }}
                            />
                        </IconButton>
                        <Menu
                            open={Boolean(menu)}
                            anchorEl={menu}
                            onClose={closeMenu}
                        >
                            <MenuItem><Typography variant="subtitle1">Power-Angle eqution</Typography></MenuItem>
                            <MenuItem><Typography variant="subtitle1">Rotor-Angle eqution</Typography></MenuItem>
                            
                        </Menu>
                    </Box>
                    <Typography variant="h5" sx={{ color: 'black' }}>Tasks</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}