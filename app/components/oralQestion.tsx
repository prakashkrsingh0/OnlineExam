import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Tts from 'react-native-tts';

interface OralQuestionProps {
  oralQuestionText: string;
}

export default class OralQuestion extends React.Component<OralQuestionProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.oralContentStyle}>
        <View
          style={{
            marginLeft: wp('5%'),
            marginRight: wp('5%'),
            marginTop: hp('-30%'),
          }}>
          <View style={styles.textQuestionStyle}>
            <Text>{this.props.oralQuestionText}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => Tts.speak(this.props.oralQuestionText)}>
            <Image
              source={require('../resources/speaker.png')}
              style={styles.speakerStyle}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textQuestionStyle: {
    height: hp('15%'),
    width: wp('80%'),
    borderRadius: wp('20%'),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('35%'),
  },
  questionTextStyle: {
    fontSize: hp('3.5%'),
    lineHeight: hp('3%'),
  },
  iconStyle: {
    height: hp('5%'),
    width: wp('8%'),
    marginTop: hp('6%'),
  },
  speakerStyle: {
    backgroundColor: '#E21717',
    height: hp('6%'),
    width: wp('14%'),
    marginBottom: hp('10%'),
  },
  oralContentStyle: {
    backgroundColor: '#03203C',
    height: hp('45%'),
    width: wp('100%'),
  },
});
