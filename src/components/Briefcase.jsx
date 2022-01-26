import {
  Dialog,
  DialogTitle,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React from "react";
import "../index.scss";
import { Row, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";

const rows = [
  createData("Bitcoin", 12355, 2.38, 1.80),
  createData("Ice cream sandwich", 5522, 2.38, 1.80),
  createData("Eclair", 5634, 2.38, 1.80),
  createData("Gingerbread", 23466, 2.38, 1.80),
];

function createData(name, price, volume, change) {
  return {
    name,
    price,
    volume,
    change,
  };
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
  }).isRequired,
};

export const Briefcase = ({ open, handleOpenBriefcase }) => {
  return (
    <div>
      <Dialog size="lg" open={open} onClose={handleOpenBriefcase}>
        <DialogTitle>Briefcase</DialogTitle>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Volume(24hr)</TableCell>
                <TableCell align="right">Change(24hr)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              
              {rows.map((row) => (
                <TableRow>
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell align="row">{row.price} USD</TableCell>
                  <TableCell align="row"> + {row.volume}</TableCell>
                  <TableCell align="row">({row.change})%</TableCell>
                  <IconButton size="small" > 
                    <DeleteIcon />
                  </IconButton>
                </TableRow>
              ))}
            
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={handleOpenBriefcase}>Close</Button>
      </Dialog>
    </div>
  );
};
