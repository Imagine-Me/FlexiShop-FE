import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import classes from './watch.module.css'
import { useState } from 'react'

interface WatchHeaderProps {
  logo: string
  title?: string
}

const Search = () => {
  return (
    <TextField
      className={classes.searchBar}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Search"
    />
  )
}

export const WatchHeader: React.FC<WatchHeaderProps> = ({ title, logo }) => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.logoSection}>
          <img src={logo} className={classes.logo} />
          {title && (
            <Typography variant="h4" color="primary">
              {title}
            </Typography>
          )}
          <IconButton
            className={classes.searchIconButton}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <SearchIcon />
          </IconButton>
          <Search />
        </div>
        <div className={classes.userSection}>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" variant="middle" />
          <Avatar sx={{ bgcolor: 'primary.main' }}>G</Avatar>
        </div>
      </div>
      {showSearch && (
        <>
          <Divider />
          <div className={classes.searchMobile}>
            <Search />
          </div>
        </>
      )}
    </div>
  )
}
