import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const commonStyle = StyleSheet.create({
  pageContainerStyle: {
    flex: 1,
    backgroundColor: '#03203C',
    height: hp('35%'),
    width: wp('100%'),
  },
  flexDirectionCol: {
    flexDirection: 'column',
  },
});
