import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function FilledTextFields() {

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dose</TableCell>
            <TableCell>Form</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Route</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>2.5 mg</TableCell>
            <TableCell>tablet</TableCell>
            <TableCell>Taken Once Daily</TableCell>
            <TableCell>Oral</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5 mg</TableCell>
            <TableCell>tablet</TableCell>
            <TableCell>Taken Once Daily</TableCell>
            <TableCell>Oral</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10 mg</TableCell>
            <TableCell>tablet</TableCell>
            <TableCell>Taken Once Daily</TableCell>
            <TableCell>Oral</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>15 mg</TableCell>
            <TableCell>tablet</TableCell>
            <TableCell>Taken Once Daily</TableCell>
            <TableCell>Oral</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: 'rgba(0,128,0, 0.3)' }}>
            <TableCell>20 mg</TableCell>
            <TableCell>tablet</TableCell>
            <TableCell>Taken Once Daily</TableCell>
            <TableCell>Oral</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
