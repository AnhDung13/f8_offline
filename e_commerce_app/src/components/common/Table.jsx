import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ columns, rows, maxWidth, onUpdate, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <MUITable
        sx={{ maxWidth: maxWidth, margin: "0 auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.value}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.id}
              >
                {columns.map((column) => {
                  if (column.value === "action") {
                    return (
                      <TableCell key={`${row.id}-${column.value}`}>
                        <Button onClick={() => onUpdate(row)}>
                          <EditIcon />
                        </Button>
                        <Button color="error" onClick={() => onDelete(row.id)}>
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={`${row.id}-${column.value}`}>
                      {row[column.value]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
