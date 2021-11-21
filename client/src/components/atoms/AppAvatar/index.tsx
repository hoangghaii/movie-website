import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useStyles } from './styles';

type PropsType = {
  imgSrc: string;
};

export const AppAvatar: FC<PropsType> = ({ imgSrc }: PropsType) => {
  const classes = useStyles();

  return <Avatar className={classes.root} src={imgSrc} />;
};
