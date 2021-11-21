import { Avatar, Typography } from '@mui/material';
import { FC } from 'react';
import { stringAvatar } from 'src/features/common';
import { useStyles } from './styles';

type PropsType = {
  userName: string;
  level: number;
  imgSrc?: string;
};

export const UserAvatar: FC<PropsType> = ({
  userName,
  level,
  imgSrc,
}: PropsType) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.avartarContainer}>
        {imgSrc ? (
          <Avatar alt={userName} src={imgSrc} />
        ) : (
          <Avatar {...stringAvatar(userName)} />
        )}
      </div>
      <div>
        <Typography variant="h6" component="h6" className={classes.title}>
          {userName}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.subTitle}
        >
          Level {level}
        </Typography>
      </div>
    </div>
  );
};
