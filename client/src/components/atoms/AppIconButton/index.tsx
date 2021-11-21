import { IconButton } from '@mui/material';
import { FC } from 'react';
import { ColorVariant } from 'src/features/common';

type PropsType = {
  disabled?: boolean;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: ColorVariant;
  onClick?: () => void;
};

export const AppIconButton: FC<PropsType> = (props: PropsType) => {
  const {
    disabled = false,
    icon,
    size = 'medium',
    color = undefined,
    onClick = undefined,
  } = props;

  return (
    <IconButton size={size} color={color} disabled={disabled} onClick={onClick}>
      {icon}
    </IconButton>
  );
};
