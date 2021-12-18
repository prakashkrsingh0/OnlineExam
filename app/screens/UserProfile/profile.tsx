import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';

type state = {
  ProfilePicture: any;
  UserName: string;
  class: string;
  school: string;
  ParentContact: string;
  schoolContact: string;
};

class Profile extends React.Component<any, state> {
  constructor(props) {
    super(props);
    this.state = {
      ProfilePicture: null,
      UserName: 'Aniket Kumar Singh',
      class: 'KG-B',
      school: 'St. Francis school',
      ParentContact: '+917903239967',
      schoolContact: '+917699323097',
    };
  }

  selectImage = isCamera => {
    const options = {
      cropping: true,
    };

    const response = image => {
      const choose_image = {
        type: image.mime || 'image/png',
        name: `${new Date().getTime()}.${
          image?.mime?.split('/')[1] || 'avatar.png'
        }`,
        uri:
          Platform.OS === 'android'
            ? image.path
            : image.path.replace('file://', ''),
      };
    };
    if (isCamera) {
      ImagePicker.openCamera(options).then(response);
    } else {
      ImagePicker.openPicker(options).then(response);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar 
        barStyle={"dark-content"}
        />
        {/* BACK ARROW  */}
        <TouchableOpacity
          onPress={() => {
            console.log('baCK -=', this.props.navigation.goBack());
          }}
          style={{
            borderRadius: hp('5%'),
            alignSelf: 'flex-start',
            marginLeft: wp('5%'),
          }}>
          <Image
            source={require('../../resources/ArrowLeft.png')}
            style={{
              width: wp('5%'),
              height: hp('2%'),
              alignSelf: 'center',
              borderRadius: wp('5%'),
              marginTop: hp('2%'),
            }}
          />
        </TouchableOpacity>

        {/* PROFILE VIEW */}
        <TouchableOpacity onPress={() => this.selectImage(true)}>
          <Image
            source={require('../../resources/aniket.jpeg')}
            style={{
              width: wp('40%'),
              height: hp('25%'),
              alignSelf: 'center',
              borderRadius: wp('5%'),
              marginTop: hp('5%'),
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
            <Text style={styles.userDetailsText}> I'm </Text>
            <TouchableOpacity>
              <Text style={styles.userDetailsText}> {this.props.user.userName}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}> I'm studying in class</Text>
            <TouchableOpacity>
              <Text style={styles.userDetailsText}> {this.props.user.class}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>I'm going to </Text>
            <TouchableOpacity>
              <Text style={styles.userDetailsText}>{this.props.user.schoolName}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              Please contact to my Parent on
            </Text>
            <TouchableOpacity>
              <Text style={styles.userDetailsText}>
                {' '}
                {this.props.user.parentContactNumber}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userDetailsText}>
              Please contact to my school on{' '}
            </Text>
            <TouchableOpacity>
              <Text style={styles.userDetailsText}>
                {this.props.user.schoolContactNumber}
              </Text>
            </TouchableOpacity>
          </View>
          {/* verify */}
        <TouchableOpacity
          onPress={() => 
            this.props.navigation.navigate("EnglishMCQ") 
        }
          style={{
            backgroundColor: '#F1DFFF',
            width: wp('25%'),
            borderRadius: hp('5%'),
            alignSelf: 'center',
            height: hp('4.5%'),
            justifyContent:"center",
            marginTop:hp("2%"),
          }}>
            <Text style={{
              textAlign:"center"
            }}> Verify</Text>
        </TouchableOpacity>
        </View>
        {/* DEVELOPER CONTACT */}
        <TouchableOpacity
          style={styles.developerContact}
          onPress={() => {
            Linking.openURL('https://tekticle.wordpress.com/about-me/');
          }}>
          <Text style={styles.developerContactText}>
            Click here, To Contact with our @developer_Team.
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = user => user; 

export default connect(mapStateToProps, null)(Profile);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#68EFDC',
    height:hp("100%"),
    width:wp("100%"),
    marginTop:hp("5%")
  },
  developerContactText: {
    color: '#17406D',
    fontWeight: 'bold',
  },
  developerContact: {
    alignSelf: 'center',
    marginTop: hp('10%'),
    backgroundColor: 'white',
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: hp('1%'),
  },
  userDetailsText: {color: '#FFFFFF'},
});
