import {
  Container,
  Box,
  Typography,
  ButtonGroup,
  Button,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import useStyles from "./styles";
import { GameContext } from "../../Context/gameContext";

function CartItems(props) {
  const { cartItems, removeFromCart, addToCart, totalItems } =
    useContext(GameContext);
  const { gameName, image, id } = props.data;
  const classes = useStyles();
  const items = totalItems();
  return (
    <Box className={classes.box}>
      <img className={classes.image} src={image} />
      <Typography fontWeight={"bold"}>{gameName}</Typography>
      <ButtonGroup>
        <Button onClick={() => removeFromCart(id)} variant="outlined">
          -
        </Button>
        <TextField
          InputProps={{
            readOnly: true,
            inputProps: {
              style: { textAlign: "center" },
            },
          }}
          value={cartItems[id]}
          className={classes.input}
        />
        <Button onClick={() => addToCart(id)} variant="outlined">
          +
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default CartItems;
