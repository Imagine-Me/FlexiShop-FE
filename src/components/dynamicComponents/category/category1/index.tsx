import { Card, CardActionArea, Grid, Typography } from '@mui/material'

import classes from './category1.module.css'
import React from 'react'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { LinkButton } from 'src/components/generic/linkButton/LinkButton'
import { Category1 as Category1Props } from 'src/interfaces/components/home.interface'

interface ICategory1Props {
  data: Category1Props
}

export const Category1: React.FC<ICategory1Props> = ({ data }) => {
  return (
    <Grid container>
      <Grid item sm={12} md={6} lg={4}>
        <div className={classes.titleSection}>
          <Typography variant="h2">{data.title}</Typography>
          <LinkButton to={data.link.url}>{data.link.title}</LinkButton>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={8}>
        <Grid container spacing={5}>
          {data.categories.map((category) => {
            return (
              <Grid item key={category.category} xs={12} sm={6} lg={4} xl={3}>
                <CardActionArea>
                  <Card className={classes.card}>
                    <DynamicIcon
                      iconName={category.icon}
                      className={classes.icon}
                    />
                    <Typography>{category.category}</Typography>
                  </Card>
                </CardActionArea>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
