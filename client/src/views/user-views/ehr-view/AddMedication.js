import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DosingGuidance from './DosageGuidance';

export default function FilledTextFields() {
  const [showDosing, setShowDosing] = React.useState(false);

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">
          Medication Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <Button color="primary" onClick={() => setShowDosing(!showDosing)}>
          Search
        </Button>
      </FormControl>
      {showDosing ? (
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
              <TableRow style={{backgroundColor: 'rgba(0,128,0, 0.3)'}}>
                <TableCell>20 mg</TableCell>
                <TableCell>tablet</TableCell>
                <TableCell>Taken Once Daily</TableCell>
                <TableCell>Oral</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <DosingGuidance />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
