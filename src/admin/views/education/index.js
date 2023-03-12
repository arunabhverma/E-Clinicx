import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Box, Stack, IconButton, Button } from '@mui/material'
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid'
// import {
//   getEducationData,
//   getSpecialityData,
//   addSpecialityData,
//   deleteSpecialityData,
//   updateSpecialityData,
// } from 'src/admin/redux/settings/slice'
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material'
import UpdateEducation from './updateEducation'
import DeleteModal from '../../../global/components/modals'
import '../../../global/scss/style.scss'

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}

const Education = () => {
  const { educations, educationsLoading } = useSelector((state) => state.adminSettingReducer)
  // const dispatch = useDispatch()

  const [state, setState] = useState({
    deleteModal: null,
    updateEducation: null,
  })

  useEffect(() => {
    getEducationDataApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getEducationDataApi = () => {
    // dispatch(getEducationData())
  }

  const deleteRow = () => {
    // dispatch(deleteSpecialityData(state.deleteModal))
    onCloseDeleteModal()
  }

  const onCloseDeleteModal = () => setState((prev) => ({ ...prev, deleteModal: null }))

  const onCloseUpdateEducation = () => setState((prev) => ({ ...prev, updateEducation: null }))

  const openDeleteModal = (id) => {
    setState((prev) => ({ ...prev, deleteModal: id }))
  }

  const openAddEducationModal = () => {
    setState((prev) => ({ ...prev, updateEducation: { title: 'Add Education', footer: 'Add' } }))
  }

  const openEditSpecialityModal = (row) => {
    setState((prev) => ({ ...prev, updateEducation: { title: 'Edit Education', ...row.row } }))
  }

  const onDoneUpdateEducation = (title, data) => {
    // let rest = { created_by: 0, created_by_id: 0, updated_by: 0, updated_by_id: 0 }
    onCloseUpdateEducation()
    switch (title) {
      case 'Add Education': {
        // dispatch(addSpecialityData({ name: data.name, description: data.description, ...rest }))
        break
      }
      case 'Edit Education': {
        // dispatch(
        //   updateSpecialityData({
        //     id: data.id,
        //     data: {
        //       name: data.name,
        //       description: data.description,
        //       ...rest,
        //     },
        //   }),
        // )
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
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddEducationModal}>
            Add Speciality
          </Button>
        </div>
        <Box sx={{ height: 350, width: '100%' }}>
          <DataGrid
            loading={educationsLoading}
            rows={educations}
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
      {!!state.updateEducation && (
        <UpdateEducation
          isOpen={state.updateEducation}
          onClose={onCloseUpdateEducation}
          onDone={onDoneUpdateEducation}
        />
      )}
    </div>
  )
}

export default Education
