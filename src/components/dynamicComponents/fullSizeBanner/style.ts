import { tss } from 'tss-react/mui';

export const useStyles = tss
    .create(() => ({
        fullSizeBanner: {
            position: 'relative',
            overflow: 'hidden',
            height: '100%'
        },
        child: {
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        content: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }
    }))