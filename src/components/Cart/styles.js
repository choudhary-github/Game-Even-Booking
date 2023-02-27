import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  box: {
    border: "2px solid red",
    maxWidth: 550,
    maxHeight: 200,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "2em 0",
  },
  image: {
    marginRight: 60,
    // display:'block',
    maxWidth: 150,
    maxHeight: 150,
  },
  input: {
    maxWidth: 70,
  },
}));
