import { Container, Typography, Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { Games } from "../Games";
import { GameContext } from "../../Context/gameContext";
import CartItems from "./CartItems";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, totalItems } = useContext(GameContext);
  const items = totalItems();
  const { isAuthenticated,loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h5">Your Cart Items</Typography>

      {Games.map((game) => {
        if (cartItems[game.id] !== 0) {
          return <CartItems key={game.id} data={game} />;
        }
      })}

      {items > 0 ? (
        <Button
          variant="outlined"
          onClick={() => {
            isAuthenticated ? navigate("/checkout") : loginWithRedirect();
          }}
        >
          Checkout
        </Button>
      ) : (
        <Typography>Cart is Empty</Typography>
      )}
    </Container>
  );
}

export default Cart;
