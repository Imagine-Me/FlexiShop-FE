import { Card, CardActionArea, Grid, Typography } from '@mui/material'

import classes from './category1.module.css'
import { Link } from 'react-router-dom'
import React from 'react'
import DynamicIcon from 'src/components/dynamicIcon'

const categories = [
  {
    icon: {name: "IoIosMale",type: "io"},
    title: 'Male',
  },
  {
    icon: {name: "IoIosFemale",type: "io"},
    title: 'Female',
  },
  {
    icon: {type: "io5", name:"IoWatchOutline"},
    title: 'Smart watch',
  },
  {
    icon: {name: "IoStopwatchOutline",type: "io5"},
    title: 'Analog watch',
  },
  {
    icon: {name: "TbDeviceWatchDollar",type:"tb"},
    title: 'Premium watch',
  },
]

export const Category1: React.FC = () => {

  return (
    <Grid container>
      <Grid item sm={12} md={6} lg={4}>
        <div className={classes.titleSection}>
          <Typography variant="h3">Shop by Category</Typography>
          <Link to="/">
            <Typography color="primary">See All</Typography>
          </Link>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={8}>
        <Grid container spacing={5}>
          {categories.map((category) => {
            return (
              <Grid item key={category.title} xs={12} sm={6} lg={4} xl={3}>
                <CardActionArea>
                  <Card className={classes.card}>
                    <DynamicIcon iconName={category.icon} className={classes.icon} />
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
