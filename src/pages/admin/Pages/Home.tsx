import { Box, Button, Typography } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" alignItems="center" sx={{ mb: 8 }}>
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
    </>
  )
}

export default HomePage
