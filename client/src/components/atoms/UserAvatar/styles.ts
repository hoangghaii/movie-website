import { createStyles, makeStyles } from '@mui/styles';
import { ThemeColor } from 'src/theme';

type PropsType = {
  variant: 'primary' | 'secondary';
};

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      gap: 8,
    },
    avartarContainer: (props: PropsType) => ({
      padding: 5,
      position: 'relative',
      '&::before': {
        display: props.variant === 'primary' ? 'block' : 'none',
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
        display: props.variant === 'primary' ? 'block' : 'none',
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
    }),
    avatar: (props: PropsType) => ({
      width:
        props.variant === 'primary' ? '40px !important' : '20px !important',
      height:
        props.variant === 'primary' ? '40px !important' : '20px !important',
    }),
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
