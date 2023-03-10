import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton, CContainer, CSpinner, CTable } from '@coreui/react'
import { getVisitTypeData } from 'src/admin/redux/settings/slice'
import '../../../global/scss/style.scss'

const handleEdit = () => {}
const handleDelete = () => {}

const columns = [
  {
    key: 'id',
    label: 'S. No.',
    _props: { scope: 'col' },
  },
  {
    key: 'name',
    label: 'Name',
    _props: { scope: 'col' },
  },
  {
    key: 'action',
    label: 'Action',
    _props: { scope: 'col' },
  },
]

const VisitType = () => {
  const { visitTypes, visitLoading } = useSelector((state) => state.adminSettingReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    getVisitTypeApi()
  }, [])

  const getVisitTypeApi = () => {
    dispatch(getVisitTypeData())
  }

  return (
    <div>
      <CContainer className="custom-main-container center">
        {visitLoading ? <CSpinner /> : <CTable columns={columns} items={visitTypes} striped />}
      </CContainer>
    </div>
  )
}

export default VisitType
