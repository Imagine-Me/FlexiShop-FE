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
import classes from './watch.module.css'
import { useState } from 'react'
import DynamicIcon from 'src/components/dynamicIcon'
import { IHeader } from 'src/interfaces/components/header.interface'

type WatchHeaderProps = Omit<IHeader, 'name'>

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

export const WatchHeader: React.FC<WatchHeaderProps> = ({
  title,
  logo,
  cartIcon,
  wishListIcon,
}) => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.logoSection}>
          <img src={logo?.url} className={classes.logo} alt={logo?.name} />
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
              <DynamicIcon iconName={cartIcon} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <DynamicIcon iconName={wishListIcon} />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" variant="middle" />
          <Avatar className={classes.avatar} sx={{ bgcolor: 'primary.main' }}>
            G
          </Avatar>
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
