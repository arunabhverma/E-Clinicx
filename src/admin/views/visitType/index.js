import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Box, Stack, IconButton, Button } from '@mui/material'
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid'
import {
  getVisitTypeData,
  deleteVisitTypesData,
  addVisitTypeData,
  updateVisitTypeData,
} from 'src/admin/redux/settings/slice'
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material'
import UpdateVisit from './updateVisit'
import DeleteModal from '../../../global/components/modals'
import '../../../global/scss/style.scss'

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}

const VisitType = () => {
  const { visitTypes, visitLoading } = useSelector((state) => state.adminSettingReducer)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    deleteModal: null,
    updateVisit: null,
  })

  useEffect(() => {
    getVisitTypeApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getVisitTypeApi = () => {
    dispatch(getVisitTypeData())
  }

  const deleteRow = () => {
    dispatch(deleteVisitTypesData(state.deleteModal))
    onCloseDeleteModal()
  }

  const onCloseDeleteModal = () => setState((prev) => ({ ...prev, deleteModal: null }))

  const onCloseUpdateVisit = () => setState((prev) => ({ ...prev, updateVisit: null }))

  const openDeleteModal = (id) => {
    setState((prev) => ({ ...prev, deleteModal: id }))
  }

  const openAddVisitModal = () => {
    setState((prev) => ({ ...prev, updateVisit: { title: 'Add Visit Type', footer: 'Add' } }))
  }

  const openEditVisitModal = (row) => {
    setState((prev) => ({ ...prev, updateVisit: { title: 'Edit Visit Type', ...row.row } }))
  }

  const onDoneUpdateVisit = (title, data) => {
    onCloseUpdateVisit()
    switch (title) {
      case 'Add Visit Type': {
        dispatch(addVisitTypeData({ name: data.name }))
        break
      }
      case 'Edit Visit Type': {
        dispatch(
          updateVisitTypeData({
            id: data.id,
            data: {
              name: data.name,
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
      description: 'Visit type name',
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      description: 'date of created visit',
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
            <IconButton aria-label="edit" size="medium" onClick={() => openEditVisitModal(row)}>
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
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddVisitModal}>
            Add Visit Type
          </Button>
        </div>
        <Box sx={{ height: 350, width: '100%' }}>
          <DataGrid
            loading={visitLoading}
            rows={visitTypes}
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
          title={'Delete Visit Type'}
          message={'Do you really want to delete this Visit Type'}
          firstButtonText={'CANCEL'}
          secondButtonText={'DELETE'}
          onDone={() => deleteRow()}
        />
      )}
      {!!state.updateVisit && (
        <UpdateVisit
          isOpen={state.updateVisit}
          onClose={onCloseUpdateVisit}
          onDone={onDoneUpdateVisit}
        />
      )}
    </div>
  )
}

export default VisitType
