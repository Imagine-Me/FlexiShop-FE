import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  ThemeOptions,
  Typography,
} from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { convertCamelCaseToReadableString } from 'src/utils/string.utils'
import { ColorPickerTrigger } from 'src/components/generic/colorPicker/ColorPicker'
import { IThemePalette } from 'src/interfaces/config.interface'
import { NumberField } from 'src/components/generic/numberField/NumberField'
import { useTemplateStore } from 'src/store/template.store'
import { PageWrapper } from '../Landing/PageWrapper'
import useTemplateService from 'src/service/template.service'
import { useConfigStore } from 'src/store/config.store'

const ThemePage = () => {
  const { theme } = useTemplateStore()
  const [state, setState] = useState<ThemeOptions | undefined | null>()

  const { isLoading, updateTheme } = useTemplateService()

  const { theme: themeName } = useConfigStore()

  const changeTheme = (key1: string, key2: string, color: string) => {
    if (state) {
      const clonedState = structuredClone(state) as any
      if (typeof clonedState.palette[key1 as keyof ThemeOptions] === 'object') {
        clonedState.palette[key1][key2] = color
        setState(clonedState)
      }
    }
  }

  const onThemeUpdate = async () => {
    if (state && themeName?.name) {
      await updateTheme(themeName.name, state)
    }
  }

  useEffect(() => {
    const palette = structuredClone(theme)
    setState(palette)
  }, [theme])

  const getThemeElements = useCallback(
    (
      obj: ThemeOptions['palette'],
      result = [] as React.ReactNode[],
      index_key = ''
    ) => {
      Object.keys(obj!).forEach((key, index) => {
        if (typeof obj![key as keyof IThemePalette] === 'object') {
          index_key = key
          // there is sub elements
          result.push(
            <Grid item key={`${index_key}_${key}_${index}`} sm={12}>
              <Typography
                variant="h5"
                sx={{ textTransform: 'capitalize', my: 2 }}
                width="100%"
              >
                {key}
              </Typography>
            </Grid>
          )
          return getThemeElements(
            obj![key as keyof IThemePalette] as unknown as IThemePalette,
            result,
            index_key
          )
        } else {
          // no sub elements
          result.push(
            <Grid
              key={`${index_key}_${key}_${index}`}
              item
              xs={12}
              md={6}
              lg={3}
              xl={2}
            >
              <Card sx={{ padding: 3, height: '100%' }}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  width="100%"
                  height="100%"
                >
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      flex: 1,
                      textWrap: 'nowrap',
                    }}
                  >
                    {convertCamelCaseToReadableString(key)}
                  </Typography>
                  {(typeof obj![key as keyof IThemePalette] as any) ===
                  'number' ? (
                    <NumberField
                      size="small"
                      fullWidth={false}
                      value={obj![key as keyof IThemePalette]}
                      onChange={(value) =>
                        changeTheme(index_key, key, value as unknown as string)
                      }
                      inputProps={{
                        min: 0,
                        max: 1,
                      }}
                    />
                  ) : (
                    <ColorPickerTrigger
                      color={obj![key as keyof IThemePalette] as string}
                      onChange={(color) => changeTheme(index_key, key, color)}
                    />
                  )}
                </Box>
              </Card>
            </Grid>
          )
        }
      })
      return result
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  )

  return (
    <PageWrapper
      breadcrumbs={[{ title: 'Configurations' }, { title: 'Theme' }]}
      footer={{
        right: (
          <Button
            variant="contained"
            onClick={onThemeUpdate}
            disabled={isLoading}
          >
            {isLoading && <CircularProgress size={12} />}
            Update
          </Button>
        ),
      }}
    >
      <Grid container spacing={2}>
        {!state ? <CircularProgress /> : getThemeElements(state.palette)}
        {!state ? <CircularProgress /> : null}
      </Grid>
    </PageWrapper>
  )
}

export default ThemePage
