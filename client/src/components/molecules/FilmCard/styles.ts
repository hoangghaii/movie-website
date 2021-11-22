import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: '20px',
      background: 'linear-gradient(to left bottom, #ebeff7, #d2dde7)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '180px',
      padding: '35px 0 22px',
    },
    title: {
      fontWeight: '500 !important',
    },
    subTitle: {
      fontSize: '0.85rem !important',
      fontWeight: '400 !important',
      color: ThemeColor.grayLight,
      marginBottom: '15px !important',
    },
  }),
);
