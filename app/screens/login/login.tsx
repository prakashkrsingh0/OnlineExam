import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type state = {
  ProfilePicture: any;
  UserName: string;
  class: string;
  school: string;
  ParentContact: string;
  schoolContact: string;
};

export default class Login extends React.Component<any, state> {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePicture: null,
      UserName: null,
      class: null,
      school: null,
      ParentContact: null,
      schoolContact: null,
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* PROFILE VIEW */}
        <TouchableOpacity onPress={() => console.log('need tyo change image')}>
          <Image
            source={require('../../resources/aniket.jpeg')}
            style={{
              width: wp('40%'),
              height: hp('20%'),
              alignSelf: 'center',
              borderRadius: wp('20%'),
              marginTop: hp('5%'),

              marginBottom: hp('5%'),
            }}
          />
        </TouchableOpacity>
        {/* PRESONAL DETAILS  */}
        <View
          style={{
            width: wp('90%'),
            backgroundColor: '#17406D',
            height: hp('35%'),
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: wp('5%'),
            marginTop: hp('5%'),
            paddingTop: hp('1%'),
          }}>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}> Enter Your Name </Text>
              <TextInput style={styles.userDetailsTextInput} />
          </View>

          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              In which class you are studing
            </Text>
              <TextInput style={styles.userDetailsTextInput} />
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              In which school you are studing{' '}
            </Text>
              <TextInput style={styles.userDetailsTextInput} />
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              Enter your parent's conatct number
            </Text>
              <TextInput style={styles.userDetailsTextInput} />
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              Enter your school's conatct number
            </Text>
              <TextInput style={styles.userDetailsTextInput} />
          </View>
        </View>

        {/* verify */}
        <TouchableOpacity
          onPress={() => 
            this.props.navigation.navigate("Profile") 
        }
          style={{
            backgroundColor: '#F1DFFF',
            width: wp('25%'),
            borderRadius: hp('5%'),
            alignSelf: 'center',
            height: hp('4.5%'),
            justifyContent:"center",
            marginTop:hp("10%"),
          }}>
            <Text style={{
              textAlign:"center"
            }}> Verify</Text>
        </TouchableOpacity>


        {/* DEVELOPER CONTACT */}
        <TouchableOpacity
          style={styles.developerContact}
          onPress={() => {
            Linking.openURL('https://tekticle.wordpress.com/about-me/');
          }}>
          <Text style={styles.developerContactText}>
            Click on.To Contact To @developer_Team.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#17406D',
    flex: 1,
    paddingTop: hp('5%'),
  },
  developerContactText: {
    color: '#17406D',
    fontWeight: 'bold',
  },
  developerContact: {
    alignSelf: 'center',
    marginTop: hp('3%'),
    backgroundColor: 'white',
  },
  userDetails: {
    flexDirection: 'column',
    alignSelf: 'center',
    paddingVertical: hp('1%'),
  },
  userDetailsText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    paddingBottom: hp('1%'),
  },
  userDetailsTextInput: {
    backgroundColor: '#395E88',
    width: wp('70%'),
    height: hp('5%'),
    borderRadius: wp('5%'),
    paddingVertical: hp('1%'),
    alignContent:"center",
    paddingHorizontal:wp("3%"),
    color:"#FFFFFF"

  },
});
