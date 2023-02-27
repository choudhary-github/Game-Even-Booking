import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import useStyles from "./style";
import { GameContext } from "../../Context/gameContext";

export function Game(props) {
  const { gameName, image, id } = props.data;
  const { addToCart } = useContext(GameContext);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.main}>
        <img className={classes.gameImage} src={image} alt="" />
        <Typography className={classes.gameName}>{gameName}</Typography>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => addToCart(id)}
        >
          Add to cart
        </Button>
      </Box>
    </>
  );
}
