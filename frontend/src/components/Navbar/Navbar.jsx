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
import UserProfileComponent from "../UserProfileComponent/UserProfileComponent";
import { useCookies } from "react-cookie";
import LogInPopUp from "../LogInPopUp/LogInPopUp";
import Logo from "../../assets/Logo.png";
import LogoInverted from "../../assets/LogoInverted.PNG";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../ColorThemeAppProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import axios from "axios";

const settings = ["Min profil", "Logg ut"];

const Navbar = ({onAuthFail}) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileShow, setProfileShow] = React.useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [loggedInUserId, setLoggedInUserId] = React.useState("");
  const [profileImage, setProfileImage] = React.useState("");
  const [userLoggedIn, setUserLoggedIn] = React.useState(cookie.userId != null);
  const [loginShow, setLoginShow] = React.useState(false);

  const getUser = async () => {
      await axios
      .get(`/users/${cookie.userId}`)
      .then((res) => {
        setProfileImage(res.data.image);
      })
      .catch((err) => {
    console.log(err)
    })
  }
  React.useEffect(() => {
    getUser();
  }, []);

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
  };

  const handleLogin = () => {
    setLoginShow(true);
    setAnchorElUser(null);
  };

  const handleLogInComplete = (user) => {
    setUserLoggedIn(true);
    setCookie("userId", user.userId);
    setLoginShow(false);
    window.location.reload(false);
  };

  const handleLogOut = () => {
    removeCookie("userId");
    setUserLoggedIn(false);
    setProfileShow(false);
    window.location.reload(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "navbar.main" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                {theme.palette.mode === "dark" ? (
                  <img src={LogoInverted} height="45px" />
                ) : (
                  <img src={Logo} height="45px" />
                )}
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
                    <Typography
                      textAlign="center"
                      style={{ color: "darkgray" }}
                    >
                      Hjem
                    </Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="/my-recipes/" style={{ textDecoration: "none" }}>
                  <MenuItem key="2" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      style={{ color: "darkgray" }}
                    >
                      Mine oppskrifter
                    </Typography>
                  </MenuItem>
                </NavLink>
                {/* <NavLink to="/my-favorites/" style={{ textDecoration: "none" }}>
                <MenuItem key="3" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: "darkgray" }}>
                    Mine favoritter
                  </Typography>
                </MenuItem>
              </NavLink> */}
                <NavLink
                  to="/saved-recipes/"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key="4" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      style={{ color: "darkgray" }}
                    >
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
                {theme.palette.mode === "dark" ? (
                  <img src={LogoInverted} height="35px" />
                ) : (
                  <img src={Logo} height="35px" />
                )}
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
              {/* <NavLink to="/my-favorites/" style={{ textDecoration: "none" }}>
              <Button
                key="3"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "darkgrey", display: "block" }}
              >
                Mine favoritter
              </Button>
            </NavLink> */}
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
            <Box>
              <IconButton
                style={{ marginRight: "0.5em" }}
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon color="action" />
                )}
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profileImage} />
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
                {userLoggedIn ? (
                  <MenuItem
                    display={{ profileItem: "none" }}
                    key={"Min Profil"}
                    onClick={handleProfile}
                  >
                    <Typography textAlign="center">Min Profil</Typography>
                  </MenuItem>
                ) : null}
                {userLoggedIn ? (
                  <MenuItem key="Logg ut" onClick={handleLogOut}>
                    <Typography textAlign="center">Logg ut</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key="Logg inn" onClick={handleLogin}>
                    <Typography textAlign="center">Logg inn</Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <UserProfileComponent
          onLogOut={handleLogOut}
          onClose={() => setProfileShow(false)}
          show={profileShow}
          cookie={cookie}
          userId={cookie.userId}
        />
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
