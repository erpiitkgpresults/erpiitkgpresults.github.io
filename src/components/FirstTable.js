import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: "bold",
    backgroundColor: "#d9edf7",
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
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

export default function FirstTable({ rows, type }) {
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
            <StyledTableCell>Subjects Count (Semno - {type.slice(-1)})</StyledTableCell>
            <StyledTableCell align="left">Depth</StyledTableCell>
            <StyledTableCell align="left">Elective</StyledTableCell>
            <StyledTableCell align="left">Breadth</StyledTableCell>
            <StyledTableCell align="left">HSS</StyledTableCell>
            <StyledTableCell align="left">IEM</StyledTableCell>
            <StyledTableCell align="left">Cumulative Total</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
