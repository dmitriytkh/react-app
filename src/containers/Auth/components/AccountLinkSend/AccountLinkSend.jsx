import React from "react";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { ROUTES_PATH } from "../../../../router/constants";
import { useDispatch } from "react-redux";

const AccountLinkSend = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/login.svg"
        alt="Account created successfully"
      />
      <Typography variant="button">Account created successfully</Typography>
      <Typography variant="body1" display="block" align="center">
        We sent an email with instruction for activating account
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

export default AccountLinkSend;
