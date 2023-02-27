import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  main: {
    width: 350,
    height: 330,
    borderBottom: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingBottom: 10,
  },
  gameImage: {
    maxHeight: 250,
    maxWidth: 300,
    minHeight: "300",
  }
}));
