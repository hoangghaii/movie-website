import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: () => ({
      borderRadius: '15px !important',
      backgroundColor: '#fafaff !important',
      position: 'relative',
      width: '220px',
      padding: '20px',
    }),
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    cardContent: {
      padding: '0 !important',
      width: '100%',
    },
  }),
);
