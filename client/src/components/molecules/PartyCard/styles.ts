import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

type PropsType = {
  isChoose: boolean;
};

export const useStyles = makeStyles(() =>
  createStyles({
    root: (props: PropsType) => ({
      borderRadius: '15px !important',
      backgroundColor: props.isChoose
        ? '#fafaff !important'
        : '#f5f6ff !important',
      position: 'relative',
      width: '220px',
      padding: '20px',
      cursor: 'pointer',
      transition: 'all .3s',
      transform: props.isChoose ? 'scale(1.1)' : 'scale(1)',
    }),
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    cardContent: {
      padding: '0 !important',
    },
    title: {
      fontWeight: '500 !important',
      marginBottom: '-5px !important',
    },
    subTitle: {
      fontSize: '0.85rem !important',
      fontWeight: '400 !important',
      color: ThemeColor.grayLight,
    },
  }),
);
