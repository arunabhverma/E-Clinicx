import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Box, Stack, IconButton, Button } from '@mui/material'
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid'
import {
  getSpecialityData,
  addSpecialityData,
  deleteSpecialityData,
  updateSpecialityData,
} from 'src/admin/redux/settings/slice'
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material'
import UpdateSpeciality from './updateSpeciality'
import DeleteModal from '../../../global/components/modals'
import '../../../global/scss/style.scss'

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}

const Speciality = () => {
  const { specialities, specialityLoading } = useSelector((state) => state.adminSettingReducer)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    deleteModal: null,
    updateSpeciality: null,
  })

  useEffect(() => {
    getSpecialityDataApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSpecialityDataApi = () => {
    dispatch(getSpecialityData())
  }

  const deleteRow = () => {
    dispatch(deleteSpecialityData(state.deleteModal))
    onCloseDeleteModal()
  }

  const onCloseDeleteModal = () => setState((prev) => ({ ...prev, deleteModal: null }))

  const onCloseUpdateSpeciality = () => setState((prev) => ({ ...prev, updateSpeciality: null }))

  const openDeleteModal = (id) => {
    setState((prev) => ({ ...prev, deleteModal: id }))
  }

  const openAddSpecialityModal = () => {
    setState((prev) => ({ ...prev, updateSpeciality: { title: 'Add Speciality', footer: 'Add' } }))
  }

  const openEditSpecialityModal = (row) => {
    setState((prev) => ({ ...prev, updateSpeciality: { title: 'Edit Speciality', ...row.row } }))
  }

  const onDoneUpdateSpeciality = (title, data) => {
    let rest = { created_by: 0, created_by_id: 0, updated_by: 0, updated_by_id: 0 }
    onCloseUpdateSpeciality()
    switch (title) {
      case 'Add Speciality': {
        dispatch(addSpecialityData({ name: data.name, description: data.description, ...rest }))
        break
      }
      case 'Edit Speciality': {
        dispatch(
          updateSpecialityData({
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
      description: 'Speciality name',
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'Speciality Description',
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
            <IconButton
              aria-label="edit"
              size="medium"
              onClick={() => openEditSpecialityModal(row)}
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
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddSpecialityModal}>
            Add Speciality
          </Button>
        </div>
        <Box sx={{ height: 350, width: '100%' }}>
          <DataGrid
            loading={specialityLoading}
            rows={specialities}
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
          title={'Delete Speciality'}
          message={'Do you really want to delete this Speciality'}
          firstButtonText={'CANCEL'}
          secondButtonText={'DELETE'}
          onDone={() => deleteRow()}
        />
      )}
      {!!state.updateSpeciality && (
        <UpdateSpeciality
          isOpen={state.updateSpeciality}
          onClose={onCloseUpdateSpeciality}
          onDone={onDoneUpdateSpeciality}
        />
      )}
    </div>
  )
}

export default Speciality
