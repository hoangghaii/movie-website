import { MicNone, Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { FC } from 'react';
import { useStyles } from './styles';

type PropsType = {};

export const InputSearch: FC<PropsType> = (props: PropsType) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Search className={classes.icon} />
      <InputBase className={classes.input} placeholder="Search" />
      <MicNone className={classes.icon} />
    </form>
  );
};
