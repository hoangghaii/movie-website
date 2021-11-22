import { AvatarGroup, Typography } from '@mui/material';
import { FC } from 'react';
import { AppAvatar } from 'src/components/atoms/AppAvatar';
import { UserAvatar } from 'src/components/atoms/UserAvatar';
import { useStyles } from './styles';

type PropsType = {
  partyTitle: string;
  partySubTitle: string;
  partyImg: string;
  isChoose?: boolean;
};

export const PartyCard: FC<PropsType> = ({
  partyTitle,
  partySubTitle,
  partyImg,
  isChoose = false,
}: PropsType) => {
  const classes = useStyles({ isChoose });

  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <AppAvatar
          imgSrc={partyImg}
          style={{ width: '45px', height: '45px' }}
        />
        <AvatarGroup max={3}>
          <UserAvatar
            userName="User A"
            imgSrc={
              'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            variant="secondary"
          />
          <UserAvatar
            userName="User B"
            imgSrc={
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            variant="secondary"
          />
          <UserAvatar
            userName="User C"
            imgSrc={
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
            variant="secondary"
          />
        </AvatarGroup>
      </div>
      <Typography variant="subtitle1" component="p" className={classes.title}>
        {partyTitle}
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        className={classes.subTitle}
      >
        {partySubTitle}
      </Typography>
    </div>
  );
};
