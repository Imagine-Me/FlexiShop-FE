import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}))

type ConfigurableHeaderProps = {
  headerIcon?: React.ElementType
  headerName: string
  onMenuClick: () => void
  onProfileClick: () => void
  onCartClick: () => void
}

export const ConfigurableHeader: React.FC<ConfigurableHeaderProps> = ({
  headerIcon: HeaderIcon = MenuIcon,
  headerName = 'Sample',
  onMenuClick = () => {},
  onProfileClick = () => {},
  onCartClick = () => {},
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            {HeaderIcon ? <HeaderIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {headerName}
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="cart"
            onClick={onCartClick}
            sx={{ ml: 2 }}
          >
            <ShoppingCart />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={onProfileClick}
            sx={{ ml: 2 }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
}
