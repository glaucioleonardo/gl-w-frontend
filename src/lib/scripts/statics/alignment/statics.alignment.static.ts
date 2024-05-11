import { IAlignments } from './statics.alignment.interface';

class Core {
  public position: IAlignments = {
    top : 'top',
    right : 'right',
    bottom : 'bottom',
    left: 'left',
    center: 'center',
    middle: 'middle'
  };
}

export const SAlignments = new Core();
