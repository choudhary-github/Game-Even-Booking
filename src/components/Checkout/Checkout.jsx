import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import Form from "./Form";

function Checkout() {
  const { user } = useAuth0();
  return (
    <div>
      <Typography variant="h5" sx={{ textTransform: "capitalize", marginBottom:3 }}>
        Hi, {user?.nickname}
      </Typography>
      <Form />
    </div>
  );
}

export default Checkout;
