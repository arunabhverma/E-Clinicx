/* eslint-disable react/prop-types */
import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { Stack, TextareaAutosize, TextField } from '@mui/material'
import { CFormTextarea } from '@coreui/react'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

const CustomizedDialogs = ({ isOpen, onClose, onDone }) => {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  })

  React.useEffect(() => {
    setState((prev) => ({ ...prev, ...isOpen }))
  }, [isOpen])

  return (
    <div>
      <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={!!isOpen}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {isOpen.title}
        </BootstrapDialogTitle>
        <DialogContent>
          <Stack>
            <p className="fs-6">Name</p>
            <input
              value={state.name}
              onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
              type="text"
              className="form-control"
              style={{ minWidth: 400 }}
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <br />
            <p className="fs-6">Description</p>
            <textarea
              value={state.description}
              onChange={(e) => setState((prev) => ({ ...prev, description: e.target.value }))}
              type="text"
              rows={5}
              className="form-control"
              style={{ minWidth: 400 }}
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => onDone(isOpen.title, state)}>
            {isOpen.footer || 'Save changes'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default CustomizedDialogs
