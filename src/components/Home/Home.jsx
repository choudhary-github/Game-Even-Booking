import { Container } from "@mui/material";
import useStyles from "./style";
import { Games } from "../Games";
import { Game } from "../Game/Game";

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {Games.map((game) => (
        <Game key={game.id} data={game} />
      ))}
    </Container>
  );
}

export default Home;
