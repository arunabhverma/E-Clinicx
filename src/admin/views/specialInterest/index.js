import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Box, Stack, IconButton, Button } from '@mui/material'
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid'
import {
  addSpecialInterestData,
  deleteSpecialInterestData,
  getSpecialInterestData,
  updateSpecialInterestData,
} from 'src/admin/redux/settings/slice'
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material'
import UpdateSpecialInterest from './updateSpecialInterest'
import DeleteModal from '../../../global/components/modals'
import '../../../global/scss/style.scss'

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}

const SpecialInterest = () => {
  const { specialInterests, specialInterestLoading } = useSelector(
    (state) => state.adminSettingReducer,
  )
  const dispatch = useDispatch()

  const [state, setState] = useState({
    deleteModal: null,
    updateSpecialInterest: null,
  })

  useEffect(() => {
    getSpecialInterestDataApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSpecialInterestDataApi = () => {
    dispatch(getSpecialInterestData())
  }

  const deleteRow = () => {
    dispatch(deleteSpecialInterestData(state.deleteModal))
    onCloseDeleteModal()
  }

  const onCloseDeleteModal = () => setState((prev) => ({ ...prev, deleteModal: null }))

  const onCloseUpdateSpecialInterest = () =>
    setState((prev) => ({ ...prev, updateSpecialInterest: null }))

  const openDeleteModal = (id) => {
    setState((prev) => ({ ...prev, deleteModal: id }))
  }

  const openAddSpecialInterestModal = () => {
    setState((prev) => ({
      ...prev,
      updateSpecialInterest: { title: 'Add Special Interest', footer: 'Add' },
    }))
  }

  const openEditSpecialInterestModal = (row) => {
    setState((prev) => ({
      ...prev,
      updateSpecialInterest: { title: 'Edit Special Interest', ...row.row },
    }))
  }

  const onDoneUpdateSpecialInterest = (title, data) => {
    let rest = { created_by: 0, created_by_id: 0, updated_by: 0, updated_by_id: 0 }
    onCloseUpdateSpecialInterest()
    switch (title) {
      case 'Add Special Interest': {
        dispatch(
          addSpecialInterestData({ name: data.name, description: data.description, ...rest }),
        )
        break
      }
      case 'Edit Special Interest': {
        dispatch(
          updateSpecialInterestData({
            id: data.id,
            data: {
              name: data.name,
              description: data.description,
              ...rest,
            },
          }),
        )
        break
      }
      default: {
        break
      }
    }
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      description: 'Special Interest name',
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'Special Interest Description',
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      description: 'date of created Special Interest',
      disableColumnMenu: true,
      width: 150,
      valueGetter: (params) => moment(params?.row?.created_at).format('DD/MM/YYYY'),
    },
    {
      field: 'action',
      headerName: 'Action',
      disableColumnMenu: true,
      sortable: false,
      width: 150,
      renderCell: (row) => {
        return (
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              aria-label="edit"
              size="medium"
              onClick={() => openEditSpecialInterestModal(row)}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="medium" onClick={() => openDeleteModal(row.id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        )
      },
    },
  ]

  return (
    <div>
      <Box backgroundColor={'white'} padding={4} borderRadius={2}>
        <div style={{ marginBottom: 10 }}>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddSpecialInterestModal}>
            Add Special Interest
          </Button>
        </div>
        <Box sx={{ height: 350, width: '100%' }}>
          <DataGrid
            loading={specialInterestLoading}
            rows={specialInterests}
            columns={columns}
            hideFooterPagination
            hideFooterSelectedRowCount
            hideFooter
            slots={{
              toolbar: CustomToolbar,
            }}
          />
        </Box>
      </Box>
      {state.deleteModal && (
        <DeleteModal
          isOpen={state.deleteModal}
          onClose={onCloseDeleteModal}
          title={'Delete Special Interest'}
          message={'Do you really want to delete this Special Interest data'}
          firstButtonText={'CANCEL'}
          secondButtonText={'DELETE'}
          onDone={() => deleteRow()}
        />
      )}
      {!!state.updateSpecialInterest && (
        <UpdateSpecialInterest
          isOpen={state.updateSpecialInterest}
          onClose={onCloseUpdateSpecialInterest}
          onDone={onDoneUpdateSpecialInterest}
        />
      )}
    </div>
  )
}

export default SpecialInterest
