import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

type PropsType = {
  icon: React.ReactNode;
  link: string;
  textItem: string;
};

export const MenuItem: FC<PropsType> = ({
  icon,
  link,
  textItem,
}: PropsType) => {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.root}>
      {icon}
      <Typography variant="subtitle1" component="p">
        {textItem}
      </Typography>
    </Link>
  );
};
