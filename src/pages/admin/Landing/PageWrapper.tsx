import React from 'react'
import { Breadcrumbs, Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import classes from './PageWrapper.module.css'

interface PageWrapperProps {
  children: React.ReactNode
  breadcrumbs?: { link?: string; title: string }[]
  footer?: {
    left?: React.ReactNode
    right?: React.ReactNode
  }
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  breadcrumbs,
  footer,
}) => {
  return (
    <div className={classes.container}>
      {breadcrumbs && (
        <div className={classes.breadCrumbNav}>
          <Breadcrumbs
            className={classes.breadcrumbList}
            aria-label="breadcrumb"
          >
            {breadcrumbs.map((breadcrumb) =>
              breadcrumb.link ? (
                <Link
                  key={breadcrumb.title}
                  to={breadcrumb.link}
                  className={classes.breadcrumbLink}
                >
                  {breadcrumb.title}
                </Link>
              ) : (
                <Typography key={breadcrumb.title} variant="body2">
                  {breadcrumb.title}
                </Typography>
              )
            )}
          </Breadcrumbs>
        </div>
      )}
      <div
        className={`${classes.main} ${breadcrumbs && classes.isBreadCrumb} ${footer && classes.isFooter}`}
      >
        {children}
      </div>
      {footer && (
        <Card className={classes.footer}>
          <div>{footer.left}</div>
          <div>{footer.right}</div>
        </Card>
      )}
    </div>
  )
}
