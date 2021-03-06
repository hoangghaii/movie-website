import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: '15px !important',
      background: '#fafaff',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '250px',
    },
    imgBox: {
      width: '100%',
      height: '160px',
      position: 'relative',
    },
    filmEpisode: {
      position: 'absolute',
      top: 12,
      left: 10,
      fontWeight: 600,
    },
    cardContent: {
      padding: '14px !important',
    },
    title: {
      fontWeight: '500 !important',
    },
    subTitle: {
      fontSize: '0.85rem !important',
      fontWeight: '400 !important',
      color: ThemeColor.grayLight,
    },
  }),
);
