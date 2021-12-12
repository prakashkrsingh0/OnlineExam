import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import MultipleChoiceQuestion from '../../components/multipleChoiceQuestion';
import CommonParentForAll from '../../components/commonParentForAll';
import {commonStyle} from '../../style/commonStyle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../style/fonts';
import {MathMCQData} from '../../resources/CommonData';

export default class MathMCQ extends React.Component {
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
            MATHEMATICS FOR YOU
          </Text>
        </View>
        <FlatList
          data={MathMCQData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            console.log('DATA : ', item);
            return (
              <View style={commonStyle.flexDirectionCol}>
                <MultipleChoiceQuestion
                  question={item.question}
                  optionA={item.optionA}
                  optionB={item.optionB}
                  optionC={item.optionC}
                  optionD={item.optionD}
                  actualAnswer={item.actualAnswer}
                />
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
