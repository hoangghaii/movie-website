import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: 400,
      border: `2.5px solid ${ThemeColor.gray}`,
      padding: '7px 15px',
      boxSizing: 'border-box',
      borderRadius: 22,
    },
    icon: {
      color: ThemeColor.gray,
    },
    input: {
      flex: 1,
      marginLeft: 8,
      color: `${ThemeColor.gray} !important`,
    },
  }),
);
