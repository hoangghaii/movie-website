import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      textDecoration: 'none',
      color: ThemeColor.grayLight,
      transition: 'all .3s',
      '&:hover': {
        color: ThemeColor.black,
        '& > svg': {
          color: ThemeColor.red,
        },
      },
    },
  }),
);
