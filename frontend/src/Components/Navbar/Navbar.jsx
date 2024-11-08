import React, { useState } from "react";
import "./Navbar.css";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "category-popover" : undefined;

  return (
    <Box className="navbar-container">
      
      <Box className="navbar" sx={{ display: { xs: "none", md: "flex" } }}>
        <ul className="nav_menu">
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              HOME
            </Link>
          </li>
          <li onClick={handleShowMenu}>CATEGORY</li>
          {menu && <CategoryMenu onClose={handleCloseMenu} />}
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/news"
            >
              NEWS
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/aboutus"
            >
              ABOUT US
            </Link>
          </li>
        </ul>
      </Box>

      
      <IconButton
        sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          BackdropProps: {
            invisible: true,
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "120px",
            backgroundColor: "gray",
            "@media (min-width:600px)": {
              width: "200px",
            },
          },
        }}
      >
        <List>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText>
              <Link 
                to="/" 
                style={{ 
                  textDecoration: "none", 
                  color: "#fff",
                }}>
                HOME
              </Link>
            </ListItemText>
          </ListItem>
          <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
          <ListItem button onClick={handleClick}>
            <ListItemText sx={{ color: "#fff" }}>CATEGORY</ListItemText>
          </ListItem>
          <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText>
              <Link
                to="/news"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                NEWS
              </Link>
            </ListItemText>
          </ListItem>
          <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText>
              <Link
                to="/aboutus"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                ABOUT US
              </Link>
            </ListItemText>
          </ListItem>
          <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
        </List>

        
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            "& .MuiPaper-root": {
              width: "120px",
              backgroundColor: "gray",
              "@media (min-width:600px)": {
                width: "200px",
              },
            },
          }}
        >
          <List>
            <ListItem
              button
              onClick={() => {
                handleClosePopover();
                handleDrawerToggle();
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/coffee"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary="Coffee" sx={{ color: "#fff" }} />
              </Link>
              <ListItemIcon>
                <ChevronRightIcon sx={{ color: "#fff", ml: {sm: 4, xs: 2} }} />
              </ListItemIcon>
            </ListItem>
            <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
            <ListItem
              button
              onClick={() => {
                handleClosePopover();
                handleDrawerToggle();
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/tea"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary="Tea" sx={{ color: "#fff" }} />
              </Link>
              <ListItemIcon>
                <ChevronRightIcon sx={{ color: "#fff", ml: 4 }} />
              </ListItemIcon>
            </ListItem>
            <Divider
            sx={{ height: 2, backgroundColor: "#fff", ml: 1, width: "90%" }}
          />
            <ListItem
              button
              onClick={() => {
                handleClosePopover();
                handleDrawerToggle();
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/seed"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary="Seed" sx={{ color: "#fff" }} />
              </Link>
              <ListItemIcon>
                <ChevronRightIcon sx={{ color: "#fff", ml: {sm: 4, xs: 3} }} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Popover>
      </Drawer>
    </Box>
  );
};

export default Navbar;
