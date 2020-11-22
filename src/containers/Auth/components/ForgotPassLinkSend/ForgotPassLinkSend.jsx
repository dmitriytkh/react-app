import React from "react";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { ROUTES_PATH } from "../../../../router/constants";
import { useDispatch } from "react-redux";

const ForgotPassLinkSend = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/login.svg"
        alt="Password change request"
      />
      <Typography variant="button">Password change request</Typography>
      <Typography variant="body1" display="block" align="center">
        We sent an email with instruction for changing password
      </Typography>
      <Typography variant="subtitle2" display="block" align="center">
        Link will be active for 1 hour
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => dispatch(push(ROUTES_PATH.SIGN_IN))}
      >
        Go To Login page
      </Button>
    </>
  );
};

export default ForgotPassLinkSend;
