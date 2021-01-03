import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: "bold",
    backgroundColor: "#f2dede",
    color: "#333",
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    border: "2px solid #e3e3e3",
  },
});

export default function SecondTable({ rows, type }) {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className={classes.tableContainer}
    >
      <Table
        className={classes.table}
        size="small"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Subno(sem-{type.slice(-1)})</StyledTableCell>
            <StyledTableCell align="left">Subject Name</StyledTableCell>
            <StyledTableCell align="left">Sub. Type</StyledTableCell>
            <StyledTableCell align="left">L-T-P</StyledTableCell>
            <StyledTableCell align="left">Credit</StyledTableCell>
            <StyledTableCell align="left">Reg. Sem.</StyledTableCell>
            <StyledTableCell align="left">Registered Session.</StyledTableCell>
            <StyledTableCell align="left">Grade</StyledTableCell>
            <StyledTableCell align="left">Subject Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.a}
              </StyledTableCell>
              <StyledTableCell align="left">{row.b}</StyledTableCell>
              <StyledTableCell align="left">{row.c}</StyledTableCell>
              <StyledTableCell align="left">{row.d}</StyledTableCell>
              <StyledTableCell align="left">{row.e}</StyledTableCell>
              <StyledTableCell align="left">{row.f}</StyledTableCell>
              <StyledTableCell align="left">{row.g}</StyledTableCell>
              <StyledTableCell align="left">{row.h}</StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {type !== "Semester 10" && (
                  <CheckCircleIcon style={{ color: "#3c763d" }} />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
