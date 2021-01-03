import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const listOfCaptcha = ["28XD35", "6264F7", "62473U"];

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #d6e9c6",
    borderRadius: 3,
  },
  login: {
    background: "#dff0d8",
    color: "#3c763d",
    padding: "10px 15px",
    borderBottom: "1px solid transparent",
    height: 56,
    display: "flex",
    alignItems: "center",
  },
  content: {
    padding: 15,
  },
  texts: {
    marginBottom: theme.spacing(2),
  },
  weight: {
    fontWeight: 550,
  },
  bottom: {
    display: "flex",
  },
  last: {
    flex: 1,
  },
  footer: {
    background: '#f5f5f5',
    borderTop: '1px solid #ddd',
    padding: '10px 15px',
    marginTop: theme.spacing(3)
  }
}));
const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [captcha] = useState(() => Math.floor(Math.random() * 3));

  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");
  const [cap, setCap] = useState("");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (
      roll === "16PH20024" &&
      dob === "1997-10-07" &&
      cap === listOfCaptcha[captcha]
    ) {
      history.push("/student");
    } else setOpen(true);
  };

  return (
    <div>
      <img src="iit.png" alt="header" width="100%" />
      <Container maxWidth="md">
        <div className={classes.root}>
          <div className={classes.login}>
            <Typography variant="h5" className={classes.weight}>
              Login
            </Typography>
          </div>
          <div className={classes.content}>
            <div className={classes.texts}>
              <Typography variant="subtitle2">Rollno:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                required
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>
            <div className={classes.texts}>
              <Typography variant="subtitle2" className={classes.weight}>
                Date of Birth (dd-mm-yyy):
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                required
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className={classes.bottom}>
              <img
                style={{ marginLeft: 16, marginRight: 16 }}
                src={`captcha/cap${captcha + 1}.jpeg`}
                alt="captcha"
                width={250}
              ></img>
              <div className={classes.last}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  required
                  value={cap}
                  placeholder="Enter the Captcha text"
                  onChange={(e) => setCap(e.target.value)}
                />
                <Button
                  variant="contained"
                  style={{ marginTop: 8, background: "#286090", color: "#fff" }}
                  onClick={handleClick}
                  className={classes.button}
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={classes.footer}>
        <footer>
              <Typography variant='body2'>Copyright © ERP Systems, IIT Kharagpur</Typography>
        </footer>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Invalid Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter correct data
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Close
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
