import { Avatar, Typography } from '@mui/material';
import { FC } from 'react';
import { stringAvatar } from 'src/features/common';
import { useStyles } from './styles';

type PropsType = {
  userName: string;
  level?: number;
  imgSrc?: string;
  variant?: 'primary' | 'secondary';
};

export const UserAvatar: FC<PropsType> = ({
  userName,
  level,
  imgSrc,
  variant = 'primary',
}: PropsType) => {
  const classes = useStyles({ variant });

  return (
    <>
      {variant === 'primary' ? (
        <div className={classes.root}>
          <div className={classes.avartarContainer}>
            {imgSrc ? (
              <Avatar className={classes.avatar} alt={userName} src={imgSrc} />
            ) : (
              <Avatar className={classes.avatar} {...stringAvatar(userName)} />
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
      ) : imgSrc ? (
        <Avatar className={classes.avatar} alt={userName} src={imgSrc} />
      ) : (
        <Avatar className={classes.avatar} {...stringAvatar(userName)} />
      )}
    </>
  );
};
