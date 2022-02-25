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

const settings = ["Min profil", "Logg ut"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileShow, setProfileShow] = React.useState(false);

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
            APPSKRIFT
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
            APPSKRIFT
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
               <MenuItem key={"Min Profil"} onClick={() => setProfileShow(true)}>
                  <Typography textAlign="center">Min Profil</Typography>
                </MenuItem>
                <MenuItem key={"Logg Ut"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logg Ut</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <UserProfileComponent onClose={() => setProfileShow(false)} show = {profileShow}/>
    </AppBar>
    </>
  );
};
export default Navbar;
