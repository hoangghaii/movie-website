import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useStyles } from './styles';

type PropsType = {
  imgSrc: string;
  style?: React.CSSProperties;
};

export const AppAvatar: FC<PropsType> = ({ imgSrc, style }: PropsType) => {
  const classes = useStyles();

  return <Avatar className={classes.root} src={imgSrc} style={style} />;
};
