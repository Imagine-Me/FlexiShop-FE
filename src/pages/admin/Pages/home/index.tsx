import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomeContextProvider } from 'src/context/home/home.context'
import { useHomeContext } from 'src/context/home/home.hook'

const HomePage = () => {
  const { saveComponent, isLoading } = useHomeContext()

  return (
    <>
      <Box display="flex" flexWrap="wrap" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h3" flex={1}>
          Pages - Home
        </Typography>
        <div>
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={saveComponent}
          >
            {isLoading && (
              <CircularProgress sx={{ mr: 1, color: 'white' }} size={12} />
            )}
            Update
          </Button>
        </div>
      </Box>
      <Outlet />
    </>
  )
}
const HomePageWrapper: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomePage />
    </HomeContextProvider>
  )
}

export default HomePageWrapper
