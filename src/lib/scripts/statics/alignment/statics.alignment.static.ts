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
// tslint:disable-next-line:variable-name
export const SAlignments = new Core();
