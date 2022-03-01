import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import UserProfileComponent from "../UserProfileComponent/UserProfileComponent"
import { useCookies } from "react-cookie";
import LogInPopUp from "../LogInPopUp/LogInPopUp";
import Logo from "../../assets/Logo.png";

const settings = ["Min profil", "Logg ut"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileShow, setProfileShow] = React.useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [userLoggedIn, setUserLoggedIn] = React.useState(cookie.userId != null);
  const [loginShow, setLoginShow] = React.useState(false);

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

  const handleProfile = () => {
    setProfileShow(true);
    setAnchorElUser(null);
  }


  const handleLogInComplete = () => {
    setUserLoggedIn(true);
    setLoginShow(false);
  };

  const handleLogOut = () => {
    removeCookie("userId");
    setUserLoggedIn(false);
  };

  return (
    <>
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ backgorundColor: "red" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "#A9A9A9",
            }}
          >
            {/*APPSKRIFT*/}
            <NavLink to="/">
              <img src={Logo} height="45px" />
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "darkgrey" }}
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
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <MenuItem
                  key="1"
                  onClick={handleCloseNavMenu}
                  style={{ textDecoration: "none" }}
                >
                  <Typography textAlign="center" style={{ color: "darkgray" }}>
                    Hjem
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/my-recipes/" style={{ textDecoration: "none" }}>
                <MenuItem key="2" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "darkgray" }}>
                    Mine oppskrifter
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/my-favorites/" style={{ textDecoration: "none" }}>
                <MenuItem key="3" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "darkgray" }}>
                    Mine favoritter
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/saved-recipes/" style={{ textDecoration: "none" }}>
                <MenuItem key="4" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "darkgray" }}>
                    Lagrede oppskrifter
                  </Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "darkgrey",
            }}
          >
            {/*APPSKRIFT*/}
            <NavLink to="/">
              <img src={Logo} height="35px" />
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button
                key="1"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "darkgrey", display: "block" }}
              >
                Hjem
              </Button>
            </NavLink>
            <NavLink to="/my-recipes/" style={{ textDecoration: "none" }}>
              <Button
                key="2"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "darkgrey", display: "block" }}
              >
                Mine oppskrifter
              </Button>
            </NavLink>
            <NavLink to="/my-favorites/" style={{ textDecoration: "none" }}>
              <Button
                key="3"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "darkgrey", display: "block" }}
              >
                Mine favoritter
              </Button>
            </NavLink>
            <NavLink to="/saved-recipes/" style={{ textDecoration: "none" }}>
              <Button
                key="4"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "darkgrey", display: "block" }}
              >
                Lagrede oppskrifter
              </Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
               <MenuItem key={"Min Profil"} onClick={handleProfile}>
                  <Typography textAlign="center">Min Profil</Typography>
                </MenuItem>
              {userLoggedIn ? (
                <MenuItem key="Logg ut" onClick={handleLogOut}>
                  <Typography textAlign="center">Logg ut</Typography>
                </MenuItem>
              ) : (
                <MenuItem key="Logg inn" onClick={() => setLoginShow(true)}>
                  <Typography textAlign="center">Logg inn</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <UserProfileComponent onLogout={onLogout} onClose={() => setProfileShow(false)} show = {profileShow}/>
      <LogInPopUp
        onSuccess={handleLogInComplete}
        onClose={() => setLoginShow(false)}
        show={loginShow}
      />
    </AppBar>
    </>
  );
};
export default Navbar;
