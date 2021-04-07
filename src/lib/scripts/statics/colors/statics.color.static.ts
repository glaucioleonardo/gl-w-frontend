import { IColors } from './statics.color.interface';

class Core {
  public color: IColors = {
    black: '000000',
    darkGray: '575757',
    darkGray1: '3f3f3f',
    darkGray2: '333437',
    darkGray2_3: '2c2c2f',
    darkGray3: '1a1b1d',
    darkGray3_5: '0e0e0f',

    lightGray: 'f2f2f2',
    mediumGray: '797979',
    lightGreen: '33cc99',
    lightRed: 'ea4949',
    orange: 'ff9933',

    pink: 'D24077',

    yellow: 'ffff66',
    white : 'ffffff'
  };
}
export const SColors = new Core();
