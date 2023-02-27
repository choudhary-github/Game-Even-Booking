import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  button:{
    fontWeight:'bold'
  },
  container:{
    display:'Grid !important',
    gridTemplateColumns:`repeat(2,1fr)`,
    // columnGap:
  }
}));
