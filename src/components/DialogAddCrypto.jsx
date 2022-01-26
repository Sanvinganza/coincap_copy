import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React from "react";
import '../index.scss';

export const DialogAddCrypto = ({ open, handleOpenDialogAddCrypto }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleOpenDialogAddCrypto}>
        <DialogTitle >{"Coin Name"}</DialogTitle>
        <DialogContent>
          <TextField
            type="number"
          />
          <DialogContentText display="flex" justifyContent="center" padding="15px 0 0 0">
            {"134,32 USD"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenDialogAddCrypto}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};