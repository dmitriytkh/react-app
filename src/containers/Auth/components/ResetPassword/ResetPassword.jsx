import React, { useEffect, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import FORMS from "../../constants";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

const ResetPassword = ({
  match: {
    params: { token },
  },
}) => {
  const [isExpired, setTokenStatus] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token, false);
      if (decoded) {
        setTokenStatus(decoded.exp < new Date().getTime());
      } else {
        dispatch(push(ROUTES_PATH.SIGN_IN));
      }
    } else {
      dispatch(push(ROUTES_PATH.SIGN_IN));
    }
  }, [token]);
  const handleSubmit = (data) => {};

  const changeFormField = () => {};

  return (
    <>
      <img className={classes.icon} src="/assets/icons/reset.svg" alt="Reset" />
      <Typography variant="button">Reset Password</Typography>
      {isExpired ? (
        <>
          <Typography variant="body1" display="block" align="center">
            Link for change password is expired
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => dispatch(push(ROUTES_PATH.FORGOT))}
          >
            Go To Forgot Password page
          </Button>
        </>
      ) : (
        <Formik
          initialValues={FORMS.RESET.INIT}
          enableReinitialize={true}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={FORMS.RESET.SCHEMA}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              errors,
              touched,
              values: { password, confirmationPassword },
              handleChange,
            } = props;
            return (
              <Form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    value={password}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="confirmationPassword"
                    name="confirmationPassword"
                    label="confirmationPassword"
                    variant="outlined"
                    helperText={
                      touched.confirmationPassword
                        ? errors.confirmationPassword
                        : ""
                    }
                    error={
                      touched.confirmationPassword &&
                      Boolean(errors.confirmationPassword)
                    }
                    value={confirmationPassword}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Reset Password
                </Button>
                <div className={classes.actions}>
                  <Link className={classes.link} to={ROUTES_PATH.SIGN_IN}>
                    <Typography variant="caption" color="primary">
                      Back to Login page
                    </Typography>
                  </Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default ResetPassword;
