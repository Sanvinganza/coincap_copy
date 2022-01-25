import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "11AM",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "11AM",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "11AM",
    uv: 2000,
    pv: 9800,    amt: 2290,
  },
  {
    name: "11AM",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "11AM",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "11AM",
    uv: 2390,
    amt: 2500,
  },
  {
    name: "11AM",
    uv: 3490,
    amt: 2100,
  },
];

export default function Schedule() {
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("High", "$2546.81"),
    createData("Low", "$2175.12"),
    createData("Average", "$2345.12"),
    createData("Change", "%0.80"),
  ];

  return (
    <div style={{ display: "flex" }}>
      <TableContainer style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Table sx={{ minWidth: 450 }} aria-label="caption table">
          <TableBody>
            {rows.map((row) => (
              <>
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
