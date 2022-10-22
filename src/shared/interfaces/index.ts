export type typeIcons =
  | 'pencil'
  | 'lock'
  | 'playButton'
  | 'alert'
  | 'logo'
  | 'live'
  | 'search'
  | 'like'
  | 'burger'
  | 'error'
  | 'profile'
  | 'arrowLeft'
  | 'eyeOpen'
  | 'eyeClosed'
  | 'home'
  | 'user';

export interface IIconsProps {
  type?: typeIcons;
  width?: number;
  height?: number;
  color?: string;
  onClick?: any;
  isFilled?: boolean;
}

export interface IText {
  text: string;
  color?: string;
  textAlign?: 'center';
  margin?: string;
}

export interface IPagination {
  limit?: number;
}

export interface ILink {
  name: string;
  link: string;
}
