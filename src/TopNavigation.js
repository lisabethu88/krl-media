import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  ListItem,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./assets/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.webp";

const drawerWidth = 240;
const navItems = [
  "Graphic",
  "Websites",
  "Digital Media",
  "About",
  "News",
  "Contact",
];

function TopNavigation(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#314353" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        KRL MEDIA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#314353" }}>
        <Toolbar
          sx={{
            flexDirection: { xs: "row", sm: "column-reverse" },
            justifyContent: { xs: "space-between" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#fcf4e9" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src={logo}
            alt="KRL Media"
            sx={{
              width: { xs: "3rem", sm: "7rem" },
              margin: "10px",
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fcf4e9",
                  fontSize: "1.4rem",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            textTransform: "uppercase",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
              backgroundColor: "#314353",
              color: "#fcf4e9",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default TopNavigation;
