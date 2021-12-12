import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import EnglishOral from './app/screens/english/englishOral';
import EnglishMCQ from './app/screens/english/englishMCQ';
import MathMCQ from './app/screens/Maths/mathsMCQ';
import DrawableContent from './app/screens/DrawableContent';
import Profile from './app/screens/UserProfile/profile';
import Login from './app/screens/login/login';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from "react-native"

const QuestionStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppQuestionStack = () => {
  return (
    <QuestionStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <QuestionStack.Screen name="EnglishMCQ" component={EnglishMCQ} />
      <QuestionStack.Screen name="EnglishOral" component={EnglishOral} />
      <QuestionStack.Screen name="MathMCQ" component={MathMCQ} />
      <QuestionStack.Screen name="Profile" component={Profile} />
      <QuestionStack.Screen name="Login" component={Login} />
    </QuestionStack.Navigator>
  );
};

const RootDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Root"
        drawerContent={props => <DrawableContent {...props} />}>
        <Drawer.Screen name="Root" component={AppQuestionStack} />
      </Drawer.Navigator>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
      barStyle={"light-content"}
      />
      <RootDrawerNav />
    </NavigationContainer>
  );
};

export default App;
