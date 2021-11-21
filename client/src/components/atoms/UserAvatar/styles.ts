import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      gap: 8,
    },
    avartarContainer: {
      padding: 5,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        padding: '10px',
        border: `2px solid ${ThemeColor.red}`,
        borderRadius: '50%',
        clipPath: 'polygon(0 0, 81% 0, 24% 100%, 0% 100%);',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        padding: '10px',
        border: `1.5px solid ${ThemeColor.grayLight}`,
        borderRadius: '50%',
        clipPath: 'polygon(81% 0, 100% 0, 100% 100%, 24% 100%);',
      },
    },
    title: {
      fontSize: '1rem !important',
      color: ThemeColor.black,
    },
    subTitle: {
      fontSize: '.8rem !important',
      lineHeight: '1.6 !important',
      color: ThemeColor.gray,
    },
  }),
);
