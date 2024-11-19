import { Grid, Typography } from '@mui/material'
import classes from './footer1.module.css'
import { Link } from 'react-router-dom'
import DynamicIcon from 'src/components/generic/dynamicIcon'
import { MdCopyright } from 'react-icons/md'

interface LinkIcon {
  icon: { type: string; name: string }
  link: string
  title: string
}

interface Links {
  title: string
  link: string
}

interface Menus {
  title: string
  links: Links[]
}

export interface Footer1Props {
  logo: string
  socialMedia: LinkIcon[]
  menus: Menus[]
  copyright: string
}

export const Footer1: React.FC<Footer1Props> = ({
  copyright,
  socialMedia,
  logo,
  menus,
}) => {
  return (
    <div className={classes.Footer}>
      <Grid container>
        <Grid item xs={12} md={4} xl={6}>
          <div>
            <img src={logo} alt="Logo" className={classes.logo} />
            <div className={classes.socialMedia}>
              {socialMedia.map(({ link, title, icon }) => (
                <Link to={link} title={title} key={title}>
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
          <Grid container>
            {menus.map(({ title, links }) => (
              <Grid item md={12} lg={4} key={title}>
                <h3 className={classes.menuTitle}>{title}</h3>
                <ul className={classes.menuLinks}>
                  {links.map(({ link, title }) => (
                    <li key={`${title}_${link}`}>
                      <Link to={link} title={title}>
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
