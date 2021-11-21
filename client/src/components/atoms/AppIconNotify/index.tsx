import { Badge } from '@mui/material';
import { FC } from 'react';

type PropsType = {
  icon: React.ReactNode;
  isNotify?: boolean;
};

export const AppIconNotify: FC<PropsType> = ({
  icon,
  isNotify = false,
}: PropsType) => {
  return (
    <Badge color="error" variant="dot" invisible={!isNotify}>
      {icon}
    </Badge>
  );
};
