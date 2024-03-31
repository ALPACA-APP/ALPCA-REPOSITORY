import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

// import the pages
import MainView from './MainView';
import Login from './Login';
import Register from './Register';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainView">
        <Stack.Screen options={{ headerShown: false }} name="MainView" component={MainView} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="MainNavigation" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}