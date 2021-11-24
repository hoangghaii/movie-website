import { createStyles, makeStyles } from '@mui/styles';

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
    cardContent: {
      padding: '14px !important',
      width: '100%',
    },
  }),
);
