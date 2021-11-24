import { AvatarGroup, Card, CardContent, Skeleton } from '@mui/material';
import { FC } from 'react';
import { useStyles } from './styles';

export const PartyCardLoading: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeader}>
        <Skeleton
          variant="rectangular"
          width={45}
          height={45}
          style={{ borderRadius: '10px' }}
        />
        <AvatarGroup max={3}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
        </AvatarGroup>
      </div>
      <CardContent className={classes.cardContent}>
        <Skeleton />
        <Skeleton width="60%" />
      </CardContent>
    </Card>
  );
};
