import { Variants } from 'framer-motion'
import { Animations } from 'src/interfaces/components/fullSizeBanner.interface'

export const getAnimation = (
  animation: Animations
): Variants => {
  switch (animation) {
    case 'left-to-right':
      return {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
      }
    case 'zoom-in-out':
      return {
        initial: { scale: 0.7, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.2, opacity: 0 },
      }
    case 'zoom-out-in':
      return {
        initial: { scale: 0.8, opacity: 0.5 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.2, opacity: 0 },
      }
  }
}
