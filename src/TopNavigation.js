/**
 * TopNavigation Component
 *
 * A responsive navigation bar for the KRL Media website. It features a logo, a horizontal menu on larger screens,
 * and a collapsible drawer for mobile devices. The component allows users to navigate between different sections
 * by selecting items from the menu or drawer.
 *
 * - **Features**:
 *   - Logo displayed on the left with navigation options.
 *   - Horizontal navigation bar for larger screens and vertical drawer for mobile screens.
 *   - Animated hover effect for buttons.
 *   - Drawer with list items for navigation on mobile.
 *
 * - **State Management**:
 *   - `mobileOpen`: Controls the visibility of the mobile drawer.
 *   - `setSelectedSection`: Callback to handle section selection, updating the current view based on the selected item.
 *
 * - **Responsive Design**:
 *   - Menu adapts between a top bar and a collapsible side drawer depending on screen size.
 */

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
import logo from "./assets/logo.png";

const drawerWidth = 240;
const navItems = [
  "Images",
  "Videos",
  "Digital Art",
  "About",
  "News",
  "Contact",
];

function TopNavigation({ setSelectedSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSectionSelect = (section) => {
    section = section.toLowerCase();
    setSelectedSection(section);
  };

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
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => handleSectionSelect(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="header" sx={{ flexShrink: 0 }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#314353" }}
        position="static"
      >
        <Toolbar
          sx={{
            flexDirection: {
              xs: "row",
              sm: "row-reverse",
              md: "column-reverse",
            },
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
              width: { xs: "3rem", sm: "5rem", md: "7rem" },
              margin: { xs: "1rem", md: "0rem" },
              marginBottom: { md: "1rem" },
            }}
          />
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
                  fontSize: { md: "1.4rem" },
                  transition: "0.2s ease-in-out",
                  textAlign: "center",
                  ":hover": {
                    fontSize: "large",
                    transition: "0.2s ease-in-out",
                  },
                }}
                onClick={() => handleSectionSelect(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
    </Box>
  );
}

export default TopNavigation;
