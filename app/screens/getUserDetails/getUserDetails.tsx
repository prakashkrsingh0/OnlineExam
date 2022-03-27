import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';

export default class GetUserDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            responseData:[]
        }
    }
    // componentDidMount(){
    //     // const response = axios.get("https://api.github.com/users")
    //     // console.log("response ==> ",response)
    // }
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.searchConatiner}>
          <TextInput
            placeholder="Search user "
            placeholderTextColor={'black'}
            style={styles.seachStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'pink',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('8%'),
  },
  searchConatiner: {
    width: wp('92%'),
    height: hp('7%'),
    borderRadius: wp('2%'),
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seachStyle:{
      backgroundColor:"yellow",
      width:wp("90%"),
      height: hp("6%"),
      textAlign:"center"
  }
});
