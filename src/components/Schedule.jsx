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
    name: "11PM",
    uv: "4000",
  },
  {
    name: "1AM",
    uv: "3000",
  },
  {
    name: "3AM",
    uv: "2000",
  },
  {
    name: "5AM",
    uv: "2780",
  },
  {
    name: "7AM",
    uv: "1890",
  },
  {
    name: "9AM",
    uv: "2390",
  },
  {
    name: "11AM",
    uv: "3490",
  },
  {
    name: "1PM",
    uv: "3490",
  },
  {
    name: "3PM",
    uv: "4000",
  },
  {
    name: "5AM",
    uv: "3000",
  },
  {
    name: "7AM",
    uv: "2000",  
  },
  {
    name: "9AM",
    uv: "2780",
  },
  {
    name: "11AM",
    uv: "1890",
  },
  {
    name: "1PM",
    uv: "2390",
  },
  {
    name: "3PM",
    uv: "3490",
  },
  {
    name: "5PM",
    uv: "3490",
  },
  {
    name: "7PM",
    uv: "2000",
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
