import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./style.js";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography style={{cursor:'pointer'}} onClick={() => navigate("/")} variant="h4">
        Game Booking
      </Typography>
      <Box>
        {isAuthenticated ? (
          <Button variant="outlined" onClick={() => logout()}>
            Logout
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        )}
        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Navbar;
