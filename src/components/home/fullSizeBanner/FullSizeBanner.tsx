import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getAnimation } from './animations'
import { IFullBannerProps } from 'src/interfaces/components/fullSizeBanner.interface'
import { useStyles } from './style'
import { useComponentStyle } from 'src/hooks/component.hook'

const FullSizeBanner: React.FC<IFullBannerProps> = ({ props }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { classes } = useStyles()
  const {
    images,
    textContent,
    slideDuration,
    contentMaxHeight,
    contentMinHeight,
    falloutContentColor,
    animation,
    textContentMaxWidth,
    textContentVerticalAlign,
    textContentHorizontalAlign,
    transitionDuration,
    textContentGap,
    textContentPadding,
    backgroundImagePosition,
    backgroundImageSize,
  } = useComponentStyle(props)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (images.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, slideDuration * 1000)
    }

    return () => interval && clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      height="100%"
      minHeight={`${contentMinHeight}px`}
      maxHeight={`${contentMaxHeight}px`}
      className={classes.fullSizeBanner}
      sx={{ backgroundColor: falloutContentColor }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundPosition: backgroundImagePosition,
            backgroundSize: backgroundImageSize,
          }}
          className={classes.child}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: transitionDuration }}
          variants={getAnimation(animation)}
        />
      </AnimatePresence>
      <Box
        position="absolute"
        className={classes.content}
        maxWidth={`${textContentMaxWidth}px`}
        justifyContent={textContentVerticalAlign}
        alignItems={textContentHorizontalAlign}
        padding={textContentPadding}
        gap={textContentGap}
      >
        <Typography
          variant={textContent.heading.variant}
          sx={textContent.heading.style}
        >
          {textContent.heading.text}
        </Typography>
        <Typography
          variant={textContent.description.variant}
          sx={textContent.description.style}
        >
          {textContent.description.text}
        </Typography>
        <div>
          <Button
            variant={textContent.button.variant}
            fullWidth={false}
            sx={textContent.button.style}
          >
            {textContent.button.text}
          </Button>
        </div>
      </Box>
    </Box>
  )
}
export { FullSizeBanner }
