export interface IMenuButton {
  src: string;
  id: string;
  alt: string;
  canReadonly?: boolean;
  readonly?: boolean;
  alwaysVisible?: boolean;
  callback?(event?: Event): void;
}

export interface IFullScreenAlt {
  enter: string;
  exit: string;
}
export interface IFullScreenSrc {
  enter: string;
  exit: string;
}
