import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
const PayTable = ({ coinMap }) => {
  console.log(coinMap);
  console.log("pay table")
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableBody>
          {Array.from(coinMap.keys()).map((name) => (
            <TableRow>
              <TableCell>{name}</TableCell>
              {coinMap.get(name).map((coinVal, idx) => (
                idx != 4 ?
                <TableCell>{coinVal}</TableCell>
                :
                <TableCell style={{backgroundColor: 'red'}}> {coinVal} </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PayTable;
