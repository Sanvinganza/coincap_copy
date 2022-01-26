import * as React from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter, TablePagination } from "@mui/material";
import Schedule from "./Schedule";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import AddIcon from '@mui/icons-material/Add';
import { DialogAddCrypto } from "./DialogAddCrypto";

function createData(name, price, marketCap, volume, change) {
  return {
    name,
    price,
    marketCap,
    volume,
    change,
  };
}

const rows = [
  createData("Bitcoin", 159, "6.0", "24", "4.0"),
  createData("Ice cream sandwich", 237, "9.0", "37", "4.3"),
  createData("Eclair", 262, "16.0", "24", "6.0"),
  createData("Cupcake", 305, "3.7", "67", "4.3"),
  createData("Gingerbread", 356, 16.0,"49", "3.9", "1.5"),
  createData("Frozserdfgen yoghseardgurt", 159, "6.0", "24", "4.0"),
  createData("Ice cream sandwich", 237, "9.0", "37", "4.3"),
  createData("Eclair", 262, 16.0, "24", "6.0"),
  createData("Cupcake", 305, 3.7, "67", "4.3"),
  createData("Gingerbread", 356, "16.0", "49", "3.9"),
  createData("Bitcoin", 159, "6.0", "24", "4.0"),
  createData("Ice cream sandwich", 237, "9.0", "37", "4.3"),
  createData("Eclair", 262, "16.0", "24", "6.0"),
  createData("Cupcake", 305, "3.7", "67", "4.3"),
  createData("Gingerbread", 356, 16.0,"49", "3.9", "1.5"),
  createData("Frozserdfgen yoghseardgurt", 159, "6.0", "24", "4.0"),
  createData("Ice cream sandwich", 237, "9.0", "37", "4.3"),
  createData("Eclair", 262, 16.0, "24", "6.0"),
  createData("Cupcake", 305, 3.7, "67", "4.3"),
  createData("Gingerbread", 356, "16.0", "49", "3.9")
];

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    marketCap: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
  }).isRequired,
};

function Row(props) {
  const { row } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(!open)};

  const [openDialogAddCrypto, setOpenDialogAddCrypto] = React.useState(false);
  const handleOpenDialogAddCrypto = () => {setOpenDialogAddCrypto(!openDialogAddCrypto)};
  return (
    <>
      <DialogAddCrypto open={openDialogAddCrypto} handleOpenDialogAddCrypto={handleOpenDialogAddCrypto} />

      <TableRow>
        
        <TableCell>
          <IconButton size="small" 
            onClick={handleOpenDialogAddCrypto}
          >
          <AddIcon color="primary" /> 
          </IconButton>
        </TableCell>

        <TableCell onClick={handleOpen} scope="row">{row.name}</TableCell>
        <TableCell onClick={handleOpen} align="right">{row.price}</TableCell>
        <TableCell onClick={handleOpen} align="right">{row.marketCap}</TableCell>
        <TableCell onClick={handleOpen} align="right">{row.volume}</TableCell>
        <TableCell onClick={handleOpen} align="right">{row.change}</TableCell>

      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Schedule />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">

        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Marcet Cap</TableCell>
            <TableCell align="right">Volume(24hr)</TableCell>
            <TableCell align="right">Change(24hr)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <Row key={row.name} row={row} />
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      
      </Table>
    </TableContainer>
  );
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
