import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import profile from '../screens/auth/profile';
const screens = {
  SignupScreen: {
    screen: SignupScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },

  ForgetPasswordScreen: {
    screen: ForgetPasswordScreen
  },
  profile: {
    screen: profile
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
