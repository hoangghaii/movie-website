import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { AppAvatar } from 'src/components/atoms/AppAvatar';
import { AppButton } from 'src/components/atoms/AppButton';
import { useStyles } from './styles';

export const PopcornAddict: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <AppAvatar
        imgSrc={
          'https://cdn.dribbble.com/users/4387/screenshots/4572086/no_rival_dribbble.jpg?compress=1&resize=800x600'
        }
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" component="p" className={classes.title}>
          Popcorn Addict
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.subTitle}
        >
          4/6h viewing time
        </Typography>
      </CardContent>
      <AppButton
        style={{
          textTransform: 'initial',
          background: '#829bb0',
          borderRadius: '10px',
        }}
      >
        View challenges
      </AppButton>
    </Card>
  );
};
