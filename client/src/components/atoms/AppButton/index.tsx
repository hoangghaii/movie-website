import { LoadingButton } from '@mui/lab';
import { FC } from 'react';
import { useStyles } from './styles';

type PropsType = {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
  loading?: boolean;
  children: React.ReactNode;
};

export const AppButton: FC<PropsType> = (props: PropsType) => {
  const {
    variant = 'contained',
    disabled = false,
    onClick,
    size = 'medium',
    children,
    icon,
    iconPosition,
    type = 'button',
    style,
    loading = false,
  } = props;
  const classes = useStyles();

  return (
    <>
      {iconPosition ? (
        iconPosition === 'start' ? (
          <LoadingButton
            variant={variant}
            className={classes.root}
            disabled={disabled}
            onClick={onClick}
            size={size}
            startIcon={icon}
            type={type}
            style={style}
            loading={loading}
            loadingPosition="start"
          >
            {children}
          </LoadingButton>
        ) : (
          <LoadingButton
            className={classes.root}
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            size={size}
            endIcon={icon}
            type={type}
            style={style}
            loading={loading}
            loadingPosition="end"
          >
            {children}
          </LoadingButton>
        )
      ) : (
        <LoadingButton
          className={classes.root}
          variant={variant}
          disabled={disabled}
          onClick={onClick}
          size={size}
          type={type}
          style={style}
          loading={loading}
        >
          {children}
        </LoadingButton>
      )}
    </>
  );
};
