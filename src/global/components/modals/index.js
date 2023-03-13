/* eslint-disable react/prop-types */
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function AlertDialog({
  isOpen,
  onClose,
  title,
  message,
  firstButtonText,
  secondButtonText,
  onDone,
}) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{firstButtonText}</Button>
          <Button onClick={onDone} autoFocus>
            {secondButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
