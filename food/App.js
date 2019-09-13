import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReduxScreen from './src/screens/ReduxScreen';

const navigator = createStackNavigator({
  Redux: ReduxScreen
}, {
  initialRouteName: 'Redux',
  defaultNavigationOptions: {
    title: 'Redux',
  }
});

export default createAppContainer(navigator);