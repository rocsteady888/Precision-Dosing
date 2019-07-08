import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

let id = 0;
function createData(age, sex, race, bmi, leanMass) {
  id += 1;
  return { id, age, sex, race, bmi, leanMass };
}

const rows = [
  createData('Age', '87', '66'),
  createData('Sex', 'M', 'F'),
  createData('Race', 'white', 'white'),
  createData('BMI', '39.1', '30.9'),
  createData('Lean Body Mass', '140', 'unknown'),
];

export default function DemographicFactors() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Demographic</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Phase 3 Clincal Trial Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.race}</TableCell>
              <TableCell>{row.bmi}</TableCell>
              <TableCell>{row.leanMass}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}