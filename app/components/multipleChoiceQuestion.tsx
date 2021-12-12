import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {commonStyle} from '../style/commonStyle';

interface MultipleChoiceQuestionProps {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  actualAnswer: string;
  color?: boolean;
}

interface MultipleChoiceQuestionState {
  optionA: boolean;
  optionB: boolean;
  optionC: boolean;
  optionD: boolean;
}
export default class MultipleChoiceQuestion extends React.Component<
  MultipleChoiceQuestionProps,
  MultipleChoiceQuestionState
> {
  props: any;
  constructor(props: MultipleChoiceQuestionProps) {
    super(props);
    this.state = {
      optionA: null,
      optionB: null,
      optionC: null,
      optionD: null,
    };
  }

  render() {
    const answercheck = () => {
      if (
        this.props.actualAnswer.toLocaleLowerCase() ===
        this.props.optionA.toLocaleLowerCase()
      ) {
        return this.setState({
          optionA: true,
          optionB: false,
          optionC: false,
          optionD: false,
        });
      } else if (
        this.props.actualAnswer.toLocaleLowerCase() ===
        this.props.optionB.toLocaleLowerCase()
      ) {
        return this.setState({
          optionB: true,
          optionA: false,
          optionC: false,
          optionD: false,
        });
      } else if (
        this.props.actualAnswer.toLocaleLowerCase() ===
        this.props.optionC.toLocaleLowerCase()
      ) {
        return this.setState({
          optionC: true,
          optionB: false,
          optionA: false,
          optionD: false,
        });
      } else {
        return this.setState({
          optionD: true,
          optionA: false,
          optionB: false,
          optionC: false,
        });
      }
    };
    return (
      <View
        style={{
          backgroundColor: '#17406D',
          height: hp('40%'),
          width: wp('100%'),
          paddingTop: hp('5%'),
        }}>
        <View style={styles.commonSideMarginStyle}>
          <View style={styles.questionViewStyle}>
            {this.props.color ? (
              <View>
                <View
                  style={{
                    height: hp('10%'),
                    width: wp('20%'),
                    backgroundColor: this.props.question,
                    borderRadius: wp('10%'),
                  }}
                />
                {/* <Text style={{color: this.props.question}}>FIND MY COLOR</Text> */}
              </View>
            ) : (
              <Text style={styles.mcqQuestionStyle}>{this.props.question}</Text>
            )}
          </View>
          <View>
            <View style={styles.mcqStyle}>
              {this.state.optionA === true ? (
                <TouchableOpacity
                  style={[
                    styles.optionStyle,
                    styles.optionBackgroundGreenColor,
                  ]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionA}
                  </Text>
                </TouchableOpacity>
              ) : this.state.optionA === false ? (
                <TouchableOpacity
                  style={[styles.optionStyle, styles.optionBackgroundRedColor]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionA}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionA}
                  </Text>
                </TouchableOpacity>
              )}

              {this.state.optionB === true ? (
                <TouchableOpacity
                  style={[
                    styles.optionStyle,
                    styles.optionBackgroundGreenColor,
                  ]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionB}
                  </Text>
                </TouchableOpacity>
              ) : this.state.optionB === false ? (
                <TouchableOpacity
                  style={[styles.optionStyle, styles.optionBackgroundRedColor]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionB}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionB}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.bottomButtomPosition}>
              {this.state.optionC === true ? (
                <TouchableOpacity
                  style={[
                    styles.optionStyle,
                    styles.optionBackgroundGreenColor,
                  ]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionC}
                  </Text>
                </TouchableOpacity>
              ) : this.state.optionC === false ? (
                <TouchableOpacity
                  style={[styles.optionStyle, styles.optionBackgroundRedColor]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionC}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionC}
                  </Text>
                </TouchableOpacity>
              )}

              {this.state.optionD === true ? (
                <TouchableOpacity
                  style={[
                    styles.optionStyle,
                    styles.optionBackgroundGreenColor,
                  ]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionD}
                  </Text>
                </TouchableOpacity>
              ) : this.state.optionD === false ? (
                <TouchableOpacity
                  style={[styles.optionStyle, styles.optionBackgroundRedColor]}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionD}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={() => answercheck()}>
                  <Text style={styles.answerTextPosition}>
                    {this.props.optionD}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mcqQuestionStyle: {
    fontSize: hp('3%'),
    color: '#FFFFFF',
  },
  optionStyle: {
    height: hp('9%'),
    width: wp('44%'),
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#2827CC',
  },
  commonSideMarginStyle: {
    // marginLeft: wp('5%'),
    marginRight: wp('12%'),
    // marginTop: hp('2%'),
  },
  answerTextPosition: {
    color: '#ffffff',
    fontSize: hp('2%'),
    textAlign: 'center',
    lineHeight: hp('7%'),
  },
  questionViewStyle: {
    marginBottom: hp('3%'),
  },
  bottomButtomPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  optionBackgroundGreenColor: {
    backgroundColor: 'green',
  },
  optionBackgroundRedColor: {
    backgroundColor: 'red',
  },
  mcqStyle: {flexDirection: 'row', justifyContent: 'space-between'},
});
