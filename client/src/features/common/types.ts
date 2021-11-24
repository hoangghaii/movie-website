export type ColorVariant =
  | 'inherit'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | undefined;

export type FilmType = {
  img: string;
  name: string;
  desc: string;
  episode: number;
};
