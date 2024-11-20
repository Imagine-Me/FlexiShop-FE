import { Grid, Typography } from '@mui/material'
import classes from './footer1.module.css'
import { Link } from 'react-router-dom'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { MdCopyright } from 'react-icons/md'
import { IFooter } from 'src/interfaces/components/footer.interface'

export type Footer1Props = Omit<IFooter, 'name'>

export const Footer1: React.FC<Footer1Props> = ({
  copyright,
  socialMedia,
  logo,
  linkMenu,
}) => {
  return (
    <div className={classes.Footer}>
      <Grid container>
        <Grid item xs={12} md={4} xl={6}>
          <div>
            <img src={logo.url} alt={logo.name} className={classes.logo} />
            <div className={classes.socialMedia}>
              {socialMedia.map(({ url, title, icon }, index) => (
                <Link to={url} title={title} key={`${title}_${index}`}>
                  <DynamicIcon
                    size={28}
                    iconName={icon}
                    className={classes.socialMediaIcon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8} xl={6}>
          <Grid
            container
            sx={{
              justifyContent: 'flex-end',
            }}
          >
            {linkMenu.map(({ title, links }, index) => (
              <Grid item md={12} lg={4} key={title + index}>
                <h3 className={classes.menuTitle}>{title}</h3>
                <ul className={classes.menuLinks}>
                  {links.map(({ url, title }) => (
                    <li key={`${title}_${url}`}>
                      <Link to={url} title={title}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.copyRight}>
        <MdCopyright />
        <Typography variant="body2">{copyright}</Typography>
      </div>
    </div>
  )
}
