/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Drawer, Avatar, Title, Caption} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../style/colors';
import {connect} from 'react-redux';
class DrawableContent extends React.Component<any, any> {
  // props: any;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DrawerContentScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.CodGray,
        }}>
        <StatusBar barStyle={'light-content'} />
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingLeft: 20,
            }}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}
                style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={require('../resources/aniket.jpeg')}
                  style={{
                    width: wp('12.5%'),
                    height: hp('6.25%'),
                    borderRadius: wp('10%'),
                  }}
                />

                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={{color: Colors.White}}>
                    {this.props.user.userName}
                  </Title>
                  <Caption
                    style={{
                      color: Colors.White,
                    }}>{`${this.props.user.class}: ${this.props.user.rollNumber}`}</Caption>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Drawer.Section
                style={{
                  marginTop: 15,
                }}>
                <DrawerItem
                  icon={() => (
                    <Image
                      source={require('../resources/images.png')}
                      style={{height: hp('2.5%'), width: wp('5%')}}
                    />
                  )}
                  labelStyle={{color: Colors.White}}
                  label="EnglishMCQ"
                  onPress={() => this.props.navigation.navigate('EnglishMCQ')}
                />

                <DrawerItem
                  icon={() => (
                    <Image
                      source={require('../resources/images.png')}
                      style={{height: hp('2.5%'), width: wp('5%')}}
                    />
                  )}
                  labelStyle={{color: Colors.White}}
                  label="EnglishOral"
                  onPress={() => this.props.navigation.navigate('EnglishOral')}
                />

                <DrawerItem
                  icon={() => (
                    <Image
                      source={require('../resources/math.jpeg')}
                      style={{height: hp('2.5%'), width: wp('5%')}}
                    />
                  )}
                  labelStyle={{color: Colors.White}}
                  label="MathMCQ"
                  onPress={() => this.props.navigation.navigate('MathMCQ')}
                />
                <DrawerItem
                  icon={() => (
                    <Image
                      source={require('../resources/math.jpeg')}
                      style={{height: hp('2.5%'), width: wp('5%')}}
                    />
                  )}
                  labelStyle={{color: Colors.White}}
                  label="GetUserDetails"
                  onPress={() => this.props.navigation.navigate('GetUserDetails')}
                />
              </Drawer.Section>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
}
const mapStateToProps = user => user;
// const mapDispatchToProps = {user};

export default connect(mapStateToProps, null)(DrawableContent);
