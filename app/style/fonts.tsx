import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const appearance = {
  FULL: 1,
  LIGHT: 0.5,
  THIN_LIGHT: 0.4,
  EXTRA_LIGHT: 0.2,
  ALTRA_THIN_LIGHT: 0.1,
};

export const fontSize = {
  xs: hp('1.125%'), //9
  s: hp('1.5%'), //12
  m: hp('1.75%'), //14
  l: hp('2%'), //16
  xl: hp('2.25%'), //18
  xxl: hp('2.5%'), //20
  xxxl: hp('2.75%'), //22
  xxxxl: hp('3%'), //24
  xxxxll: hp('3.5%'), //26
  xxxxxl: hp('5%'), //40
  xxxxxxl: hp('8%'), //64
  xxxxxxxl: hp('8.875%'), //71
};

export const fontFamily = {
  BOLD: 'SourceSansPro-Bold',
  EXTRA_LIGHT: 'SourceSansPro-ExtraLight',
  LIGHT: 'SourceSansPro-Light',
  REGULAR: 'SourceSansPro-Regular',
  SEMI_BOLD: 'SourceSansPro-SemiBold',
  PACIFICO_REGULAR: 'Pacifico-Regular',
};
