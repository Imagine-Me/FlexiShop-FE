import { Card, CardActionArea, Grid, Typography } from '@mui/material'

import classes from './category1.module.css'
import React from 'react'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { categoriesMock } from 'src/mock/category'
import { LinkButton } from 'src/components/generic/linkButton/LinkButton'

export const Category1: React.FC = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6} lg={4}>
        <div className={classes.titleSection}>
          <Typography variant="h2">Shop by Category</Typography>
          <LinkButton to="/">See All</LinkButton>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={8}>
        <Grid container spacing={5}>
          {categoriesMock.map((category) => {
            return (
              <Grid item key={category.title} xs={12} sm={6} lg={4} xl={3}>
                <CardActionArea>
                  <Card className={classes.card}>
                    <DynamicIcon
                      iconName={category.icon}
                      className={classes.icon}
                    />
                    <Typography>{category.title}</Typography>
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
