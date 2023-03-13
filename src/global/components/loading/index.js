import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box flex={1} flexGrow={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress />
    </Box>
  )
}

export default Loading
