import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import OralQuestion from '../../components/oralQestion';
import {commonStyle} from '../../style/commonStyle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../style/fonts';
import {EnglishOralDataQuestion} from '../../resources/CommonData';
import CommonParentForAll from '../../components/commonParentForAll';

export default class EnglishOral extends React.Component {
  props: any;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CommonParentForAll {...this.props}>
        <View style={styles.titleStyle}>
          <Text
            style={{
              fontSize: hp('2.5%'),
              // fontFamily: fontFamily.SEMI_BOLD,
            }}>
            ENGLISH FOR YOU
          </Text>
        </View>
        <FlatList
          data={EnglishOralDataQuestion}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            console.log('DATA : ', item);
            return (
              <View style={commonStyle.flexDirectionCol}>
                <OralQuestion oralQuestionText={item.question} />
              </View>
            );
          }}
        />
      </CommonParentForAll>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: hp('2%'),
    height: hp('7%'),
    width: wp('80%'),
    borderRadius: wp('12%'),
    backgroundColor: 'white',
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundcolor: {
    backgroundColor: '#03203C',
  },
});
