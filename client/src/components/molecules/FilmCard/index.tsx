import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { FilmType } from 'src/features/common';
import { useStyles } from './styles';

type PropsType = {
  film: FilmType;
};

export const FilmCard: FC<PropsType> = ({ film }: PropsType) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.imgBox}>
        <CardMedia
          component="img"
          height="100%"
          image={film.img}
          alt={film.name}
        />
        <Chip
          className={classes.filmEpisode}
          label={`${film.episode}EP`}
          size="small"
        />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1" component="p" className={classes.title}>
          {film.name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.subTitle}
        >
          {film.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
