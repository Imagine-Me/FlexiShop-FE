import { Box, Button, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { HomeContextProvider } from 'src/context/home/home.context'

const HomePage = () => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h3" flex={1}>
          Pages - Home
        </Typography>
        <div>
          <Button
            variant="contained"
            // disabled={isLoading}
            // onClick={onFormSubmit}
          >
            {/* {isLoading && (
              <CircularProgress sx={{ mr: 1, color: 'white' }} size={12} />
            )} */}
            Update
          </Button>
        </div>
      </Box>
      <HomeContextProvider>
        <Outlet />
      </HomeContextProvider>
    </>
  )
}

export default HomePage
