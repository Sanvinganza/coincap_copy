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

export const Briefcase = ({ open, handleOpenBriefcase }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleOpenBriefcase}>
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
          <Button onClick={handleOpenBriefcase}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};