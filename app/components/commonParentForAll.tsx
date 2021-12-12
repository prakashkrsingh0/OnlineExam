import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CommonParentForAll extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{height: hp('100%')}}>
        <View style={styles.backgroundcolor}>
          <View style={{marginLeft: wp('5%'), marginRight: wp('5%')}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
              style={{marginTop: hp('2%'), alignSelf:"flex-start"}}>
              <Image
            source={require('../resources/hembeger.png')}
            style={{
              width: wp('5%'),
              height: hp('3%'),
              alignSelf: 'center',
              borderRadius: wp('5%'),
              marginTop: hp('2%'),
            }}
          />
            </TouchableOpacity>
            {this.props.children}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundcolor: {
    backgroundColor: '#17406D',
  },
});
