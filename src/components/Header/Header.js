import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from "react";
import { FirstPage } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function Header() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setDrawerOpen(false);
    }, [location]);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false)
    };

    return (
        <Box>
            <AppBar sx={{ bgcolor: "#F5F5F5", position: 'sticky' }} elevation={9}>
                <Toolbar>
                    <Box sx={{ marginLeft: '-20px' }}>
                        <IconButton
                            size="large"
                            onClick={toggleDrawer}
                        >
                            <MenuOutlinedIcon
                                sx={{ fontSize: '30px', color: 'black' }}
                            />
                        </IconButton>
                    </Box>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Typography variant="h5" sx={{ color: 'black' }}>Задачи</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer}>
                <div style={{ borderBottom: '1px solid #186092', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FirstPage sx={{ color: '#186092', fontSize: '60px', height: '100%' }} onClick={closeDrawer} />
                    <img src="https://ee.tu-varna.bg/wp-content/uploads/2020/03/Logo_Colour_TUV.png" style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto' }} alt="" />
                </div>
                <List>
                    <div style={{ borderBottom: '1px solid #186092' }}>
                        <Typography variant="h5">Устойчивост на ЕЕС</Typography>
                        <Link to="/power-angle" style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Ъглови характеристики на активна и реактивна мощност</Typography>
                            </ListItem>
                        </Link>
                        <Link to={'/rotor-angle'} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Устойчивост по роторен ъгъл при малки смущения</Typography>
                            </ListItem>
                        </Link>
                    </div>
                    <div style={{ borderBottom: '1px solid #186092' }}>
                        <Typography variant="h5">Ел. мрежи и системи</Typography>
                        <Link to={"/power-line-losses"} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Загуби на напрежение в надлъжен елемент</Typography>
                            </ListItem>
                        </Link>
                        <Link to={"/transformer-losses"} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Загуби на мощност в силов трансформатор</Typography>
                            </ListItem>
                        </Link>
                        <Link to={"/kirchhoff"} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Просто потокоразпределение</Typography>
                            </ListItem>
                        </Link>
                    </div>
                    <div style={{ borderBottom: '1px solid #186092' }}>
                    <Typography variant="h5">Ел. част на централи и подстанции</Typography>
                        <Link to={"/em-force"} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                                <Typography sx={{ fontSize: '18px' }}>Електромагнитна сила и напр. на огъване на правоъг. шини</Typography>
                            </ListItem>
                        </Link>
                    </div>
                </List>
            </Drawer>
        </Box>
    );
};