import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CContainer, CSpinner, CTable } from '@coreui/react'
import { getSpecialityData } from 'src/admin/redux/settings/slice'
import '../../../global/scss/style.scss'

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
    key: 'description',
    label: 'Description',
    _props: { scope: 'col' },
  },
]

const Speciality = () => {
  const { specialities, specialityLoading } = useSelector((state) => state.adminSettingReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    getVisitTypeApi()
  }, [])

  const getVisitTypeApi = () => {
    dispatch(getSpecialityData())
  }

  return (
    <div>
      <CContainer className="custom-main-container center">
        {specialityLoading ? <CSpinner /> : <CTable columns={columns} items={specialities} />}
      </CContainer>
    </div>
  )
}

export default Speciality
