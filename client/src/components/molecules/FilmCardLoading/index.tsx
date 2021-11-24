import { Card, CardContent, Skeleton } from '@mui/material';
import { FC } from 'react';
import { useStyles } from './styles';

export const FilmCardLoading: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Skeleton variant="rectangular" width="100%" height={160} />
      <CardContent className={classes.cardContent}>
        <Skeleton />
        <Skeleton width="60%" />
      </CardContent>
    </Card>
  );
};
