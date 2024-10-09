import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function FormDialog({ open, onClose, row }) {
  const [formData, setFormData] = useState({});
  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFormData(row);
  }, []);
  console.log(formData);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            onClose();
          },
        }}
      >
        <DialogTitle sx={{ minWidth: "500px" }}>Update Category</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              autoFocus
              required
              margin="dense"
              name="name"
              label="Tên"
              type="text"
              value={formData.name}
              onChange={(e) => onChangeFormData(e)}
              fullWidth
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="short_name"
              label="Tên ngắn"
              type="text"
              value={formData.short_name}
              fullWidth
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="order_num"
              label="Vị trí"
              type="text"
              value={formData.order_num}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
