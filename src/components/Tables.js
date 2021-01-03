import {
  Divider,
  makeStyles,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getData } from "../utils/getData";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import ThirdTable from "./ThirdTable";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#f5f5f5",
    minHeight: 20,
    marginBottom: theme.spacing(2.5),
    border: "1px solid #e3e3e3",
    borderRadius: theme.spacing(0.5),
    padding: 19,
  },
  topBar: {
    padding: "10px 15px",
    height: 72,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: theme.spacing(3),
    border: "1px solid #ddd",
  },
  bottomDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: 308,
  },
  listItem: {
    width: 278,
    height: 21,
    padding: "10px 15px",
    border: "1px solid #ddd",
    "&:focus": {
      background: "#333",
    },
    "&:selected": {
      background: "#333",
    },
  },
  mainContent: {
    padding: "10px 15px",
    border: "1px solid #ddd",
  },
  division: {
    width: 1450,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  firstTableDiv: {
    background: "#f5f5f5",
    minHeight: 72,
    border: "1px solid #e3e3e3",
    borderRadius: theme.spacing(0.5),
    padding: 9,
    marginTop: theme.spacing(2),
  },
  links: {
    textDecoration: "none",
  },
  menuItem: {
    padding: 0,
  },
}));

const Tables = ({ type }) => {
  const classes = useStyles();
  const history = useHistory();

  const listItems = [
    { label: "Curr. and Perf. Semno 1", route: "/sem-1" },
    { label: "Curr. and Perf. Semno 2", route: "/sem-2" },
    { label: "Curr. and Perf. Semno 3", route: "/sem-3" },
    { label: "Curr. and Perf. Semno 4", route: "/sem-4" },
    { label: "Curr. and Perf. Semno 5", route: "/sem-5" },
    { label: "Curr. and Perf. Semno 6", route: "/sem-6" },
    { label: "Curr. and Perf. Semno 7", route: "/sem-7" },
    { label: "Curr. and Perf. Semno 8", route: "/sem-8" },
    { label: "Curr. and Perf. Semno 9", route: "/sem-9" },
    { label: "Curr. and Perf. Semno 10", route: "/sem-10" },
  ];

  const { rowsForTableOne, rowsForTableTwo, rowsForTableThree } = getData(type);

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.topBar}>
        <Typography>Student Performance of 16PH20024</Typography>
        <Divider />
      </Paper>
      <div className={classes.bottomDiv}>
        <div>
          <Paper elevation={0} className={classes.sidebar}>
            {listItems.map((item, index) => (
              <MenuItem className={classes.menuItem}>
                <Paper
                  key={index}
                  elevation={0}
                  className={classes.listItem}
                  style={{
                    background:
                      history.location.pathname === item.route && "#337ab7",
                  }}
                >
                  <Link
                    className={classes.links}
                    to={item.route}
                    style={{
                      color:
                        history.location.pathname === item.route
                          ? "white"
                          : "black",
                    }}
                  >
                    <Typography variant="body2">{item.label}</Typography>
                  </Link>
                </Paper>
              </MenuItem>
            ))}
          </Paper>
        </div>
        {type && (
          <div>
            <Paper elevation={0} className={classes.mainContent}>
              <div className={classes.division}>
                <Typography>
                  Curricula and Performance Details of {type}
                </Typography>
                <Divider />
                <Paper elevation={0} className={classes.firstTableDiv}>
                  <FirstTable rows={rowsForTableOne} type={type} />
                </Paper>
                <Paper elevation={0} className={classes.firstTableDiv}>
                  <SecondTable rows={rowsForTableTwo} type={type} />
                </Paper>
                <Paper elevation={0} className={classes.firstTableDiv}>
                  <ThirdTable rows={rowsForTableThree} type={type} />
                </Paper>
              </div>
            </Paper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tables;
