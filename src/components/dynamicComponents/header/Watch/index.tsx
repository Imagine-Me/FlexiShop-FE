import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import classes from './watch.module.css'
import { useEffect, useMemo, useState } from 'react'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { IHeaderProps } from 'src/interfaces/components/header.interface'
import { IProductSearchModel } from 'src/interfaces/product.interface'
import { useDebounce } from 'src/hooks/debounce.hook'
import { useProductService } from 'src/service/product.service'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type WatchHeaderProps = Omit<IHeaderProps, 'name'>

interface ISearchProps {
  isLoading?: boolean
  onSearchChange?: (value: string) => void
}

const Search: React.FC<ISearchProps> = () => {
  const [input, setInput] = useState('')
  const [selectedValue, setSelectedValue] = useState<IProductSearchModel>()
  const debouncedInput = useDebounce(input)
  const [products, setProducts] = useState<IProductSearchModel[]>([])
  const { searchProducts, isLoading } = useProductService()

  const navigate = useNavigate()

  const onSearchChange = async (value: string) => {
    // search for products
    const data = await searchProducts(value)
    if (data) {
      setProducts(data)
    }
  }

  const updatedProducts: IProductSearchModel[] = useMemo(() => {
    const result = [...products]
    if (input) {
      result.unshift({
        link: `/product?search=${input}`,
        name: input,
        default: true,
      })
    }
    return result
  }, [products, input])

  const onChange = (value: IProductSearchModel | null) => {
    if (value) {
      setSelectedValue(value)
      navigate(value.link)
    }
  }

  useEffect(() => {
    if (input) onSearchChange?.(debouncedInput)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInput])

  return (
    <FormControl fullWidth>
      <Autocomplete
        value={selectedValue}
        disablePortal
        options={updatedProducts}
        getOptionLabel={(value) => value.name}
        inputValue={input}
        loading={isLoading}
        onInputChange={(_, value) => setInput(value)}
        onChange={(_, value) => {
          onChange(value)
        }}
        isOptionEqualToValue={(option) => selectedValue?.name === option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </React.Fragment>
              ),
            }}
            className={classes.searchBar}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props
          const image = option.image
          return (
            <Box
              component="li"
              key={key}
              className={classes.searchList}
              {...optionProps}
            >
              {image && (
                <div>
                  <img
                    height={50}
                    width={50}
                    src={image?.url}
                    alt={image?.name}
                    style={{
                      objectFit: 'contain',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              )}
              <Typography variant="h6" sx={{ ml: 2 }}>
                {option.default && 'Search for'} {option.name}
              </Typography>
            </Box>
          )
        }}
      />
    </FormControl>
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
