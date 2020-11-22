import React, { useEffect, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import FORMS from "../../constants";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";

const AccountActivation = ({
  match: {
    params: { token },
  },
}) => {
  const [isExpired, setTokenStatus] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  // const user = useSelector(getUser());

  const user = null;

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token, false);
      if (decoded) {
        setTokenStatus(decoded.exp < new Date().getTime());

        fetchUserBeforeActivation(decoded.data);
      } else {
        dispatch(push(ROUTES_PATH.SIGN_IN));
      }
    } else {
      dispatch(push(ROUTES_PATH.SIGN_IN));
    }
  }, [token]);

  const fetchUserBeforeActivation = (id) => {};

  const handleSubmit = (data) => {};

  const changeFormField = () => {};

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/activation.svg"
        alt="Account activation"
      />
      <Typography variant="button">Account Activation</Typography>
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
            onClick={() => dispatch(push(ROUTES_PATH.SIGN_UP))}
          >
            Go To Registration page
          </Button>
        </>
      ) : null}

      {user && user.active ? (
        <>
          <Typography variant="body1" display="block" align="center">
            User already active
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
      ) : null}
      {user && user.active ? (
        <Formik
          initialValues={FORMS.ACTIVATION.INIT}
          enableReinitialize={true}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={FORMS.ACTIVATION.SCHEMA}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              errors,
              touched,
              values: { first_name, last_name },
              handleChange,
            } = props;
            return (
              <Form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    variant="outlined"
                    helperText={touched.first_name ? errors.first_name : ""}
                    error={touched.first_name && Boolean(errors.first_name)}
                    value={first_name}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    variant="outlined"
                    helperText={touched.last_name ? errors.last_name : ""}
                    error={touched.last_name && Boolean(errors.last_name)}
                    value={last_name}
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
                  Activate Account
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
      ) : null}
    </>
  );
};

export default AccountActivation;
