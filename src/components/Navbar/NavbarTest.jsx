import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import images from "../../images/fila.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useAuth } from "../../contexts/AuthContexts";
import { navbarContext } from "../../contexts/NavabarContexts";
import { Input, InputAdornment } from "@mui/material";
import NavbarHover from "./NavbarHover";

const pages = ["New", "Shoes", "Men", "Women", "Tennis", "work", "WareHouse"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { setHover, searchState, setSearchState, hover } =
        React.useContext(navbarContext);
    const { email, handleLogout } = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const hoverNav = () => {
        setHover(true);
        setSearchState(false);
    };
    const openSearch = () => {
        setHover(false);
        setSearchState(!searchState);
    };

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            sx={{ width: "55px" }}
                            width="75"
                            src={images}
                            alt=""
                        />
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".6rem",
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            sx={{ width: "55px" }}
                            width="75"
                            src={images}
                            alt=""
                        />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                onMouseEnter={hoverNav}
                                sx={{
                                    my: 2,
                                    color: "black",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton
                                onClick={openSearch}
                                sx={{ p: 0, width: "40px" }}
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0, width: "40px" }}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0, width: "40px" }}>
                                <LocalMallIcon />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {email ? (
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                            ) : (
                                <Link to="/auth">
                                    <MenuItem onClick={handleLogout}>
                                        <Typography textAlign="center">
                                            login
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {searchState && (
                <Input
                    id="standard-adornment-amount"
                    sx={{
                        width: "90%",
                        margin: "auto",
                        marginBottom: "20px",
                        fontSize: "25px",
                    }}
                    placeholder="Search"
                    endAdornment={
                        <InputAdornment
                            sx={{ cursor: " pointer" }}
                            position="start"
                            onClick={() => setSearchState(false)}
                        >
                            X
                        </InputAdornment>
                    }
                />
            )}
            {hover && <NavbarHover />}
        </AppBar>
    );
}
export default Navbar;
