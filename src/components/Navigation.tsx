import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ThemeToggle from "./ThemeToggle";

const drawerWidth = 240;

const navItems = [
  { label: "Home", to: "/", active: (p: string, h: string) => p === "/" },
  { label: "About", to: "/about", active: (p: string, h: string) => p === "/about" },
  { label: "Projects", to: "/projects", active: (p: string, h: string) => p === "/projects" },
  { label: "Writings", to: "/writings", active: (p: string, h: string) => p === "/writings" }
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) setScrolled(window.scrollY > navbar.clientHeight);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavClick = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => {
          const isActive = item.active(location.pathname, location.hash);
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="button"
                onClick={() => onNavClick(item.to)}
                sx={{
                  textAlign: "center",
                  color: isActive ? "var(--brand)" : "var(--ink-strong)",
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}>
        <Toolbar className="navigation-bar">
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Left side content (you can put your logo/name here) */}
          <ThemeToggle />

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const isActive = item.active(location.pathname, location.hash);
              return (
                <Button
                  key={item.label}
                  component={NavLink}
                  to={item.to}
                  sx={{
                    // use theme vars instead of hard-coded white
                    color: isActive ? "var(--brand)" : "var(--ink-strong)",
                    fontWeight: isActive ? 700 : 500,
                    "&:hover": { color: "var(--brand-hover)" },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, background: "var(--surface)" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
